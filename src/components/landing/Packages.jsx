import { PACKAGES } from '../../data/content.jsx';

export default function Packages({ onSelectPackage, onGoItinerary }) {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 28px 16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 36 }}>
        <div style={{ maxWidth: 560 }}>
          <div style={{ fontSize: 12.5, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent,#BC5A3C)', marginBottom: 10 }}>Handpicked destinations · India &amp; beyond</div>
          <h2 style={{ fontSize: 38, letterSpacing: '-.6px' }}>Curated getaways</h2>
          <p style={{ fontSize: 15, color: 'var(--tc-muted)', lineHeight: 1.55, marginTop: 8 }}>Beaches, mountains and leisure escapes across India and the world. Pick one and make it your own — every package is fully editable.</p>
        </div>
        <button onClick={onGoItinerary} style={{ background: 'none', border: `1px solid rgba(var(--tc-border-rgb),.25)`, padding: '12px 20px', borderRadius: 999, fontSize: 14, fontWeight: 600, cursor: 'pointer', color: 'var(--tc-text)', whiteSpace: 'nowrap' }}>
          Build a custom trip →
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        {PACKAGES.map((p) => (
          <div key={p.key} onClick={() => onSelectPackage(p.destKey)} className="tc-pkg-hover"
            style={{ background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.09)`, borderRadius: 18, overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: 180 }}>
              <img src={p.img} alt={p.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(42,38,34,.82)', color: '#F4EEE1', fontSize: 11, fontWeight: 600, letterSpacing: '.4px', padding: '5px 11px', borderRadius: 999, pointerEvents: 'none' }}>{p.badge}</div>
              <div style={{ position: 'absolute', top: 12, right: 12, background: '#F4EEE1', color: '#3F6B4A', fontSize: 11, fontWeight: 700, padding: '5px 9px', borderRadius: 8, pointerEvents: 'none' }}>★ {p.rating}</div>
            </div>
            <div style={{ padding: '18px 18px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
                <h3 style={{ fontSize: 21, lineHeight: 1.15 }}>{p.title}</h3>
                <span style={{ fontSize: 12, color: 'var(--tc-muted-3)', whiteSpace: 'nowrap' }}>{p.nights}</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--tc-muted)', lineHeight: 1.5, marginTop: 6 }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12 }}>
                {p.highlights.map((hl) => (
                  <span key={hl} style={{ fontSize: 11, background: 'var(--tc-tag-bg)', color: 'var(--tc-tag-fg)', padding: '4px 9px', borderRadius: 7 }}>{hl}</span>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, paddingTop: 14, borderTop: `1px solid rgba(var(--tc-border-rgb),.08)` }}>
                <div><span style={{ fontSize: 11, color: 'var(--tc-muted-3)' }}>from </span><span style={{ fontFamily: "'Newsreader',serif", fontSize: 20 }}>{p.price}</span><span style={{ fontSize: 11, color: 'var(--tc-muted-3)' }}> /person</span></div>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent,#BC5A3C)' }}>View itinerary →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
