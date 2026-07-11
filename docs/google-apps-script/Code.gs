/**
 * TripCraft.ai — enquiry sink for the "Tripcraft_Enquiries" Google Sheet.
 *
 * SETUP
 * 1. Open your Tripcraft_Enquiries Google Sheet.
 * 2. Extensions → Apps Script. Delete any boilerplate, paste this whole file, Save.
 * 3. Deploy → New deployment → type "Web app".
 *      - Description: TripCraft enquiries
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    Click Deploy, authorize when prompted, and copy the "Web app URL"
 *    (looks like https://script.google.com/macros/s/AKfyc.../exec).
 * 4. Put that URL in the app's .env as  VITE_SHEET_WEBAPP_URL=...
 *
 * The app POSTs one JSON row per enquiry / contact message / signup.
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(30000);
  try {
    var data = {};
    try { data = JSON.parse(e.postData.contents); } catch (parseErr) { data = e.parameter || {}; }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Enquiries') || ss.getSheets()[0];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Type', 'Name', 'Email', 'Phone', 'Message', 'Trip']);
      sheet.getRange('A1:G1').setFontWeight('bold');
    }

    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.type || '',
      data.name || '',
      data.email || '',
      data.phone || '',
      data.message || '',
      data.trip || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Optional: lets you open the Web App URL in a browser to sanity-check it's live.
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, service: 'tripcraft-enquiries' }))
    .setMimeType(ContentService.MimeType.JSON);
}
