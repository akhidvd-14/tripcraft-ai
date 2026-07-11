import { LogoIcon } from '../../icons.jsx';

export default function AuthModal({ open, isRegister, authTitle, authSubtitle, authCta, authSwitchText, authSwitchCta, onClose, onToggleMode, onSubmit }) {
  if (!open) return null;
  const inputStyle = { width: '100%', padding: '13px 15px', fontSize: 14.5, border: `1px solid rgba(var(--tc-border-rgb),.2)`, borderRadius: 11, background: 'var(--tc-surface)', outline: 'none', marginBottom: 11, color: 'var(--tc-text)' };

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 80, background: 'rgba(42,38,34,.5)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'var(--tc-bg)', borderRadius: 20, width: '100%', maxWidth: 410, padding: 32, animation: 'tcpop .25s ease both', boxShadow: '0 30px 70px -30px rgba(0,0,0,.5)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 20 }}>
          <div style={{ width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent,#BC5A3C)', borderRadius: 8 }}>
            <LogoIcon size={16} />
          </div>
          <span style={{ fontFamily: "'Newsreader',serif", fontSize: 19, fontWeight: 600, color: 'var(--tc-text)' }}>TripCraft.ai</span>
        </div>
        <h3 style={{ fontSize: 26 }}>{authTitle}</h3>
        <p style={{ fontSize: 13.5, color: 'var(--tc-muted)', margin: '6px 0 20px' }}>{authSubtitle}</p>
        {isRegister && <input placeholder="Full name" style={inputStyle} />}
        <input placeholder="Email address" style={inputStyle} />
        <input type="password" placeholder="Password" style={{ ...inputStyle, marginBottom: 16 }} />
        <button onClick={onSubmit} style={{ width: '100%', background: 'var(--accent,#BC5A3C)', color: '#fff', border: 'none', padding: 14, borderRadius: 11, fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>{authCta}</button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '16px 0' }}>
          <div style={{ flex: 1, height: 1, background: `rgba(var(--tc-border-rgb),.15)` }} /><span style={{ fontSize: 12, color: 'var(--tc-muted-3)' }}>or</span><div style={{ flex: 1, height: 1, background: `rgba(var(--tc-border-rgb),.15)` }} />
        </div>
        <button style={{ width: '100%', background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.2)`, padding: 12, borderRadius: 11, fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'var(--tc-text)' }}>
          <span style={{ fontWeight: 700, color: '#4285F4' }}>G</span> Continue with Google
        </button>
        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--tc-muted)', marginTop: 18 }}>
          {authSwitchText} <span onClick={onToggleMode} style={{ color: 'var(--accent,#BC5A3C)', fontWeight: 600, cursor: 'pointer' }}>{authSwitchCta}</span>
        </p>
      </div>
    </div>
  );
}
