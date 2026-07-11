import { useState } from 'react';
import { LogoIcon } from '../../icons.jsx';

function ContactForm({ onSubmitContact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const inputStyle = { width: '100%', padding: '12px 14px', fontSize: 14, border: `1px solid rgba(var(--tc-border-rgb),.2)`, borderRadius: 11, background: 'var(--tc-surface)', outline: 'none', color: 'var(--tc-text)' };

  const submit = async () => {
    setError('');
    if (!name.trim() || !email.trim() || !message.trim()) { setError('Please fill in your name, email and message.'); return; }
    setBusy(true);
    try {
      const { error: err } = await onSubmitContact({ name: name.trim(), email: email.trim(), message: message.trim() });
      if (err) { setError(err.message || 'Something went wrong.'); return; }
      setDone(true); setName(''); setEmail(''); setMessage('');
    } finally { setBusy(false); }
  };

  return (
    <div style={{ background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.1)`, borderRadius: 18, padding: 26, maxWidth: 560, margin: '30px auto 0', textAlign: 'left' }}>
      <h3 style={{ fontSize: 22, textAlign: 'center' }}>Have a question? Get in touch</h3>
      <p style={{ fontSize: 13.5, color: 'var(--tc-muted)', textAlign: 'center', margin: '6px 0 18px' }}>Send us a note and we'll get back to you by email.</p>
      {done ? (
        <div style={{ textAlign: 'center', color: '#3F6B4A', fontSize: 14.5, fontWeight: 600, padding: '10px 0' }}>✅ Thanks — your message is on its way. We'll be in touch soon.</div>
      ) : (
        <>
          <div className="tc-grid tc-grid-2" style={{ gap: 10, marginBottom: 10 }}>
            <input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            <input placeholder="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
          </div>
          <textarea placeholder="How can we help?" value={message} onChange={(e) => setMessage(e.target.value)} rows={3} style={{ ...inputStyle, resize: 'vertical', marginBottom: 10 }} />
          {error && <div style={{ fontSize: 13, color: '#B0392F', marginBottom: 10 }}>{error}</div>}
          <button onClick={submit} disabled={busy} style={{ width: '100%', background: 'var(--accent,#BC5A3C)', color: '#fff', border: 'none', padding: 13, borderRadius: 11, fontSize: 15, fontWeight: 600, cursor: busy ? 'not-allowed' : 'pointer', opacity: busy ? 0.7 : 1 }}>
            {busy ? 'Sending…' : 'Send message'}
          </button>
        </>
      )}
    </div>
  );
}

export default function CtaFooter({ onGoPlan, onSubmitContact }) {
  return (
    <>
      <div className="tc-pad-x" style={{ maxWidth: 1200, margin: '0 auto', padding: '70px 28px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 44, letterSpacing: '-.8px', maxWidth: 640, margin: '0 auto' }}>Your next trip is waiting to be crafted.</h2>
        <button onClick={onGoPlan} style={{ background: 'var(--accent,#BC5A3C)', color: '#fff', border: 'none', padding: '16px 32px', borderRadius: 999, fontSize: 16, fontWeight: 600, cursor: 'pointer', marginTop: 26, boxShadow: '0 10px 26px -10px rgba(188,90,60,.6)' }}>
          Plan my trip — it's free
        </button>
        {onSubmitContact && <ContactForm onSubmitContact={onSubmitContact} />}
      </div>

      <div style={{ background: 'var(--tc-section-alt)', borderTop: `1px solid rgba(var(--tc-border-rgb),.1)` }}>
        <div className="tc-footer-grid tc-pad-x" style={{ maxWidth: 1200, margin: '0 auto', padding: '44px 28px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <div style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent,#BC5A3C)', borderRadius: 8 }}>
                <LogoIcon size={15} />
              </div>
              <span style={{ fontFamily: "'Newsreader',serif", fontSize: 18, fontWeight: 600 }}>TripCraft.ai</span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--tc-muted-2)', maxWidth: 260, marginTop: 12, lineHeight: 1.5 }}>Craft the journey, not just the trip. Personalized itineraries for every traveler, everywhere.</p>
          </div>
          <div>
            <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '1.4px', color: 'var(--tc-muted-3)', marginBottom: 12 }}>Product</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, fontSize: 13.5, color: 'var(--tc-muted)' }}>
              <span>Plan a trip</span><span>Destinations</span><span>Pricing</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '1.4px', color: 'var(--tc-muted-3)', marginBottom: 12 }}>Company</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, fontSize: 13.5, color: 'var(--tc-muted)' }}>
              <span>About</span><span>Stories</span><span>Careers</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '1.4px', color: 'var(--tc-muted-3)', marginBottom: 12 }}>Support</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, fontSize: 13.5, color: 'var(--tc-muted)' }}>
              <span>Help center</span><span>Contact</span><span>Privacy</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: `1px solid rgba(var(--tc-border-rgb),.1)`, padding: '16px 28px', textAlign: 'center', fontSize: 12, color: 'var(--tc-muted-3)' }}>
          © 2026 TripCraft.ai · A concept prototype. Booking links are illustrative.
        </div>
      </div>
    </>
  );
}
