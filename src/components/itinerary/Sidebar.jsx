export default function Sidebar({
  currencyLabel, onToggleCurrency, budgetTotal, budgetPerHead, budgetTier, budgetLines,
  seasonRange, seasonSub, seasonNote,
  hotels, localTransport, feedbackMapUrl,
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'sticky', top: 84 }}>
      {/* budget */}
      <div style={{ background: '#2A2622', color: '#EDE7D8', borderRadius: 18, padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 12, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#C9B79A' }}>Est. trip budget</span>
          <div onClick={onToggleCurrency} style={{ fontSize: 11, background: 'rgba(255,255,255,.12)', padding: '4px 9px', borderRadius: 7, cursor: 'pointer' }}>{currencyLabel} ⇄</div>
        </div>
        <div style={{ fontFamily: "'Newsreader',serif", fontSize: 34, marginTop: 8 }}>{budgetTotal}</div>
        <div style={{ fontSize: 12, color: '#A99E8D' }}>{budgetPerHead} · {budgetTier}</div>
        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 9 }}>
          {budgetLines.map((bl) => (
            <div key={bl.label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5 }}>
                <span style={{ color: '#CFC6B4' }}>{bl.label}</span><span style={{ fontWeight: 600 }}>{bl.amount}</span>
              </div>
              <div style={{ height: 5, background: 'rgba(255,255,255,.1)', borderRadius: 999, marginTop: 4 }}>
                <div style={{ height: 5, borderRadius: 999, background: '#D9A06B', width: bl.pct }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* best season */}
      <div style={{ background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.1)`, borderRadius: 18, padding: 20 }}>
        <h4 style={{ fontSize: 17, fontFamily: "'Newsreader',serif" }}>Best time to visit</h4>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 6 }}>
          <span style={{ fontFamily: "'Newsreader',serif", fontSize: 22, color: 'var(--accent,#BC5A3C)' }}>{seasonRange}</span>
          <span style={{ fontSize: 12, color: 'var(--tc-muted-2)' }}>{seasonSub}</span>
        </div>
        <p style={{ fontSize: 12.5, color: 'var(--tc-muted)', lineHeight: 1.5, margin: '8px 0 0' }}>{seasonNote}</p>
      </div>

      {/* hotels */}
      <div style={{ background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.1)`, borderRadius: 18, padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4 style={{ fontSize: 17, fontFamily: "'Newsreader',serif" }}>Recommended stays</h4>
          <span style={{ fontSize: 11, color: 'var(--tc-muted-3)' }}>by reviews</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 14 }}>
          {hotels.map((h) => (
            <div key={h.name} style={{ border: `1px solid rgba(var(--tc-border-rgb),.1)`, borderRadius: 12, overflow: 'hidden' }}>
              <div className="tc-ph" style={{ height: 120, overflow: 'hidden' }}>
                <img src={h.imgUrl} alt="" loading="lazy" onError={(e) => { e.target.style.display = 'none'; }} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.2 }}>{h.name}</span>
                  <span style={{ fontSize: 11, background: '#E4EAE0', color: '#3F6B4A', padding: '2px 7px', borderRadius: 6, fontWeight: 700, whiteSpace: 'nowrap' }}>★ {h.rating}</span>
                </div>
                <div style={{ fontSize: 11.5, color: 'var(--tc-muted-2)', marginTop: 3 }}>{h.tag}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
                  <span style={{ color: '#E0A63C', fontSize: 12, letterSpacing: '1px' }}>{h.starStr}</span>
                  <span style={{ fontSize: 11, color: 'var(--tc-muted-3)' }}>{h.rating} · {h.reviews} reviews</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                  <span style={{ fontFamily: "'Newsreader',serif", fontSize: 16 }}>{h.price}<span style={{ fontSize: 11, color: 'var(--tc-muted-3)' }}>/night</span></span>
                </div>
                <a href={h.mapUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11.5, color: '#3F6B4A', marginTop: 8 }}>📍 View on Google Maps</a>
                <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                  <a href={h.mmt} target="_blank" rel="noreferrer" style={{ flex: 1, textAlign: 'center', fontSize: 11.5, fontWeight: 600, background: '#F1E6D6', color: '#8A5A3A', padding: 7, borderRadius: 8 }}>MakeMyTrip ↗</a>
                  <a href={h.booking} target="_blank" rel="noreferrer" style={{ flex: 1, textAlign: 'center', fontSize: 11.5, fontWeight: 600, background: '#EAE0F0', color: '#5B3A8A', padding: 7, borderRadius: 8 }}>Booking ↗</a>
                  <a href={h.agoda} target="_blank" rel="noreferrer" style={{ flex: 1, textAlign: 'center', fontSize: 11.5, fontWeight: 600, background: '#E0EAF0', color: '#3A6A8A', padding: 7, borderRadius: 8 }}>Agoda ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* local transport */}
      <div style={{ background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.1)`, borderRadius: 18, padding: 20 }}>
        <h4 style={{ fontSize: 17, fontFamily: "'Newsreader',serif" }}>Getting around</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
          {localTransport.map((lt) => (
            <div key={lt.mode} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, background: 'var(--tc-tag-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flex: 'none' }}>{lt.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>{lt.mode}</div>
                <div style={{ fontSize: 12, color: 'var(--tc-muted-2)' }}>{lt.note}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--tc-tag-fg)', whiteSpace: 'nowrap' }}>{lt.cost}</span>
                {lt.link && <a href={lt.link} target="_blank" rel="noreferrer" style={{ fontSize: 11, fontWeight: 600, color: 'var(--tc-text)', background: 'var(--tc-tag-bg)', padding: '3px 8px', borderRadius: 6, whiteSpace: 'nowrap' }}>{lt.linkLabel}</a>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* feedback */}
      <div style={{ background: 'var(--tc-section-alt)', border: `1px solid rgba(var(--tc-border-rgb),.1)`, borderRadius: 18, padding: 20 }}>
        <h4 style={{ fontSize: 17, fontFamily: "'Newsreader',serif" }}>Been here? Rate it</h4>
        <p style={{ fontSize: 12.5, color: 'var(--tc-muted)', margin: '6px 0 12px' }}>Share how a place was — helps other TripCraft travelers.</p>
        <div style={{ fontSize: 22, color: '#D9A06B', letterSpacing: '3px', cursor: 'pointer', marginBottom: 12 }}>★★★★★</div>
        <a href={feedbackMapUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', background: '#2A2622', color: '#F6F1E9', padding: 10, borderRadius: 10, fontSize: 13, fontWeight: 600 }}>Leave a review on Google Maps ↗</a>
      </div>
    </div>
  );
}
