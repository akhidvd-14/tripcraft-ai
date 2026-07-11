import { PinIcon } from '../../icons.jsx';
import { TRANSPORT_OPTIONS } from '../../data/content.jsx';

export default function StepTransport({
  form, onSetDeparture, onFocusDep, showDepSuggest, depSuggestions, onSelectDep, onSelectTransport,
}) {
  return (
    <div style={{ animation: 'tcfade .3s ease both' }}>
      <h2 style={{ fontSize: 34, letterSpacing: '-.6px' }}>How will you get there?</h2>
      <p style={{ color: 'var(--tc-muted)', margin: '8px 0 26px', fontSize: 15 }}>Tell us your departure city — we'll compare flights, rail and road.</p>
      <div style={{ background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.1)`, borderRadius: 16, padding: 22 }}>
        <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--tc-muted)' }}>Departure city</label>
        <div style={{ position: 'relative', marginTop: 8 }}>
          <input
            value={form.departure}
            onChange={onSetDeparture}
            onFocus={onFocusDep}
            autoComplete="off"
            placeholder="e.g. Mumbai"
            style={{ width: '100%', padding: '13px 15px', fontSize: 15, border: `1px solid rgba(var(--tc-border-rgb),.2)`, borderRadius: 12, background: 'var(--tc-surface-alt)', outline: 'none', color: 'var(--tc-text)' }}
          />
          {showDepSuggest && depSuggestions.length > 0 && (
            <div style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0, zIndex: 30, background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.14)`, borderRadius: 12, boxShadow: '0 18px 38px -18px rgba(42,38,34,.45)', overflow: 'hidden', maxHeight: 260, overflowY: 'auto' }}>
              {depSuggestions.map((dc) => (
                <div key={dc.city} className="tc-suggest-row" onMouseDown={() => onSelectDep(dc.city)}
                  style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 14px', cursor: 'pointer', borderBottom: `1px solid rgba(var(--tc-border-rgb),.06)` }}>
                  <PinIcon />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--tc-text)' }}>{dc.city}</div>
                    <div style={{ fontSize: 12, color: 'var(--tc-muted-3)' }}>{dc.region}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 16 }}>
        {TRANSPORT_OPTIONS.map((tr) => {
          const on = form.transport === tr.title;
          return (
            <div key={tr.title} onClick={() => onSelectTransport(tr.title)}
              style={{ background: on ? '#FBEFE3' : 'var(--tc-surface)', border: `2px solid ${on ? '#BC5A3C' : `rgba(var(--tc-border-rgb),.1)`}`, borderRadius: 14, padding: '18px 16px', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--accent,#BC5A3C)', display: 'flex', alignItems: 'center' }}>{tr.icon}</span>
                <span style={{ fontSize: 11, background: 'var(--tc-tag-bg)', color: 'var(--tc-tag-fg)', padding: '3px 8px', borderRadius: 6 }}>{tr.tag}</span>
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, marginTop: 12, color: on ? '#2A2622' : 'var(--tc-text)' }}>{tr.title}</div>
              <div style={{ fontSize: 12.5, color: 'var(--tc-muted-2)', marginTop: 3 }}>{tr.detail}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, paddingTop: 10, borderTop: `1px dashed rgba(var(--tc-border-rgb),.15)` }}>
                <span style={{ fontSize: 12, color: 'var(--tc-muted-3)' }}>{tr.duration}</span>
                <span style={{ fontFamily: "'Newsreader',serif", fontSize: 16 }}>{tr.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
