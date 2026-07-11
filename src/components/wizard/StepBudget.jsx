import { BUDGET_CHOICES } from '../../data/content.jsx';

export default function StepBudget({ form, onSelectBudget }) {
  return (
    <div style={{ animation: 'tcfade .3s ease both' }}>
      <h2 style={{ fontSize: 34, letterSpacing: '-.6px' }}>What's your budget style?</h2>
      <p style={{ color: 'var(--tc-muted)', margin: '8px 0 26px', fontSize: 15 }}>Sets the tier for hotels, transport and dining recommendations.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {BUDGET_CHOICES.map((b) => {
          const on = form.budget === b.title;
          return (
            <div key={b.title} onClick={() => onSelectBudget(b.title)}
              style={{ display: 'flex', alignItems: 'center', gap: 16, background: on ? '#FBEFE3' : 'var(--tc-surface)', border: `2px solid ${on ? '#BC5A3C' : `rgba(var(--tc-border-rgb),.1)`}`, borderRadius: 14, padding: '18px 20px', cursor: 'pointer' }}>
              <div style={{ color: 'var(--accent,#BC5A3C)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34 }}>{b.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: on ? '#2A2622' : 'var(--tc-text)' }}>{b.title}</div>
                <div style={{ fontSize: 13, color: 'var(--tc-muted-2)', marginTop: 2 }}>{b.desc}</div>
              </div>
              <div style={{ fontFamily: "'Newsreader',serif", fontSize: 17, color: 'var(--tc-tag-fg)' }}>{b.range}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
