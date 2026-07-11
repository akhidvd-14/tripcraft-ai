import { SEGMENTS } from '../../data/content.jsx';

export default function Segments({ onGoPlan }) {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 28px 20px' }}>
      <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 40px' }}>
        <div style={{ fontSize: 12.5, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent,#BC5A3C)', marginBottom: 10 }}>Made for how you travel</div>
        <h2 style={{ fontSize: 38, letterSpacing: '-.6px' }}>One planner, eight kinds of journey</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {SEGMENTS.map((seg) => (
          <div key={seg.title} onClick={onGoPlan} className="tc-card-hover"
            style={{ background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.08)`, borderRadius: 16, padding: '20px 18px', cursor: 'pointer' }}>
            <div style={{ color: 'var(--accent,#BC5A3C)', height: 28, display: 'flex', alignItems: 'center' }}>{seg.icon}</div>
            <div style={{ fontFamily: "'Newsreader',serif", fontSize: 19, marginTop: 12 }}>{seg.title}</div>
            <div style={{ fontSize: 13, color: 'var(--tc-muted-2)', lineHeight: 1.45, marginTop: 5 }}>{seg.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
