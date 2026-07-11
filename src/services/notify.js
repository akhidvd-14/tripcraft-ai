// Sends new enquiries / contact messages / signups to a Google Sheet, via a
// Google Apps Script Web App bound to the "Tripcraft_Enquiries" sheet.
//
// The Web App URL lives in VITE_SHEET_WEBAPP_URL. We POST as a "simple request"
// (text/plain, mode:'no-cors') so the browser doesn't need a CORS preflight —
// Apps Script Web Apps don't return CORS headers. It's fire-and-forget: the row
// is appended even though we can't read the (opaque) response.
const SHEET_WEBAPP_URL = import.meta.env.VITE_SHEET_WEBAPP_URL;

// table: 'enquiries' | 'profiles'  ·  record: the inserted row
export async function notifyAdmin(table, record) {
  if (!SHEET_WEBAPP_URL) return; // not configured yet — enquiry is still saved in Supabase
  const payload = {
    type: table === 'profiles' ? 'signup' : (record.type || 'enquiry'),
    name: record.name || record.full_name || '',
    email: record.email || '',
    phone: record.phone || '',
    message: record.message || '',
    trip: record.trip_summary
      ? Object.entries(record.trip_summary).map(([k, v]) => `${k}: ${v}`).join(' · ')
      : '',
    submittedAt: record.created_at || new Date().toISOString(),
  };
  try {
    await fetch(SHEET_WEBAPP_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    });
  } catch (e) {
    // Best-effort; the enquiry is already persisted in Supabase.
    console.warn('[notify] sheet post failed:', e?.message || e);
  }
}
