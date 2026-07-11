import { STEPS } from '../../data/content.jsx';

export default function HowItWorks({ onGoPlan }) {
  return (
    <div style={{ background: 'var(--tc-section-alt)', marginTop: 64, borderTop: `1px solid rgba(var(--tc-border-rgb),.08)`, borderBottom: `1px solid rgba(var(--tc-border-rgb),.08)` }}>
      <div className="tc-pad-x" style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <h2 style={{ fontSize: 38, letterSpacing: '-.6px', maxWidth: 440 }}>From a blank calendar to a booked adventure in minutes</h2>
          <button onClick={onGoPlan} style={{ background: '#2A2622', color: '#F6F1E9', border: 'none', padding: '13px 22px', borderRadius: 999, fontSize: 14.5, fontWeight: 600, cursor: 'pointer' }}>Start planning</button>
        </div>
        <div className="tc-grid tc-grid-4" style={{ gap: 22 }}>
          {STEPS.map((st) => (
            <div key={st.n}>
              <div style={{ fontFamily: "'Newsreader',serif", fontSize: 15, color: 'var(--accent,#BC5A3C)', borderTop: '2px solid var(--accent,#BC5A3C)', paddingTop: 12, width: '100%' }}>{st.n}</div>
              <div style={{ fontFamily: "'Newsreader',serif", fontSize: 20, marginTop: 10 }}>{st.title}</div>
              <div style={{ fontSize: 13.5, color: 'var(--tc-muted)', lineHeight: 1.5, marginTop: 6 }}>{st.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
