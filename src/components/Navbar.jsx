import { LogoIcon, SunIcon, MoonIcon } from '../icons.jsx';

export default function Navbar({ theme, onToggleTheme, onGoHome, onGoPlan, onScrollTestimonials, onOpenLogin, onOpenRegister, user, onSignOut, onGoMyTrips }) {
  const displayName = user ? (user.user_metadata?.full_name || user.email?.split('@')[0] || 'Account') : null;
  const initials = displayName ? displayName.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase() : '';
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 40, background: 'var(--tc-navbar-bg)', backdropFilter: 'blur(12px)', borderBottom: `1px solid rgba(var(--tc-border-rgb),.1)` }}>
      <div className="tc-pad-x" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div onClick={onGoHome} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
          <div style={{ position: 'relative', width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent,#BC5A3C)', borderRadius: 10 }}>
            <LogoIcon />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: "'Newsreader',serif", fontSize: 21, fontWeight: 600, letterSpacing: '-.3px' }}>
              TripCraft<span style={{ color: 'var(--accent,#BC5A3C)' }}>.ai</span>
            </span>
            <span className="tc-nav-tagline" style={{ fontSize: 9.5, letterSpacing: '2.4px', textTransform: 'uppercase', color: 'var(--tc-muted-3)', marginTop: 2 }}>
              Craft the journey, not just the trip
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div className="tc-nav-links" style={{ display: 'flex', gap: 24 }}>
            <span className="tc-navlink" onClick={onGoPlan} style={{ fontSize: 14, color: 'var(--tc-muted)', cursor: 'pointer' }}>Plan a trip</span>
            {user && onGoMyTrips && (
              <span className="tc-navlink" onClick={onGoMyTrips} style={{ fontSize: 14, color: 'var(--tc-muted)', cursor: 'pointer' }}>My trips</span>
            )}
            <span className="tc-navlink" onClick={onScrollTestimonials} style={{ fontSize: 14, color: 'var(--tc-muted)', cursor: 'pointer' }}>Stories</span>
          </div>
          <button onClick={onToggleTheme} title="Toggle theme" style={{ background: 'none', border: `1px solid rgba(var(--tc-border-rgb),.15)`, width: 34, height: 34, borderRadius: 999, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--tc-muted)', flex: 'none' }}>
            {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
          </button>
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div title={user.email} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#E8B77E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#2A2622' }}>{initials}</div>
                <span style={{ fontSize: 13.5, color: 'var(--tc-text)', fontWeight: 500, whiteSpace: 'nowrap', maxWidth: 120, overflow: 'hidden', textOverflow: 'ellipsis' }}>{displayName}</span>
              </div>
              <button onClick={onSignOut} style={{ background: 'none', border: `1px solid rgba(var(--tc-border-rgb),.2)`, padding: '8px 14px', borderRadius: 999, fontSize: 13, color: 'var(--tc-muted)', cursor: 'pointer', whiteSpace: 'nowrap' }}>Sign out</button>
            </div>
          ) : (
            <>
              <button onClick={onOpenLogin} style={{ background: 'none', border: 'none', fontSize: 14, color: 'var(--tc-text)', cursor: 'pointer', fontWeight: 500, whiteSpace: 'nowrap' }}>Sign in</button>
              <button onClick={onOpenRegister} style={{ background: '#2A2622', color: '#F6F1E9', border: 'none', padding: '9px 18px', borderRadius: 999, fontSize: 13.5, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>Get started</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
