import { LogoIcon, SunIcon, MoonIcon } from '../icons.jsx';

export default function Navbar({ theme, onToggleTheme, onGoHome, onGoPlan, onScrollTestimonials, onOpenLogin, onOpenRegister }) {
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 40, background: 'var(--tc-navbar-bg)', backdropFilter: 'blur(12px)', borderBottom: `1px solid rgba(var(--tc-border-rgb),.1)` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div onClick={onGoHome} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
          <div style={{ position: 'relative', width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent,#BC5A3C)', borderRadius: 10 }}>
            <LogoIcon />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: "'Newsreader',serif", fontSize: 21, fontWeight: 600, letterSpacing: '-.3px' }}>
              TripCraft<span style={{ color: 'var(--accent,#BC5A3C)' }}>.ai</span>
            </span>
            <span style={{ fontSize: 9.5, letterSpacing: '2.4px', textTransform: 'uppercase', color: 'var(--tc-muted-3)', marginTop: 2 }}>
              Craft the journey, not just the trip
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
          <div style={{ display: 'flex', gap: 24 }}>
            <span className="tc-navlink" onClick={onGoPlan} style={{ fontSize: 14, color: 'var(--tc-muted)', cursor: 'pointer' }}>Plan a trip</span>
            <span className="tc-navlink" onClick={onScrollTestimonials} style={{ fontSize: 14, color: 'var(--tc-muted)', cursor: 'pointer' }}>Stories</span>
          </div>
          <button onClick={onToggleTheme} title="Toggle theme" style={{ background: 'none', border: `1px solid rgba(var(--tc-border-rgb),.15)`, width: 34, height: 34, borderRadius: 999, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--tc-muted)', flex: 'none' }}>
            {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
          </button>
          <button onClick={onOpenLogin} style={{ background: 'none', border: 'none', fontSize: 14, color: 'var(--tc-text)', cursor: 'pointer', fontWeight: 500, whiteSpace: 'nowrap' }}>Sign in</button>
          <button onClick={onOpenRegister} style={{ background: '#2A2622', color: '#F6F1E9', border: 'none', padding: '9px 18px', borderRadius: 999, fontSize: 13.5, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>Get started</button>
        </div>
      </div>
    </div>
  );
}
