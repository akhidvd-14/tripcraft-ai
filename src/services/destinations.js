// Destination data-access: serves the itinerary bundle + day plan.
// DB-authoritative when Supabase is configured, with the bundled code data as an
// instant first-paint value and an offline fallback.
import { supabase, isSupabaseConfigured } from '../lib/supabase.js';
import {
  destBundle as codeBundle,
  buildDays as codeBuildDays,
  sikkimDays,
  genDays,
  genericBundle,
} from '../data/destinations.js';

function rowToBundle(row) {
  return {
    city: row.city,
    region: row.region,
    season: row.season || {},
    hotels: row.hotels || [],
    food: row.food || [],
    transport: row.transport || [],
    sos: row.sos || [],
    plan: row.plan || null,
  };
}

function daysFromBundle(key, bundle, start) {
  // Sikkim keeps its hand-authored day plan in code (its DB `plan` is null).
  if (key === 'sikkim') return sikkimDays();
  return genDays(key, bundle.plan, start);
}

// Instant, synchronous itinerary from the bundled code data.
// Used for first paint and whenever Supabase is unavailable.
export function codeItinerary(key, start, formDestination) {
  return {
    bundle: codeBundle(key, formDestination),
    days: codeBuildDays(key, start, formDestination),
  };
}

// DB-authoritative itinerary. Resolves to null when Supabase is unconfigured or
// the fetch errors, so callers fall back to codeItinerary().
export async function dbItinerary(key, start, formDestination) {
  if (!isSupabaseConfigured) return null;
  try {
    const { data, error } = await supabase
      .from('destinations')
      .select('*')
      .eq('key', key)
      .maybeSingle();
    if (error) return null;
    if (data) {
      const bundle = rowToBundle(data);
      return { bundle, days: daysFromBundle(key, bundle, start) };
    }
    // Not one of the seeded destinations → generic, generated from the typed name.
    const gb = genericBundle(formDestination);
    return { bundle: gb, days: genDays(key, gb.plan, start) };
  } catch (e) {
    return null;
  }
}
