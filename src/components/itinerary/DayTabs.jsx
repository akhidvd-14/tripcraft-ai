export default function DayTabs({ days, activeDay, onSetDay, activeDayTitle, activeDaySummary, dayOptionTabs, onSetOpt }) {
  return (
    <>
      <div className="tc-scroll" style={{ display: 'flex', gap: 8, marginBottom: 18, overflowX: 'auto' }}>
        {days.map((d, i) => {
          const on = i === activeDay;
          return (
            <div key={d.day} onClick={() => onSetDay(i)}
              style={{ flex: 'none', background: on ? '#3F4A3B' : 'var(--tc-surface)', border: `1px solid ${on ? '#3F4A3B' : `rgba(var(--tc-border-rgb),.12)`}`, borderRadius: 12, padding: '10px 16px', cursor: 'pointer', minWidth: 110 }}>
              <div style={{ fontSize: 11, letterSpacing: '1px', textTransform: 'uppercase', color: on ? '#C9B79A' : 'var(--tc-muted-3)' }}>Day {d.day}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: on ? '#F4EEE1' : 'var(--tc-text)', marginTop: 2 }}>{d.date}</div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
        <div>
          <h3 style={{ fontSize: 26 }}>{activeDayTitle}</h3>
          <div style={{ fontSize: 13, color: 'var(--tc-muted-2)' }}>{activeDaySummary}</div>
        </div>
        <div style={{ display: 'flex', gap: 6, background: 'var(--tc-section-alt)', padding: 4, borderRadius: 10 }}>
          {dayOptionTabs.map((ot, i) => (
            <div key={ot.label} onClick={() => onSetOpt(i)}
              style={{ fontSize: 12.5, fontWeight: 600, padding: '7px 13px', borderRadius: 8, cursor: 'pointer', background: ot.active ? 'var(--tc-surface)' : 'transparent', color: ot.active ? 'var(--tc-text)' : 'var(--tc-muted-2)' }}>
              {ot.label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
