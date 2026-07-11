import { LogoIcon } from '../../icons.jsx';

export default function CtaFooter({ onGoPlan }) {
  return (
    <>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '70px 28px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 44, letterSpacing: '-.8px', maxWidth: 640, margin: '0 auto' }}>Your next trip is waiting to be crafted.</h2>
        <button onClick={onGoPlan} style={{ background: 'var(--accent,#BC5A3C)', color: '#fff', border: 'none', padding: '16px 32px', borderRadius: 999, fontSize: 16, fontWeight: 600, cursor: 'pointer', marginTop: 26, boxShadow: '0 10px 26px -10px rgba(188,90,60,.6)' }}>
          Plan my trip — it's free
        </button>
      </div>

      <div style={{ background: 'var(--tc-section-alt)', borderTop: `1px solid rgba(var(--tc-border-rgb),.1)` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '44px 28px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 24 }}>
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
