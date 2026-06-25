# RC10 Auth + Hidden Admin Studio Setup

## Decision

- Public learner app remains clean and mobile-first.
- Admin panel route is `/_studio`.
- No admin link or button is shown to normal users.
- The hidden route is not security. Real security is Supabase Auth + `profiles.role = 'admin'` + Row Level Security.
- Email registration requires Supabase email verification.
- Google login is supported through Supabase OAuth.

## Files added

- `js/supabaseConfig.js` — Supabase frontend configuration.
- `js/authShell.js` — login, registration, Google sign-in, sign-out, hidden admin shell.
- `css/auth.css` — auth/admin UI styles.
- `supabase/auth_admin_schema.sql` — database tables, trigger and RLS policies.
- `404.html` — GitHub Pages redirect support for `/_studio`.

## Activation steps

1. Create a Supabase project.
2. In Supabase SQL Editor, run `supabase/auth_admin_schema.sql`.
3. Enable Email provider in Supabase Authentication.
4. Enable email confirmation.
5. Enable Google provider if Google login is required.
6. Add the GitHub Pages URL to Supabase Auth redirect URLs.
7. Fill `js/supabaseConfig.js`:

```js
supabaseUrl: 'https://YOUR_PROJECT.supabase.co',
supabaseAnonKey: 'YOUR_PUBLIC_ANON_KEY',
authRequired: true
```

8. Sign up once with your own email.
9. Promote your account manually in Supabase SQL Editor:

```sql
update public.profiles
set role = 'admin'
where email = 'YOUR_EMAIL@example.com';
```

10. Open `/turkish-tutor-kids-clean/_studio`.

## QA gates before release

- A non-logged-in user cannot access the learner app when `authRequired=true`.
- Email signup shows a verification requirement.
- Google login signs in without email code.
- Normal user opening `/_studio` receives a 404-like denial.
- Admin user opening `/_studio` sees the studio.
- Admin-created content is saved as inactive draft first.
- No answer is revealed before solving.
- Progress still works after login is enabled.
- English and Indonesian learner text remain separated.
- Audio/image QA must still be completed before content becomes active.
