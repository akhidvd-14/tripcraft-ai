// Saved-trip data access. All reads/writes are scoped by RLS to the current
// user (owner) plus trips they collaborate on.
import { supabase, isSupabaseConfigured } from '../lib/supabase.js';

// Create a trip row for the signed-in user. Returns { id } or null.
export async function createTrip({ form, destKey, days, title }) {
  if (!isSupabaseConfigured) return null;
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data, error } = await supabase
    .from('trips')
    .insert({
      owner_id: user.id,
      title,
      destination: form.destination,
      dest_key: destKey,
      start_date: form.start || null,
      end_date: form.end || null,
      traveler_type: form.travelerType,
      adults: form.adults,
      kids: form.kids,
      budget: form.budget,
      departure: form.departure,
      transport: form.transport,
      interests: form.interests || [],
      days,
    })
    .select('id')
    .single();
  if (error) { console.warn('[trips] create failed:', error.message); return null; }
  return data;
}

// Persist edited day plan to an existing trip.
export async function saveTripDays(tripId, days) {
  if (!isSupabaseConfigured || !tripId) return;
  const { error } = await supabase
    .from('trips')
    .update({ days, updated_at: new Date().toISOString() })
    .eq('id', tripId);
  if (error) console.warn('[trips] save failed:', error.message);
}

// List trips visible to the current user (RLS returns owned + shared).
export async function listMyTrips() {
  if (!isSupabaseConfigured) return [];
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];
  const { data, error } = await supabase
    .from('trips')
    .select('*')
    .order('updated_at', { ascending: false });
  if (error) { console.warn('[trips] list failed:', error.message); return []; }
  return (data || []).map((t) => ({ ...t, isOwner: t.owner_id === user.id }));
}
