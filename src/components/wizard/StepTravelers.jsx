import { TRAVELER_CHOICES, INTEREST_CHOICES } from '../../data/content.jsx';

export default function StepTravelers({
  form, onSelectTraveler, onIncAdults, onDecAdults, onIncKids, onDecKids, onSelectInterest,
}) {
  const counterBtn = { width: 32, height: 32, borderRadius: 8, border: `1px solid rgba(var(--tc-border-rgb),.2)`, background: 'var(--tc-surface-alt)', fontSize: 18, cursor: 'pointer', color: 'var(--tc-text)' };

  return (
    <div style={{ animation: 'tcfade .3s ease both' }}>
      <h2 style={{ fontSize: 34, letterSpacing: '-.6px' }}>Who's traveling?</h2>
      <p style={{ color: 'var(--tc-muted)', margin: '8px 0 26px', fontSize: 15 }}>We'll tune pace, activities and recommendations to fit.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
        {TRAVELER_CHOICES.map((tt) => {
          const on = form.travelerType === tt.title;
          return (
            <div key={tt.title} onClick={() => onSelectTraveler(tt.title)}
              style={{ background: on ? '#FBEFE3' : 'var(--tc-surface)', border: `2px solid ${on ? '#BC5A3C' : `rgba(var(--tc-border-rgb),.1)`}`, borderRadius: 14, padding: '16px 12px', cursor: 'pointer', textAlign: 'center' }}>
              <div style={{ color: 'var(--accent,#BC5A3C)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 26 }}>{tt.icon}</div>
              <div style={{ fontSize: 13.5, fontWeight: 600, marginTop: 8, color: on ? '#2A2622' : 'var(--tc-text)' }}>{tt.title}</div>
            </div>
          );
        })}
      </div>
      <div style={{ background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.1)`, borderRadius: 16, padding: 20, marginTop: 20, display: 'flex', gap: 26, flexWrap: 'wrap' }}>
        <div>
          <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--tc-muted)', display: 'block', marginBottom: 8 }}>Adults</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button onClick={onDecAdults} style={counterBtn}>−</button>
            <span style={{ fontSize: 17, fontWeight: 600, minWidth: 20, textAlign: 'center' }}>{form.adults}</span>
            <button onClick={onIncAdults} style={counterBtn}>+</button>
          </div>
        </div>
        <div>
          <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--tc-muted)', display: 'block', marginBottom: 8 }}>Children</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button onClick={onDecKids} style={counterBtn}>−</button>
            <span style={{ fontSize: 17, fontWeight: 600, minWidth: 20, textAlign: 'center' }}>{form.kids}</span>
            <button onClick={onIncKids} style={counterBtn}>+</button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 22 }}>
        <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--tc-muted)' }}>Trip theme &amp; interests <span style={{ color: 'var(--tc-muted-3)', fontWeight: 400 }}>· pick one</span></label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 12 }}>
          {INTEREST_CHOICES.map((it) => {
            const on = (form.interests || []).includes(it.title);
            return (
              <div key={it.title} onClick={() => onSelectInterest(it.title)}
                style={{ display: 'flex', alignItems: 'center', gap: 8, background: on ? '#FBEFE3' : 'var(--tc-surface)', border: `2px solid ${on ? '#BC5A3C' : `rgba(var(--tc-border-rgb),.1)`}`, borderRadius: 999, padding: '9px 15px', cursor: 'pointer' }}>
                <span style={{ color: on ? '#BC5A3C' : 'var(--tc-muted-3)', display: 'flex', alignItems: 'center' }}>{it.icon}</span>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: on ? '#2A2622' : 'var(--tc-text)' }}>{it.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
