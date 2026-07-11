export default function Hero({ onGoPlan }) {
  return (
    <div style={{ position: 'relative', height: '88vh', minHeight: 560, maxHeight: 820, overflow: 'hidden', background: '#2A2622' }}>
      <video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1600402808924-9c591a6dace8?auto=format&fit=crop&w=1600&q=70"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src="https://videos.pexels.com/video-files/2169880/2169880-sd_960_540_30fps.mp4" type="video/mp4" />
        <source src="https://cdn.coverr.co/videos/coverr-flying-over-a-mountain-range-2633/1080p.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(42,38,34,.28) 0%,rgba(42,38,34,.12) 42%,rgba(42,38,34,.72) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(246,241,233,.14)', border: '1px solid rgba(246,241,233,.28)', backdropFilter: 'blur(6px)', padding: '7px 15px', borderRadius: 999, fontSize: 12.5, color: '#F6F1E9', letterSpacing: '.4px', marginBottom: 22 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent,#BC5A3C)' }} /> Your AI travel companion
        </div>
        <h1 style={{ fontFamily: "'Newsreader',serif", color: '#F9F5EC', fontSize: 74, lineHeight: 1.03, letterSpacing: '-1.5px', maxWidth: 900, textShadow: '0 2px 30px rgba(0,0,0,.35)' }}>
          Where do you<br />want to <span style={{ fontStyle: 'italic', color: '#F0C9A8' }}>wander</span>?
        </h1>
        <p style={{ color: 'rgba(249,245,236,.9)', fontSize: 19, lineHeight: 1.6, maxWidth: 560, margin: '22px 0 34px', textShadow: '0 1px 16px rgba(0,0,0,.4)' }}>
          Tell us where and when — TripCraft.ai crafts a personalized, day-by-day journey you can edit, share and travel with confidence.
        </p>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button onClick={onGoPlan} style={{ background: 'var(--accent,#BC5A3C)', color: '#fff', border: 'none', padding: '16px 30px', borderRadius: 999, fontSize: 16, fontWeight: 600, cursor: 'pointer', boxShadow: '0 12px 34px -10px rgba(0,0,0,.5)' }}>
            Plan my trip — free
          </button>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 22, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7, color: 'rgba(249,245,236,.75)', fontSize: 11, letterSpacing: '1.6px', textTransform: 'uppercase', animation: 'tcfade 1.2s .6s ease both' }}>
        Scroll
        <span style={{ width: 1, height: 26, background: 'linear-gradient(180deg,rgba(249,245,236,.7),transparent)' }} />
      </div>
    </div>
  );
}
