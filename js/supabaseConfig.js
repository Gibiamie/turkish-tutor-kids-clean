export const AUTH_CONFIG = {
  /**
   * Keep this false until the Supabase project is created and the values below are filled.
   * When true, normal users must sign in before using the learner app.
   */
  authRequired: false,

  /**
   * Fill from Supabase Project Settings > API.
   * Do not use service_role key in frontend code. Only anon public key is allowed here.
   */
  supabaseUrl: '',
  supabaseAnonKey: '',

  /**
   * Final hidden admin route approved for this project.
   * This is visibility only. Real protection is enforced by role='admin' in Supabase.
   */
  adminRoute: '/_studio',

  /**
   * Local fallback only for first setup screen text. Real admin access must come from profiles.role.
   */
  appName: 'Turkish Meaning Builder'
};
