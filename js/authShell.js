import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
import { AUTH_CONFIG } from './supabaseConfig.js';

const appRoot = document.getElementById('app');
const shellRoot = document.createElement('div');
shellRoot.id = 'auth-shell-root';
document.body.appendChild(shellRoot);

let supabase = null;
let authState = {
  session: null,
  profile: null,
  loading: true,
  error: '',
  message: ''
};

const hasConfig = () => Boolean(AUTH_CONFIG.supabaseUrl && AUTH_CONFIG.supabaseAnonKey);
const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

function currentRoute() {
  const url = new URL(window.location.href);
  const routedFrom404 = url.searchParams.get('route');
  if (routedFrom404) return routedFrom404;
  if (window.location.pathname.endsWith(AUTH_CONFIG.adminRoute)) return AUTH_CONFIG.adminRoute;
  if (window.location.hash === `#${AUTH_CONFIG.adminRoute}`) return AUTH_CONFIG.adminRoute;
  return '/';
}

function isAdminRoute() {
  return currentRoute() === AUTH_CONFIG.adminRoute;
}

function lockLearnerApp(locked) {
  document.body.classList.toggle('auth-locked', locked);
  if (appRoot) appRoot.setAttribute('aria-hidden', locked ? 'true' : 'false');
}

function setupRequiredView() {
  lockLearnerApp(isAdminRoute() || AUTH_CONFIG.authRequired);
  shellRoot.innerHTML = `
    <main class="auth-page">
      <section class="auth-card">
        <div class="auth-brand">TR</div>
        <h1>${escapeHtml(AUTH_CONFIG.appName)}</h1>
        <h2>Backend configuration required</h2>
        <p>Supabase is not configured yet. Fill <code>js/supabaseConfig.js</code> with the project URL and public anon key, then run the SQL setup file in Supabase.</p>
        <p class="auth-note">The existing learner app is intentionally left usable until <code>authRequired</code> is changed to <code>true</code>.</p>
      </section>
    </main>`;
}

function authView(mode = 'signin') {
  lockLearnerApp(true);
  const isSignup = mode === 'signup';
  shellRoot.innerHTML = `
    <main class="auth-page">
      <section class="auth-card">
        <div class="auth-brand">TR</div>
        <h1>${escapeHtml(AUTH_CONFIG.appName)}</h1>
        <p class="auth-subtitle">${isSignup ? 'Create an account to save progress.' : 'Sign in to continue your Turkish lessons.'}</p>

        ${authState.error ? `<div class="auth-alert error">${escapeHtml(authState.error)}</div>` : ''}
        ${authState.message ? `<div class="auth-alert ok">${escapeHtml(authState.message)}</div>` : ''}

        <button class="auth-google" data-auth-action="google">Continue with Google</button>

        <div class="auth-separator"><span>or</span></div>

        <form class="auth-form" data-auth-form="${isSignup ? 'signup' : 'signin'}">
          ${isSignup ? '<label>Name<input name="name" autocomplete="name" required /></label>' : ''}
          <label>Email<input name="email" type="email" autocomplete="email" required /></label>
          <label>Password<input name="password" type="password" autocomplete="current-password" minlength="6" required /></label>
          <button class="btn primary full" type="submit">${isSignup ? 'Create account' : 'Sign in'}</button>
        </form>

        <button class="auth-link" data-auth-action="${isSignup ? 'show-signin' : 'show-signup'}">
          ${isSignup ? 'Already have an account? Sign in' : 'New user? Create account'}
        </button>
      </section>
    </main>`;
}

function userBar() {
  if (!authState.session || isAdminRoute()) return '';
  const email = authState.session.user?.email || 'User';
  return `<div class="auth-userbar"><span>${escapeHtml(email)}</span><button data-auth-action="signout">Sign out</button></div>`;
}

async function loadProfile() {
  const userId = authState.session?.user?.id;
  if (!userId || !supabase) return null;
  const { data, error } = await supabase.from('profiles').select('id,email,full_name,role').eq('id', userId).maybeSingle();
  if (error) throw error;
  return data;
}

function normalUserDeniedView() {
  lockLearnerApp(true);
  shellRoot.innerHTML = `
    <main class="auth-page">
      <section class="auth-card">
        <div class="auth-brand">404</div>
        <h1>Page not found</h1>
        <p>This page is not available for this account.</p>
        <button class="btn primary full" data-auth-action="go-home">Go to app</button>
      </section>
    </main>`;
}

async function adminView() {
  lockLearnerApp(true);
  if (!authState.profile || authState.profile.role !== 'admin') {
    normalUserDeniedView();
    return;
  }

  const { data, error } = await supabase
    .from('content_items')
    .select('id,topic_id,turkish_word,meaning_en,meaning_id,audio_path,image_path,is_active,created_at')
    .order('created_at', { ascending: false })
    .limit(20);

  const rows = error ? [] : (data || []);
  shellRoot.innerHTML = `
    <main class="admin-page">
      <header class="admin-topbar">
        <div><strong>Turkish Meaning Builder Studio</strong><span>Hidden admin panel</span></div>
        <button data-auth-action="signout">Sign out</button>
      </header>

      <section class="admin-grid">
        <form class="admin-card" data-admin-form="content-item">
          <h2>Add / stage content item</h2>
          <label>Topic ID<input name="topic_id" placeholder="animals" required /></label>
          <label>Turkish word<input name="turkish_word" placeholder="kedi" required /></label>
          <label>English meaning<input name="meaning_en" placeholder="cat" required /></label>
          <label>Indonesian meaning<input name="meaning_id" placeholder="kucing" required /></label>
          <label>Audio path<input name="audio_path" placeholder="audio/animals/kedi.mp3" /></label>
          <label>Image path<input name="image_path" placeholder="images/animals/kedi.png" /></label>
          <button class="btn primary full" type="submit">Save as inactive draft</button>
          <p class="auth-note">Drafts are saved inactive first. They must pass audio/image QA before being used in lessons.</p>
        </form>

        <section class="admin-card">
          <h2>Latest content drafts</h2>
          ${authState.message ? `<div class="auth-alert ok">${escapeHtml(authState.message)}</div>` : ''}
          ${authState.error ? `<div class="auth-alert error">${escapeHtml(authState.error)}</div>` : ''}
          <div class="admin-table-wrap">
            <table class="admin-table">
              <thead><tr><th>Topic</th><th>TR</th><th>EN</th><th>ID</th><th>Status</th></tr></thead>
              <tbody>
                ${rows.map(row => `<tr><td>${escapeHtml(row.topic_id)}</td><td>${escapeHtml(row.turkish_word)}</td><td>${escapeHtml(row.meaning_en)}</td><td>${escapeHtml(row.meaning_id)}</td><td>${row.is_active ? 'Active' : 'Draft'}</td></tr>`).join('') || '<tr><td colspan="5">No content items yet.</td></tr>'}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>`;
}

function releaseLearnerApp() {
  lockLearnerApp(false);
  shellRoot.innerHTML = userBar();
}

async function renderAuthShell() {
  const admin = isAdminRoute();

  if (!hasConfig()) {
    if (admin || AUTH_CONFIG.authRequired) setupRequiredView();
    else releaseLearnerApp();
    return;
  }

  if (!supabase) supabase = createClient(AUTH_CONFIG.supabaseUrl, AUTH_CONFIG.supabaseAnonKey);

  const { data } = await supabase.auth.getSession();
  authState.session = data.session;

  if (!authState.session) {
    authView('signin');
    return;
  }

  try {
    authState.profile = await loadProfile();
  } catch (error) {
    authState.error = error.message || 'Profile could not be loaded.';
    authView('signin');
    return;
  }

  if (admin) await adminView();
  else releaseLearnerApp();
}

shellRoot.addEventListener('click', async event => {
  const button = event.target.closest('[data-auth-action]');
  if (!button) return;
  const action = button.dataset.authAction;
  authState.error = '';
  authState.message = '';

  if (action === 'show-signup') authView('signup');
  if (action === 'show-signin') authView('signin');
  if (action === 'go-home') window.location.href = './';

  if (action === 'google') {
    if (!supabase) supabase = createClient(AUTH_CONFIG.supabaseUrl, AUTH_CONFIG.supabaseAnonKey);
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin + window.location.pathname.replace(AUTH_CONFIG.adminRoute, '') } });
    if (error) {
      authState.error = error.message;
      authView('signin');
    }
  }

  if (action === 'signout') {
    await supabase.auth.signOut();
    authState = { session: null, profile: null, loading: false, error: '', message: '' };
    if (isAdminRoute()) authView('signin');
    else window.location.reload();
  }
});

shellRoot.addEventListener('submit', async event => {
  const authForm = event.target.closest('[data-auth-form]');
  const adminForm = event.target.closest('[data-admin-form="content-item"]');
  if (!authForm && !adminForm) return;
  event.preventDefault();
  authState.error = '';
  authState.message = '';

  if (!supabase) supabase = createClient(AUTH_CONFIG.supabaseUrl, AUTH_CONFIG.supabaseAnonKey);

  if (authForm) {
    const form = new FormData(authForm);
    const email = String(form.get('email') || '').trim();
    const password = String(form.get('password') || '');
    const name = String(form.get('name') || '').trim();

    if (authForm.dataset.authForm === 'signup') {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: name }, emailRedirectTo: window.location.origin + window.location.pathname }
      });
      if (error) authState.error = error.message;
      else authState.message = 'Account created. Please check your email verification link/code before signing in.';
      authView('signup');
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      authState.error = error.message;
      authView('signin');
    } else {
      await renderAuthShell();
    }
  }

  if (adminForm) {
    const form = new FormData(adminForm);
    const payload = {
      topic_id: String(form.get('topic_id') || '').trim(),
      turkish_word: String(form.get('turkish_word') || '').trim(),
      meaning_en: String(form.get('meaning_en') || '').trim(),
      meaning_id: String(form.get('meaning_id') || '').trim(),
      audio_path: String(form.get('audio_path') || '').trim() || null,
      image_path: String(form.get('image_path') || '').trim() || null,
      is_active: false
    };
    const { error } = await supabase.from('content_items').insert(payload);
    if (error) authState.error = error.message;
    else authState.message = 'Content draft saved. Keep it inactive until QA is complete.';
    await adminView();
  }
});

if (hasConfig()) {
  supabase = createClient(AUTH_CONFIG.supabaseUrl, AUTH_CONFIG.supabaseAnonKey);
  supabase.auth.onAuthStateChange(() => renderAuthShell());
}

renderAuthShell();
