import StepDestination from './StepDestination.jsx';
import StepTravelers from './StepTravelers.jsx';
import StepBudget from './StepBudget.jsx';
import StepTransport from './StepTransport.jsx';

const STEP_LABELS = ['Destination', 'Travelers', 'Budget', 'Transport'];

export default function PlanWizard({ planStep, onBack, onNext, ...stepProps }) {
  const wizardSteps = STEP_LABELS.map((label, i) => {
    const n = i + 1;
    const active = n === planStep;
    const done = n < planStep;
    return {
      label,
      num: done ? '✓' : n,
      bg: active ? '#BC5A3C' : done ? '#3F4A3B' : 'var(--tc-section-alt)',
      fg: (active || done) ? '#fff' : 'var(--tc-muted-3)',
      textColor: active ? 'var(--tc-text)' : 'var(--tc-muted-3)',
    };
  });
  const nextLabel = planStep >= 4 ? 'Generate itinerary ✨' : 'Continue →';

  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '48px 28px 90px', animation: 'tcfade .4s ease both' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 30 }}>
        {wizardSteps.map((w) => (
          <div key={w.label} style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
            <div style={{ width: 26, height: 26, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, background: w.bg, color: w.fg, flex: 'none' }}>{w.num}</div>
            <span style={{ fontSize: 12.5, color: w.textColor, whiteSpace: 'nowrap' }}>{w.label}</span>
            <div style={{ height: 1, background: `rgba(var(--tc-border-rgb),.15)`, flex: 1 }} />
          </div>
        ))}
      </div>

      {planStep === 1 && <StepDestination {...stepProps} />}
      {planStep === 2 && <StepTravelers {...stepProps} />}
      {planStep === 3 && <StepBudget {...stepProps} />}
      {planStep === 4 && <StepTransport {...stepProps} />}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30 }}>
        <button onClick={onBack} style={{ background: 'none', border: `1px solid rgba(var(--tc-border-rgb),.25)`, padding: '13px 24px', borderRadius: 999, fontSize: 14.5, fontWeight: 500, cursor: 'pointer', color: 'var(--tc-text)', visibility: planStep > 1 ? 'visible' : 'hidden' }}>← Back</button>
        <button onClick={onNext} style={{ background: 'var(--accent,#BC5A3C)', color: '#fff', border: 'none', padding: '13px 30px', borderRadius: 999, fontSize: 14.5, fontWeight: 600, cursor: 'pointer' }}>{nextLabel}</button>
      </div>
    </div>
  );
}
