// Enquiry submission. Anyone (including logged-out visitors) may insert; RLS
// forbids reading back, so PII stays private. After a successful insert we fire
// the notify-admin Edge Function to email the business owner.
import { supabase, isSupabaseConfigured } from '../lib/supabase.js';
import { notifyAdmin } from './notify.js';

// "Enquire / Book this trip" from the itinerary — carries a trip summary.
export async function submitTripEnquiry({ name, email, phone, message, tripId, tripSummary }) {
  if (!isSupabaseConfigured) return { error: new Error('Backend not configured') };
  const record = {
    type: 'trip',
    name: name || null,
    email: email || null,
    phone: phone || null,
    message: message || null,
    trip_id: tripId || null,
    trip_summary: tripSummary || null,
    created_at: new Date().toISOString(),
  };
  const { error } = await supabase.from('enquiries').insert(record);
  if (!error) notifyAdmin('enquiries', record);
  return { error };
}

// General "Contact us" form from the footer.
export async function submitContactEnquiry({ name, email, message }) {
  if (!isSupabaseConfigured) return { error: new Error('Backend not configured') };
  const record = {
    type: 'contact',
    name: name || null,
    email: email || null,
    message: message || null,
    created_at: new Date().toISOString(),
  };
  const { error } = await supabase.from('enquiries').insert(record);
  if (!error) notifyAdmin('enquiries', record);
  return { error };
}
