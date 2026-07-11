import { createClient } from '@supabase/supabase-js';

// Read Vite env vars. When they're absent (e.g. before the user has set up their
// Supabase project), the app degrades gracefully to its original in-memory /
// mocked behavior instead of crashing.
const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase = isSupabaseConfigured
  ? createClient(url, anonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
    })
  : null;

if (!isSupabaseConfigured && typeof console !== 'undefined') {
  console.info(
    '[TripCraft] Supabase is not configured — running with mocked auth/trips. ' +
      'Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to a .env file to enable the backend.'
  );
}
