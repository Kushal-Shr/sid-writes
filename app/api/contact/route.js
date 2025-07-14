// app/api/contact/route.js
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // Set up Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Prepare the data
    const date = new Date();
const options = {
  timeZone: 'America/Chicago',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
};

const formatter = new Intl.DateTimeFormat('en-US', options);
const parts = formatter.formatToParts(date);

const timestamp = `${parts.find(p => p.type === 'year').value}-${parts.find(p => p.type === 'month').value}-${parts.find(p => p.type === 'day').value} ${parts.find(p => p.type === 'hour').value}:${parts.find(p => p.type === 'minute').value}:${parts.find(p => p.type === 'second').value}`;
    const values = [[name, email, subject, message, timestamp]];

    // Check if headers exist, if not add them
    try {
      const headerCheck = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'A1:E1',
      });

      if (!headerCheck.data.values || headerCheck.data.values.length === 0) {
        // Add headers
        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: 'A1:E1',
          valueInputOption: 'RAW',
          resource: {
            values: [['Name', 'Email', 'Subject', 'Message', 'Timestamp']],
          },
        });
      }
    } catch (error) {
      console.log('Error checking headers:', error);
    }

    // Append the form data
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:E',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values,
      },
    });

    console.log('Data successfully added to sheet');
    return NextResponse.json({ success: true, message: 'Form submitted successfully' });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to submit form',
      error: error.message 
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Contact API endpoint is working!' });
}