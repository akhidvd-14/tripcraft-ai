import { FEATURES } from '../../data/content.jsx';

export default function Features() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 28px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
        {FEATURES.map((f) => (
          <div key={f.title} style={{ background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.08)`, borderRadius: 16, padding: 22 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--tc-tag-bg)', color: 'var(--accent,#BC5A3C)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{f.icon}</div>
            <div style={{ fontFamily: "'Newsreader',serif", fontSize: 19, marginTop: 14 }}>{f.title}</div>
            <div style={{ fontSize: 13.5, color: 'var(--tc-muted-2)', lineHeight: 1.5, marginTop: 6 }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
