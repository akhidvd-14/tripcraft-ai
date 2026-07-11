// Enquiry submission. Anyone (including logged-out visitors) may insert; RLS
// forbids reading back, so PII stays private. The business owner is notified by
// email via the notify-admin Edge Function (DB webhook on insert).
import { supabase, isSupabaseConfigured } from '../lib/supabase.js';

// "Enquire / Book this trip" from the itinerary — carries a trip summary.
export async function submitTripEnquiry({ name, email, phone, message, tripId, tripSummary }) {
  if (!isSupabaseConfigured) return { error: new Error('Backend not configured') };
  const { error } = await supabase.from('enquiries').insert({
    type: 'trip',
    name: name || null,
    email: email || null,
    phone: phone || null,
    message: message || null,
    trip_id: tripId || null,
    trip_summary: tripSummary || null,
  });
  return { error };
}

// General "Contact us" form from the footer.
export async function submitContactEnquiry({ name, email, message }) {
  if (!isSupabaseConfigured) return { error: new Error('Backend not configured') };
  const { error } = await supabase.from('enquiries').insert({
    type: 'contact',
    name: name || null,
    email: email || null,
    message: message || null,
  });
  return { error };
}
