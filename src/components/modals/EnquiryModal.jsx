import { useEffect, useState } from 'react';

export default function EnquiryModal({ open, tripLabel, onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open) { setError(''); setDone(false); setBusy(false); }
  }, [open]);

  if (!open) return null;

  const inputStyle = { width: '100%', padding: '12px 14px', fontSize: 14, border: `1px solid rgba(var(--tc-border-rgb),.2)`, borderRadius: 11, background: 'var(--tc-surface)', outline: 'none', color: 'var(--tc-text)', marginBottom: 10 };

  const handleSubmit = async () => {
    setError('');
    if (!name.trim() || !email.trim()) { setError('Please add your name and email.'); return; }
    setBusy(true);
    try {
      const { error: err } = await onSubmit({ name: name.trim(), email: email.trim(), phone: phone.trim(), message: message.trim() });
      if (err) { setError(err.message || 'Something went wrong.'); return; }
      setDone(true);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 80, background: 'rgba(42,38,34,.5)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'var(--tc-bg)', borderRadius: 20, width: '100%', maxWidth: 440, padding: 28, animation: 'tcpop .25s ease both', boxShadow: '0 30px 70px -30px rgba(0,0,0,.5)' }}>
        {done ? (
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>✅</div>
            <h3 style={{ fontSize: 24 }}>Enquiry sent!</h3>
            <p style={{ fontSize: 14, color: 'var(--tc-muted)', margin: '8px 0 20px', lineHeight: 1.5 }}>Thanks {name.split(' ')[0]} — our team will reach out about your {tripLabel} trip shortly.</p>
            <button onClick={onClose} style={{ background: 'var(--accent,#BC5A3C)', color: '#fff', border: 'none', padding: '12px 26px', borderRadius: 11, fontSize: 14.5, fontWeight: 600, cursor: 'pointer' }}>Done</button>
          </div>
        ) : (
          <>
            <h3 style={{ fontSize: 24 }}>Enquire about this trip</h3>
            <p style={{ fontSize: 13.5, color: 'var(--tc-muted)', margin: '6px 0 18px' }}>Share your details for <strong style={{ color: 'var(--tc-text)' }}>{tripLabel}</strong> and our travel team will help you book it.</p>
            <input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            <input placeholder="Phone (optional)" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
            <textarea placeholder="Anything specific? (dates, group size, preferences…)" value={message} onChange={(e) => setMessage(e.target.value)} rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
            {error && <div style={{ fontSize: 13, color: '#B0392F', marginBottom: 10 }}>{error}</div>}
            <button onClick={handleSubmit} disabled={busy} style={{ width: '100%', background: 'var(--accent,#BC5A3C)', color: '#fff', border: 'none', padding: 13, borderRadius: 11, fontSize: 15, fontWeight: 600, cursor: busy ? 'not-allowed' : 'pointer', opacity: busy ? 0.7 : 1 }}>
              {busy ? 'Sending…' : 'Send enquiry'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
