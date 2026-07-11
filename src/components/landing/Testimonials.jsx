import { TESTIMONIALS } from '../../data/content.jsx';

export default function Testimonials() {
  return (
    <div id="tc-testimonials" style={{ background: '#2A2622', color: '#EDE7D8' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 28px' }}>
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 42px' }}>
          <div style={{ fontSize: 12.5, letterSpacing: '2px', textTransform: 'uppercase', color: '#D9A06B', marginBottom: 10 }}>Travel stories</div>
          <h2 style={{ fontSize: 38, letterSpacing: '-.6px', color: '#F4EEE1' }}>Loved by travelers across the globe</h2>
        </div>
        <div style={{ columns: 3, columnGap: 18 }}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} style={{ breakInside: 'avoid', background: '#332E29', border: '1px solid rgba(255,255,255,.07)', borderRadius: 16, padding: 20, marginBottom: 18 }}>
              <div style={{ color: '#E8B77E', fontSize: 14, letterSpacing: '2px' }}>{t.stars}</div>
              <p style={{ fontFamily: "'Newsreader',serif", fontSize: 16.5, lineHeight: 1.55, color: '#EDE7D8', margin: '12px 0 16px' }}>&quot;{t.quote}&quot;</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: t.avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#2A2622', fontSize: 14 }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#F4EEE1' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#A99E8D' }}>{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
