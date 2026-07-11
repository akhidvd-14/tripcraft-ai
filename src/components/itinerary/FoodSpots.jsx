export default function FoodSpots({ foodSpots }) {
  return (
    <div style={{ background: 'var(--tc-surface)', border: `1px solid rgba(var(--tc-border-rgb),.1)`, borderRadius: 18, padding: 22, marginTop: 26 }}>
      <h3 style={{ fontSize: 22 }}>Where to eat today</h3>
      <div className="tc-grid tc-grid-3" style={{ gap: 12, marginTop: 16 }}>
        {foodSpots.map((fs) => (
          <div key={fs.name} style={{ border: `1px solid rgba(var(--tc-border-rgb),.08)`, borderRadius: 12, overflow: 'hidden' }}>
            <div className="tc-ph" style={{ height: 82, overflow: 'hidden' }}>
              <img src={fs.imgUrl} alt="" loading="lazy" onError={(e) => { e.target.style.display = 'none'; }} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 14, fontWeight: 600 }}>{fs.name}</span>
                <span style={{ fontSize: 11, color: '#3F6B4A', fontWeight: 700 }}>★{fs.rating}</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--tc-muted-2)', marginTop: 2 }}>{fs.cuisine} · {fs.price}</div>
              <div style={{ fontSize: 11.5, color: 'var(--tc-tag-fg)', marginTop: 6 }}>{fs.dish}</div>
              <a href={fs.mapUrl} target="_blank" rel="noreferrer" style={{ fontSize: 11.5, display: 'inline-block', marginTop: 8 }}>📍 Open in Maps</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
