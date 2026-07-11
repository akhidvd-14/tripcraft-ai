export default function Chatbot({ visible, chatOpen, onToggleChat, chatMessages, chatChips, chatInput, onSetChatInput, onChatKey, onSendChat }) {
  if (!visible) return null;

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 100 }}>
      {chatOpen ? (
        <div style={{ width: 360, maxWidth: 'calc(100vw - 40px)', height: 520, maxHeight: 'calc(100vh - 60px)', background: 'var(--tc-bg)', borderRadius: 20, boxShadow: '0 30px 70px -25px rgba(42,38,34,.6)', display: 'flex', flexDirection: 'column', overflow: 'hidden', animation: 'tcpop .25s ease both', border: `1px solid rgba(var(--tc-border-rgb),.12)` }}>
          <div style={{ background: '#3F4A3B', color: '#EDE7D8', padding: '16px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--accent,#BC5A3C)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>✦</div>
              <div>
                <div style={{ fontSize: 14.5, fontWeight: 600, color: '#F4EEE1' }}>Ask TripCraft</div>
                <div style={{ fontSize: 11.5, color: '#B9AE9A' }}>Your AI travel companion</div>
              </div>
            </div>
            <button onClick={onToggleChat} style={{ background: 'rgba(255,255,255,.12)', border: 'none', color: '#F4EEE1', width: 28, height: 28, borderRadius: 8, fontSize: 16, cursor: 'pointer' }}>×</button>
          </div>
          <div className="tc-scroll" style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {chatMessages.map((m, i) => (
              <div key={i} style={{ alignSelf: m.align, maxWidth: '82%', background: m.bg, color: m.fg, padding: '11px 14px', borderRadius: m.radius, fontSize: 13.5, lineHeight: 1.5 }}>{m.text}</div>
            ))}
          </div>
          <div style={{ padding: '10px 12px', borderTop: `1px solid rgba(var(--tc-border-rgb),.1)`, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {chatChips.map((cc) => (
              <span key={cc.label} onClick={() => onSendChat(cc.message)} style={{ fontSize: 11.5, background: '#EFE3D2', color: '#8A5A3A', padding: '5px 10px', borderRadius: 999, cursor: 'pointer' }}>{cc.label}</span>
            ))}
          </div>
          <div style={{ padding: '10px 12px', display: 'flex', gap: 8, borderTop: `1px solid rgba(var(--tc-border-rgb),.1)` }}>
            <input value={chatInput} onChange={onSetChatInput} onKeyDown={onChatKey} placeholder="Ask about places, food, timing…"
              style={{ flex: 1, padding: '11px 14px', fontSize: 13.5, border: `1px solid rgba(var(--tc-border-rgb),.2)`, borderRadius: 999, background: 'var(--tc-surface)', outline: 'none', color: 'var(--tc-text)' }} />
            <button onClick={() => onSendChat()} style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--accent,#BC5A3C)', border: 'none', color: '#fff', fontSize: 16, cursor: 'pointer', flex: 'none' }}>↑</button>
          </div>
        </div>
      ) : (
        <button onClick={onToggleChat} style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--accent,#BC5A3C)', border: 'none', color: '#fff', fontSize: 26, cursor: 'pointer', boxShadow: '0 14px 30px -10px rgba(188,90,60,.7)', animation: 'tcpulse 2.6s infinite', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✦</button>
      )}
    </div>
  );
}
