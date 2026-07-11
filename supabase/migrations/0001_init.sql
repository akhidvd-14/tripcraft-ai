-- TripCraft.ai — initial schema
-- Tables: profiles, destinations, trips, trip_collaborators, enquiries
-- All tables have Row-Level Security enabled. Run this in the Supabase SQL editor
-- (or via `supabase db push`) against a fresh project.

-- ============================================================
-- PROFILES  (one row per auth user, auto-created on signup)
-- ============================================================
create table if not exists public.profiles (
  id         uuid primary key references auth.users (id) on delete cascade,
  full_name  text,
  email      text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id);

-- Auto-insert a profile row whenever a new auth user is created.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, email)
  values (new.id, new.raw_user_meta_data->>'full_name', new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================
-- DESTINATIONS  (public, read-only content; seeded in 0002)
-- ============================================================
create table if not exists public.destinations (
  key        text primary key,
  city       text not null,
  region     text not null,
  season     jsonb not null default '{}'::jsonb,
  hotels     jsonb not null default '[]'::jsonb,
  food       jsonb not null default '[]'::jsonb,
  transport  jsonb not null default '[]'::jsonb,
  sos        jsonb not null default '[]'::jsonb,
  plan       jsonb,              -- null for special-cased itineraries (e.g. sikkim)
  updated_at timestamptz not null default now()
);

alter table public.destinations enable row level security;

-- Anyone (anonymous or authenticated) may read destination content.
drop policy if exists "destinations_public_read" on public.destinations;
create policy "destinations_public_read" on public.destinations
  for select using (true);
-- No client-side write policy: destinations are seeded by migration and
-- edited via the Supabase dashboard (service role bypasses RLS).

-- ============================================================
-- TRIPS  (saved itineraries, owned by a user)
-- ============================================================
create table if not exists public.trips (
  id            uuid primary key default gen_random_uuid(),
  owner_id      uuid not null references auth.users (id) on delete cascade,
  title         text,
  destination   text not null,
  dest_key      text not null,
  start_date    date,
  end_date      date,
  traveler_type text,
  adults        int not null default 1,
  kids          int not null default 0,
  budget        text,
  departure     text,
  transport     text,
  interests     text[] not null default '{}',
  days          jsonb not null default '[]'::jsonb,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

alter table public.trips enable row level security;

-- Helper: is the current user a collaborator on a given trip?
create or replace function public.is_trip_collaborator(_trip_id uuid)
returns boolean
language sql
security definer set search_path = public
stable
as $$
  select exists (
    select 1 from public.trip_collaborators tc
    where tc.trip_id = _trip_id
      and (tc.user_id = auth.uid()
           or lower(tc.email) = lower(coalesce(auth.jwt()->>'email', '')))
  );
$$;

drop policy if exists "trips_owner_all" on public.trips;
create policy "trips_owner_all" on public.trips
  for all using (owner_id = auth.uid()) with check (owner_id = auth.uid());

drop policy if exists "trips_collab_select" on public.trips;
create policy "trips_collab_select" on public.trips
  for select using (public.is_trip_collaborator(id));

drop policy if exists "trips_collab_update" on public.trips;
create policy "trips_collab_update" on public.trips
  for update using (public.is_trip_collaborator(id));

-- ============================================================
-- TRIP_COLLABORATORS  (invited members of a trip)
-- ============================================================
create table if not exists public.trip_collaborators (
  id         uuid primary key default gen_random_uuid(),
  trip_id    uuid not null references public.trips (id) on delete cascade,
  email      text not null,
  role       text not null default 'Can edit',
  invited_by uuid references auth.users (id) on delete set null,
  user_id    uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now(),
  unique (trip_id, email)
);

alter table public.trip_collaborators enable row level security;

-- Trip owner manages the collaborator list for their trips.
drop policy if exists "collab_owner_all" on public.trip_collaborators;
create policy "collab_owner_all" on public.trip_collaborators
  for all
  using (exists (select 1 from public.trips t where t.id = trip_id and t.owner_id = auth.uid()))
  with check (exists (select 1 from public.trips t where t.id = trip_id and t.owner_id = auth.uid()));

-- A collaborator may read their own invitation rows.
drop policy if exists "collab_self_select" on public.trip_collaborators;
create policy "collab_self_select" on public.trip_collaborators
  for select using (
    user_id = auth.uid()
    or lower(email) = lower(coalesce(auth.jwt()->>'email', ''))
  );

-- ============================================================
-- ENQUIRIES  (trip enquiries + contact form; owner reads via email/dashboard)
-- ============================================================
create table if not exists public.enquiries (
  id           uuid primary key default gen_random_uuid(),
  type         text not null check (type in ('trip', 'contact')),
  name         text,
  email        text,
  phone        text,
  message      text,
  trip_id      uuid references public.trips (id) on delete set null,
  trip_summary jsonb,
  created_at   timestamptz not null default now()
);

alter table public.enquiries enable row level security;

-- Anyone may submit an enquiry (including logged-out visitors)...
drop policy if exists "enquiries_public_insert" on public.enquiries;
create policy "enquiries_public_insert" on public.enquiries
  for insert with check (true);
-- ...but there is NO select policy: enquiry PII is not client-readable.
-- The business owner reads them via email (Edge Function) or the dashboard.
