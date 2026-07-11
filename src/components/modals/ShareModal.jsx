export default function ShareModal({ open, onClose, onCopyLink, copyLabel }) {
  if (!open) return null;
  const iconCard = { textAlign: 'center', background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.1)`, borderRadius: 12, padding: '14px 6px', cursor: 'pointer' };

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 80, background: 'rgba(42,38,34,.5)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'var(--tc-bg)', borderRadius: 20, width: '100%', maxWidth: 440, padding: 28, animation: 'tcpop .25s ease both' }}>
        <h3 style={{ fontSize: 24 }}>Share this itinerary</h3>
        <p style={{ fontSize: 13.5, color: 'var(--tc-muted)', margin: '6px 0 18px' }}>Send your Sikkim plan to family, friends or colleagues.</p>
        <div style={{ display: 'flex', gap: 8, background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.2)`, borderRadius: 11, padding: '5px 5px 5px 14px', alignItems: 'center' }}>
          <span style={{ flex: 1, fontSize: 13, color: 'var(--tc-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>tripcraft.ai/t/sikkim-oct-2026-x8f2</span>
          <button onClick={onCopyLink} style={{ background: '#2A2622', color: '#F6F1E9', border: 'none', padding: '9px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>{copyLabel}</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginTop: 16 }}>
          <div style={iconCard}><div style={{ fontSize: 22 }}>💬</div><div style={{ fontSize: 11.5, marginTop: 5 }}>WhatsApp</div></div>
          <div style={iconCard}><div style={{ fontSize: 22 }}>✉️</div><div style={{ fontSize: 11.5, marginTop: 5 }}>Email</div></div>
          <div style={iconCard}><div style={{ fontSize: 22 }}>📱</div><div style={{ fontSize: 11.5, marginTop: 5 }}>Messages</div></div>
          <div style={iconCard}><div style={{ fontSize: 22 }}>⬇️</div><div style={{ fontSize: 11.5, marginTop: 5 }}>PDF</div></div>
        </div>
      </div>
    </div>
  );
}
