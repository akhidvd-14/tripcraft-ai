import { useEffect, useState } from 'react';
import { LogoIcon } from '../../icons.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

export default function AuthModal({ open, isRegister, authTitle, authSubtitle, authCta, authSwitchText, authSwitchCta, onClose, onToggleMode, onSuccess }) {
  const { signIn, signUp, configured } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [busy, setBusy] = useState(false);

  // Reset transient state whenever the modal opens or switches mode.
  useEffect(() => {
    setError('');
    setNotice('');
    setBusy(false);
  }, [open, isRegister]);

  if (!open) return null;

  const inputStyle = { width: '100%', padding: '13px 15px', fontSize: 14.5, border: `1px solid rgba(var(--tc-border-rgb),.2)`, borderRadius: 11, background: 'var(--tc-surface)', outline: 'none', marginBottom: 11, color: 'var(--tc-text)' };

  const handleSubmit = async () => {
    setError('');
    setNotice('');
    if (!email.trim() || !password) {
      setError('Please enter your email and password.');
      return;
    }
    if (isRegister && password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    setBusy(true);
    try {
      if (isRegister) {
        const { data, error: err } = await signUp(email.trim(), password, fullName.trim());
        if (err) { setError(err.message); return; }
        // If email confirmation is enabled, there is no session yet.
        if (!data.session) {
          setNotice('Check your email to confirm your account, then sign in.');
          return;
        }
        onSuccess?.('register');
      } else {
        const { error: err } = await signIn(email.trim(), password);
        if (err) { setError(err.message); return; }
        onSuccess?.('login');
      }
    } finally {
      setBusy(false);
    }
  };

  const onKeyDown = (e) => { if (e.key === 'Enter') handleSubmit(); };

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

        {!configured && (
          <div style={{ fontSize: 12.5, background: 'rgba(224,90,80,.12)', color: '#B0392F', border: '1px solid rgba(224,90,80,.3)', borderRadius: 10, padding: '9px 12px', marginBottom: 14 }}>
            Backend not configured yet — set up Supabase to enable real accounts.
          </div>
        )}

        {isRegister && (
          <input placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} onKeyDown={onKeyDown} style={inputStyle} />
        )}
        <input placeholder="Email address" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={onKeyDown} style={inputStyle} />
        <input type="password" placeholder="Password" autoComplete={isRegister ? 'new-password' : 'current-password'} value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={onKeyDown} style={{ ...inputStyle, marginBottom: error || notice ? 10 : 16 }} />

        {error && <div style={{ fontSize: 13, color: '#B0392F', marginBottom: 12 }}>{error}</div>}
        {notice && <div style={{ fontSize: 13, color: '#3F6B4A', marginBottom: 12 }}>{notice}</div>}

        <button onClick={handleSubmit} disabled={busy || !configured} style={{ width: '100%', background: 'var(--accent,#BC5A3C)', color: '#fff', border: 'none', padding: 14, borderRadius: 11, fontSize: 15, fontWeight: 600, cursor: busy || !configured ? 'not-allowed' : 'pointer', opacity: busy || !configured ? 0.7 : 1 }}>
          {busy ? 'Please wait…' : authCta}
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '16px 0' }}>
          <div style={{ flex: 1, height: 1, background: `rgba(var(--tc-border-rgb),.15)` }} /><span style={{ fontSize: 12, color: 'var(--tc-muted-3)' }}>or</span><div style={{ flex: 1, height: 1, background: `rgba(var(--tc-border-rgb),.15)` }} />
        </div>
        <button disabled title="Google sign-in coming soon" style={{ width: '100%', background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.2)`, padding: 12, borderRadius: 11, fontSize: 14, fontWeight: 600, cursor: 'not-allowed', opacity: 0.55, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'var(--tc-text)' }}>
          <span style={{ fontWeight: 700, color: '#4285F4' }}>G</span> Continue with Google <span style={{ fontSize: 11, color: 'var(--tc-muted-3)', fontWeight: 400 }}>· soon</span>
        </button>
        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--tc-muted)', marginTop: 18 }}>
          {authSwitchText} <span onClick={onToggleMode} style={{ color: 'var(--accent,#BC5A3C)', fontWeight: 600, cursor: 'pointer' }}>{authSwitchCta}</span>
        </p>
      </div>
    </div>
  );
}
