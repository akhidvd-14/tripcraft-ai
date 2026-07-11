export default function Toast({ toast }) {
  if (!toast) return null;
  return (
    <div style={{ position: 'fixed', bottom: 26, left: '50%', transform: 'translateX(-50%)', zIndex: 120, background: '#2A2622', color: '#F6F1E9', padding: '12px 22px', borderRadius: 999, fontSize: 13.5, fontWeight: 500, animation: 'tcpop .2s ease both', boxShadow: '0 12px 30px -12px rgba(0,0,0,.5)' }}>
      {toast}
    </div>
  );
}
