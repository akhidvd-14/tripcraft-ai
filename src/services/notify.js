// Fires the notify-admin Edge Function so the business owner is emailed about a
// new enquiry, contact message, or signup. Best-effort: the enquiry/account is
// already saved, so a mail failure never blocks the user flow.
//
// We send a webhook-shaped payload ({ type, table, record }) so the same Edge
// Function works whether it's triggered by this direct call or by a Supabase
// Database Webhook.
import { supabase, isSupabaseConfigured } from '../lib/supabase.js';

export async function notifyAdmin(table, record) {
  if (!isSupabaseConfigured) return;
  try {
    await supabase.functions.invoke('notify-admin', {
      body: { type: 'INSERT', table, record },
    });
  } catch (e) {
    // Email is best-effort; the row is already persisted.
    console.warn('[notify] notify-admin invoke failed:', e?.message || e);
  }
}
