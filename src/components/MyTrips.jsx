import { formatRange } from '../data/destinations.js';

export default function MyTrips({ trips, loading, onOpenTrip, onGoPlan }) {
  return (
    <div className="tc-pad-x" style={{ maxWidth: 1000, margin: '0 auto', padding: '48px 28px 90px', animation: 'tcfade .4s ease both' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 28 }}>
        <div>
          <div style={{ fontSize: 12.5, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent,#BC5A3C)', marginBottom: 8 }}>Your saved journeys</div>
          <h2 style={{ fontSize: 34, letterSpacing: '-.6px' }}>My trips</h2>
        </div>
        <button onClick={onGoPlan} style={{ background: 'var(--accent,#BC5A3C)', color: '#fff', border: 'none', padding: '12px 22px', borderRadius: 999, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>+ Plan a new trip</button>
      </div>

      {loading ? (
        <div style={{ color: 'var(--tc-muted-2)', fontSize: 15, padding: '40px 0' }}>Loading your trips…</div>
      ) : trips.length === 0 ? (
        <div style={{ background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.1)`, borderRadius: 18, padding: '48px 28px', textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 10 }}>🧭</div>
          <h3 style={{ fontSize: 22, marginBottom: 6 }}>No saved trips yet</h3>
          <p style={{ fontSize: 14, color: 'var(--tc-muted-2)', maxWidth: 380, margin: '0 auto 18px', lineHeight: 1.5 }}>Plan a trip and it'll be saved here automatically — edit it any time, from any device.</p>
          <button onClick={onGoPlan} style={{ background: 'var(--accent,#BC5A3C)', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: 999, fontSize: 14.5, fontWeight: 600, cursor: 'pointer' }}>Plan your first trip</button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 16 }}>
          {trips.map((t) => (
            <div key={t.id} onClick={() => onOpenTrip(t)} className="tc-card-hover"
              style={{ background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.1)`, borderRadius: 16, padding: 20, cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
                <h3 style={{ fontSize: 20, lineHeight: 1.2 }}>{t.title || t.destination}</h3>
                {!t.isOwner && <span style={{ fontSize: 10.5, background: 'var(--tc-tag-bg)', color: 'var(--tc-tag-fg)', padding: '3px 8px', borderRadius: 6, whiteSpace: 'nowrap', fontWeight: 600 }}>Shared</span>}
              </div>
              <div style={{ fontSize: 13, color: 'var(--tc-muted-2)', marginTop: 6 }}>📅 {formatRange(t.start_date, t.end_date)}</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
                <span style={{ fontSize: 11.5, background: 'var(--tc-tag-bg)', color: 'var(--tc-tag-fg)', padding: '4px 10px', borderRadius: 999 }}>{t.traveler_type}</span>
                <span style={{ fontSize: 11.5, background: 'var(--tc-tag-bg)', color: 'var(--tc-tag-fg)', padding: '4px 10px', borderRadius: 999 }}>{t.budget}</span>
                <span style={{ fontSize: 11.5, background: 'var(--tc-tag-bg)', color: 'var(--tc-tag-fg)', padding: '4px 10px', borderRadius: 999 }}>{(t.days || []).length} days</span>
              </div>
              <div style={{ marginTop: 16, paddingTop: 12, borderTop: `1px solid rgba(var(--tc-border-rgb),.08)`, fontSize: 13, fontWeight: 600, color: 'var(--accent,#BC5A3C)' }}>Open itinerary →</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
