import { SendIcon } from '../../icons.jsx';

export default function ActivityCard({ a }) {
  return (
    <div
      draggable="true"
      onDragStart={a.onDragStart}
      onDragOver={a.onDragOver}
      onDrop={a.onDrop}
      onDragEnd={a.onDragEnd}
      className="tc-activity-hover"
      style={{ display: 'flex', gap: 14, background: 'var(--tc-surface)', border: `1px solid ${a.borderColor}`, borderRadius: 16, padding: 16, marginBottom: 12, cursor: 'grab', opacity: a.opacity }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flex: 'none' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--tc-tag-fg)', background: 'var(--tc-tag-bg)', padding: '5px 8px', borderRadius: 8, whiteSpace: 'nowrap' }}>{a.time}</div>
        <div style={{ width: 1, flex: 1, background: `rgba(var(--tc-border-rgb),.12)` }} />
      </div>
      <div className="tc-ph" style={{ width: 78, height: 78, borderRadius: 12, flex: 'none', overflow: 'hidden' }}>
        <img src={a.imgUrl} alt="" loading="lazy" onError={a.onImgErr} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 11, background: a.kindBg, color: a.kindFg, padding: '2px 8px', borderRadius: 6 }}>{a.kind}</span>
            </div>
            <div style={{ fontFamily: "'Newsreader',serif", fontSize: 19, marginTop: 5 }}>{a.title}</div>
            <a href={a.mapUrl} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: '#3F6B4A', marginTop: 2, display: 'inline-flex', alignItems: 'center', gap: 4 }}>📍 {a.place} · Maps</a>
          </div>
          <div style={{ display: 'flex', gap: 6, flex: 'none' }}>
            <button onClick={a.onAiOpen} title="Ask AI to swap this activity" style={{ display: 'flex', alignItems: 'center', gap: 5, height: 32, padding: '0 10px', borderRadius: 9, border: '1px solid rgba(188,90,60,.4)', background: '#FBEFE3', fontSize: 12, fontWeight: 600, color: '#8A5A3A', cursor: 'pointer' }}>
              <SendIcon />Edit with AI
            </button>
            <button onClick={a.onRemove} title="Remove" style={{ width: 32, height: 32, borderRadius: 9, border: `1px solid rgba(var(--tc-border-rgb),.15)`, background: 'var(--tc-surface-alt)', fontSize: 15, cursor: 'pointer', color: 'var(--tc-muted-3)' }}>×</button>
          </div>
        </div>
        <div style={{ fontSize: 13, color: 'var(--tc-muted)', lineHeight: 1.5, marginTop: 6 }}>{a.desc}</div>
        <div style={{ display: 'flex', gap: 12, marginTop: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          <a href={a.mapUrl} target="_blank" rel="noreferrer" style={{ fontSize: 12.5, color: '#3F6B4A', display: 'inline-flex', alignItems: 'center', gap: 4 }}>📍 {a.place} · Maps</a>
          <a href={a.reviewUrl} target="_blank" rel="noreferrer" style={{ fontSize: 12.5, color: 'var(--tc-tag-fg)' }}>★ Reviews</a>
        </div>
        {a.aiOpen && (
          <div style={{ marginTop: 12, background: '#FBF3EA', border: '1px solid rgba(188,90,60,.25)', borderRadius: 12, padding: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#8A5A3A', marginBottom: 8 }}>Ask TripCraft AI to swap this activity</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <input value={a.aiText} onChange={a.onAiInput} onKeyDown={a.onAiKey} autoFocus placeholder="e.g. something more relaxing nearby"
                style={{ flex: 1, padding: '9px 12px', fontSize: 13, border: '1px solid rgba(42,38,34,.2)', borderRadius: 9, background: '#fff', outline: 'none', color: '#2A2622' }} />
              <button onClick={a.onAiReplace} style={{ background: 'var(--accent,#BC5A3C)', color: '#fff', border: 'none', padding: '9px 14px', borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>Replace</button>
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 9, flexWrap: 'wrap' }}>
              <span onClick={a.onAiSurprise} style={{ fontSize: 11.5, background: '#EFE3D2', color: '#8A5A3A', padding: '5px 10px', borderRadius: 999, cursor: 'pointer' }}>✨ Surprise me</span>
              <span onClick={a.onAiCancel} style={{ fontSize: 11.5, color: '#9A8E7E', padding: '5px 8px', cursor: 'pointer' }}>Cancel</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
