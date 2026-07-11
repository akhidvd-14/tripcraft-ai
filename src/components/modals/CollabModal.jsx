export default function CollabModal({ open, onClose, collabInput, onSetCollabInput, collabRole, onSetCollabRole, onAddCollab, collaborators }) {
  if (!open) return null;

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 80, background: 'rgba(42,38,34,.5)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'var(--tc-bg)', borderRadius: 20, width: '100%', maxWidth: 440, padding: 28, animation: 'tcpop .25s ease both' }}>
        <h3 style={{ fontSize: 24 }}>Add a trip member</h3>
        <p style={{ fontSize: 13.5, color: 'var(--tc-muted)', margin: '6px 0 18px' }}>Members can read, edit and rearrange the itinerary with you.</p>
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          <input value={collabInput} onChange={onSetCollabInput} placeholder="Email or phone"
            style={{ flex: 1, padding: '12px 14px', fontSize: 14, border: `1px solid rgba(var(--tc-border-rgb),.2)`, borderRadius: 11, background: 'var(--tc-surface)', outline: 'none', color: 'var(--tc-text)' }} />
          <select value={collabRole} onChange={onSetCollabRole}
            style={{ padding: 12, fontSize: 13.5, border: `1px solid rgba(var(--tc-border-rgb),.2)`, borderRadius: 11, background: 'var(--tc-surface)', outline: 'none', color: 'var(--tc-text)' }}>
            <option>Can edit</option><option>Can view</option>
          </select>
        </div>
        <button onClick={onAddCollab} style={{ width: '100%', background: 'var(--accent,#BC5A3C)', color: '#fff', border: 'none', padding: 13, borderRadius: 11, fontSize: 14.5, fontWeight: 600, cursor: 'pointer' }}>Send invite</button>
        <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {collaborators.map((c) => (
            <div key={c.email} style={{ display: 'flex', alignItems: 'center', gap: 11, background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.1)`, borderRadius: 12, padding: '10px 12px' }}>
              <div style={{ width: 34, height: 34, borderRadius: '50%', background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, color: '#2A2622' }}>{c.initials}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{c.name}</div>
                <div style={{ fontSize: 12, color: 'var(--tc-muted-2)' }}>{c.email}</div>
              </div>
              <span style={{ fontSize: 11.5, background: 'var(--tc-tag-bg)', color: 'var(--tc-tag-fg)', padding: '3px 9px', borderRadius: 7 }}>{c.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
