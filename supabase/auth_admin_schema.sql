-- Turkish Meaning Builder: Auth + hidden admin studio schema
-- Run this file in Supabase SQL Editor after creating the project.
-- Never expose the service_role key in frontend code.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  role text not null default 'user' check (role in ('user','admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.content_items (
  id uuid primary key default gen_random_uuid(),
  topic_id text not null,
  turkish_word text not null,
  meaning_en text not null,
  meaning_id text not null,
  audio_path text,
  image_path text,
  is_active boolean not null default false,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    'user'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

alter table public.profiles enable row level security;
alter table public.content_items enable row level security;

drop policy if exists "users can read own profile" on public.profiles;
create policy "users can read own profile"
on public.profiles for select
to authenticated
using (id = auth.uid());

drop policy if exists "admins can read all profiles" on public.profiles;
create policy "admins can read all profiles"
on public.profiles for select
to authenticated
using (public.is_admin());

drop policy if exists "users can update own profile name" on public.profiles;
create policy "users can update own profile name"
on public.profiles for update
to authenticated
using (id = auth.uid())
with check (id = auth.uid() and role = 'user');

drop policy if exists "admins can manage profiles" on public.profiles;
create policy "admins can manage profiles"
on public.profiles for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "authenticated users can read active content" on public.content_items;
create policy "authenticated users can read active content"
on public.content_items for select
to authenticated
using (is_active = true or public.is_admin());

drop policy if exists "admins can insert content" on public.content_items;
create policy "admins can insert content"
on public.content_items for insert
to authenticated
with check (public.is_admin());

drop policy if exists "admins can update content" on public.content_items;
create policy "admins can update content"
on public.content_items for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "admins can delete content" on public.content_items;
create policy "admins can delete content"
on public.content_items for delete
to authenticated
using (public.is_admin());

-- After your first user signs up, promote yourself manually once:
-- update public.profiles set role = 'admin' where email = 'YOUR_EMAIL@example.com';
