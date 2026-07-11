// Trip-collaborator data access. RLS lets the trip owner manage rows and a
// collaborator read their own.
import { supabase, isSupabaseConfigured } from '../lib/supabase.js';

export async function addCollaborator(tripId, email, role) {
  if (!isSupabaseConfigured || !tripId) {
    return { error: new Error('Save the trip first, then invite members.') };
  }
  const { data: { user } } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from('trip_collaborators')
    .insert({ trip_id: tripId, email: email.toLowerCase(), role, invited_by: user?.id })
    .select()
    .single();
  return { data, error };
}

export async function listCollaborators(tripId) {
  if (!isSupabaseConfigured || !tripId) return [];
  const { data, error } = await supabase
    .from('trip_collaborators')
    .select('*')
    .eq('trip_id', tripId)
    .order('created_at', { ascending: true });
  if (error) { console.warn('[collaborators] list failed:', error.message); return []; }
  return data || [];
}
