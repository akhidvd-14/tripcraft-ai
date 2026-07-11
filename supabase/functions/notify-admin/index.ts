// Supabase Edge Function: notify-admin
// Triggered by Database Webhooks on INSERT into `enquiries` and `profiles`.
// Emails the business owner (ENQUIRY_TO_EMAIL) via Resend on each new lead.
//
// Deploy:   supabase functions deploy notify-admin --no-verify-jwt
// Secrets:  supabase secrets set RESEND_API_KEY=...  ENQUIRY_TO_EMAIL=akhidvd@gmail.com
//           (optional) supabase secrets set WEBHOOK_SECRET=<random>  and add the same
//           value as an "x-webhook-secret" header on each Database Webhook.
//
// Webhook payload shape: { type, table, schema, record, old_record }

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const TO_EMAIL = Deno.env.get('ENQUIRY_TO_EMAIL') || 'akhidvd@gmail.com';
const FROM_EMAIL = Deno.env.get('ENQUIRY_FROM_EMAIL') || 'TripCraft <onboarding@resend.dev>';
const WEBHOOK_SECRET = Deno.env.get('WEBHOOK_SECRET'); // optional shared secret

const esc = (s: unknown) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

function rows(obj: Record<string, unknown>) {
  return Object.entries(obj)
    .filter(([, v]) => v !== null && v !== undefined && v !== '')
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#7A7166;font-size:13px;vertical-align:top">${esc(k)}</td>` +
        `<td style="padding:4px 0;font-size:13px;color:#2A2622">${esc(typeof v === 'object' ? JSON.stringify(v) : v)}</td></tr>`,
    )
    .join('');
}

function buildEmail(table: string, record: Record<string, unknown>) {
  if (table === 'enquiries') {
    const isTrip = record.type === 'trip';
    const subject = isTrip
      ? `New trip enquiry from ${record.name || record.email || 'a visitor'}`
      : `New contact message from ${record.name || record.email || 'a visitor'}`;
    const summary = record.trip_summary && typeof record.trip_summary === 'object'
      ? `<h3 style="font-size:15px;margin:18px 0 6px">Trip details</h3>
         <table style="border-collapse:collapse">${rows(record.trip_summary as Record<string, unknown>)}</table>`
      : '';
    const html = `
      <div style="font-family:system-ui,sans-serif;max-width:560px">
        <h2 style="font-size:19px;color:#BC5A3C;margin:0 0 4px">TripCraft.ai — ${isTrip ? 'Trip enquiry' : 'Contact message'}</h2>
        <table style="border-collapse:collapse">${rows({ name: record.name, email: record.email, phone: record.phone, message: record.message })}</table>
        ${summary}
        <p style="color:#9A8E7E;font-size:12px;margin-top:18px">Received ${esc(record.created_at)}</p>
      </div>`;
    return { subject, html };
  }
  if (table === 'profiles') {
    return {
      subject: `New TripCraft signup: ${record.email || record.full_name || 'user'}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:560px">
          <h2 style="font-size:19px;color:#BC5A3C;margin:0 0 4px">TripCraft.ai — New signup</h2>
          <table style="border-collapse:collapse">${rows({ full_name: record.full_name, email: record.email, created_at: record.created_at })}</table>
        </div>`,
    };
  }
  return { subject: `TripCraft: new ${table} row`, html: `<pre>${esc(JSON.stringify(record, null, 2))}</pre>` };
}

Deno.serve(async (req) => {
  try {
    if (WEBHOOK_SECRET && req.headers.get('x-webhook-secret') !== WEBHOOK_SECRET) {
      return new Response('Unauthorized', { status: 401 });
    }
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not set');
      return new Response('Email not configured', { status: 500 });
    }

    const payload = await req.json();
    const table: string = payload.table;
    const record: Record<string, unknown> = payload.record || {};
    const { subject, html } = buildEmail(table, record);

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: FROM_EMAIL, to: [TO_EMAIL], subject, html }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error('Resend error', res.status, body);
      return new Response(`Resend error: ${res.status}`, { status: 502 });
    }
    return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } });
  } catch (e) {
    console.error(e);
    return new Response('Bad request', { status: 400 });
  }
});
