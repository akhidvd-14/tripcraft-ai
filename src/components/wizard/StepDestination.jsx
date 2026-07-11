import { PinIcon } from '../../icons.jsx';
import { POPULAR_DESTINATIONS } from '../../data/content.jsx';

export default function StepDestination({
  form, onSetDestination, onFocusDest, showSuggest, destSuggestions, onSelectDest,
  onSetStart, onSetEnd, tripLength,
}) {
  return (
    <div style={{ animation: 'tcfade .3s ease both' }}>
      <h2 style={{ fontSize: 34, letterSpacing: '-.6px' }}>Where are you headed?</h2>
      <p style={{ color: 'var(--tc-muted)', margin: '8px 0 26px', fontSize: 15 }}>Enter a destination and your travel dates to begin.</p>
      <div style={{ background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.1)`, borderRadius: 18, padding: 26 }}>
        <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--tc-muted)' }}>Destination</label>
        <div style={{ position: 'relative', marginTop: 8 }}>
          <input
            value={form.destination}
            onChange={onSetDestination}
            onFocus={onFocusDest}
            autoComplete="off"
            placeholder="e.g. Sikkim, India"
            style={{ width: '100%', padding: '14px 16px', fontSize: 16, border: `1px solid rgba(var(--tc-border-rgb),.2)`, borderRadius: 12, background: 'var(--tc-surface-alt)', outline: 'none', color: 'var(--tc-text)' }}
          />
          {showSuggest && destSuggestions.length > 0 && (
            <div style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0, zIndex: 30, background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.14)`, borderRadius: 12, boxShadow: '0 18px 38px -18px rgba(42,38,34,.45)', overflow: 'hidden', maxHeight: 280, overflowY: 'auto' }}>
              {destSuggestions.map((ds) => (
                <div key={ds.value} className="tc-suggest-row" onMouseDown={() => onSelectDest(ds.value)}
                  style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 14px', cursor: 'pointer', borderBottom: `1px solid rgba(var(--tc-border-rgb),.06)` }}>
                  <PinIcon />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--tc-text)' }}>{ds.city}</div>
                    <div style={{ fontSize: 12, color: 'var(--tc-muted-3)' }}>{ds.region}</div>
                  </div>
                  <span style={{ fontSize: 11, background: 'var(--tc-tag-bg)', color: 'var(--tc-tag-fg)', padding: '3px 9px', borderRadius: 7 }}>{ds.tag}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
          {POPULAR_DESTINATIONS.map((name) => (
            <span key={name} onClick={() => onSelectDest(name)} style={{ fontSize: 12.5, background: 'var(--tc-tag-bg)', color: 'var(--tc-tag-fg)', padding: '6px 12px', borderRadius: 999, cursor: 'pointer' }}>{name}</span>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 20 }}>
          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--tc-muted)' }}>Start date</label>
            <input type="date" value={form.start} onChange={onSetStart} style={{ width: '100%', marginTop: 8, padding: '13px 14px', fontSize: 15, border: `1px solid rgba(var(--tc-border-rgb),.2)`, borderRadius: 12, background: 'var(--tc-surface-alt)', outline: 'none', color: 'var(--tc-text)' }} />
          </div>
          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--tc-muted)' }}>End date</label>
            <input type="date" value={form.end} onChange={onSetEnd} style={{ width: '100%', marginTop: 8, padding: '13px 14px', fontSize: 15, border: `1px solid rgba(var(--tc-border-rgb),.2)`, borderRadius: 12, background: 'var(--tc-surface-alt)', outline: 'none', color: 'var(--tc-text)' }} />
          </div>
        </div>
        <div style={{ fontSize: 13, color: 'var(--tc-tag-fg)', background: 'var(--tc-tag-bg)', borderRadius: 10, padding: '10px 14px', marginTop: 16 }}>📅 {tripLength}</div>
      </div>
    </div>
  );
}
