export default function ItineraryHeader({
  tripTitle, tripDates, tripTravelerLabel, tripBudgetLabel, tripFromLabel,
  collaborators, reminderOn, onToggleReminder, reminderText,
  onOpenCollab, onOpenShare, onOpenSos,
}) {
  return (
    <>
      <div style={{ background: '#3F4A3B', color: '#EDE7D8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '26px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '2px', textTransform: 'uppercase', color: '#C9B79A' }}>Your itinerary</div>
            <h2 style={{ fontSize: 36, color: '#F4EEE1', marginTop: 4 }}>{tripTitle}</h2>
            <div style={{ display: 'flex', gap: 16, marginTop: 10, flexWrap: 'wrap', fontSize: 13.5, color: '#CFC6B4' }}>
              <span>📅 {tripDates}</span><span>{tripTravelerLabel}</span><span>{tripBudgetLabel}</span><span>🧭 {tripFromLabel}</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button onClick={onOpenCollab} style={{ background: 'rgba(255,255,255,.12)', color: '#F4EEE1', border: '1px solid rgba(255,255,255,.2)', padding: '10px 16px', borderRadius: 999, fontSize: 13.5, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>👥 Add member</button>
            <button onClick={onOpenShare} style={{ background: 'rgba(255,255,255,.12)', color: '#F4EEE1', border: '1px solid rgba(255,255,255,.2)', padding: '10px 16px', borderRadius: 999, fontSize: 13.5, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>🔗 Share</button>
            <button onClick={onOpenSos} title="Emergency contacts" style={{ background: 'rgba(224,90,80,.18)', color: '#F6C9C4', border: '1px solid rgba(224,90,80,.35)', padding: '10px 16px', borderRadius: 999, fontSize: 13.5, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>🚨 SOS</button>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: '#C9B79A' }}>Trip crew:</span>
            <div style={{ display: 'flex' }}>
              {collaborators.map((c, i) => (
                <div key={c.email || i} title={c.role} style={{ width: 30, height: 30, borderRadius: '50%', background: c.bg, border: '2px solid #3F4A3B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#2A2622', marginLeft: -6 }}>{c.initials}</div>
              ))}
            </div>
          </div>
          <div onClick={onToggleReminder} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,.1)', borderRadius: 999, padding: '6px 14px 6px 12px', cursor: 'pointer' }}>
            <span style={{ fontSize: 13, color: '#EDE7D8' }}>🔔 Daily itinerary reminders</span>
            <div style={{ width: 38, height: 22, borderRadius: 999, background: reminderOn ? '#8FB08A' : 'rgba(255,255,255,.25)', position: 'relative', transition: 'background .2s' }}>
              <div style={{ position: 'absolute', top: 2, left: reminderOn ? 18 : 2, width: 18, height: 18, borderRadius: '50%', background: '#fff', transition: 'left .2s' }} />
            </div>
          </div>
        </div>
      </div>
      {reminderOn && (
        <div style={{ background: 'var(--tc-tag-bg)', borderBottom: `1px solid rgba(var(--tc-border-rgb),.08)` }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '10px 28px', fontSize: 13, color: 'var(--tc-tag-fg)' }}>🔔 {reminderText}</div>
        </div>
      )}
    </>
  );
}
