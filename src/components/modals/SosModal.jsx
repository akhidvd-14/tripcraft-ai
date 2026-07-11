export default function SosModal({ open, onClose, sosSubtitle, sosNumbers }) {
  if (!open) return null;

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 80, background: 'rgba(42,38,34,.55)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'var(--tc-bg)', borderRadius: 20, width: '100%', maxWidth: 400, padding: 28, animation: 'tcpop .25s ease both', borderTop: '5px solid #C0413A' }}>
        <h3 style={{ fontSize: 24, color: '#C0413A' }}>Emergency contacts</h3>
        <p style={{ fontSize: 13.5, color: 'var(--tc-muted)', margin: '6px 0 18px' }}>{sosSubtitle}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {sosNumbers.map((s) => (
            <a key={s.label} href={s.tel} style={{ display: 'flex', alignItems: 'center', gap: 13, background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.1)`, borderRadius: 13, padding: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 11, background: '#FBE3E1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, flex: 'none' }}>{s.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--tc-text)' }}>{s.label}</div>
                <div style={{ fontSize: 12.5, color: 'var(--tc-muted-2)' }}>{s.sub}</div>
              </div>
              <div style={{ fontFamily: "'Newsreader',serif", fontSize: 20, color: '#C0413A' }}>{s.number}</div>
            </a>
          ))}
        </div>
        <p style={{ fontSize: 11.5, color: 'var(--tc-muted-3)', marginTop: 14, textAlign: 'center' }}>Tap a card to dial. Numbers shown are official India helplines.</p>
      </div>
    </div>
  );
}
