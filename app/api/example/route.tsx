// Services
const creds = require('../servicekey.json');
const { GoogleSpreadsheet } = require('google-spreadsheet');
import moment from 'moment-timezone';

export async function GET(req: Request, res: Response) {
  // Get Params
  const { searchParams } = new URL(req.url);
  // Set Params
  let clickID: any = searchParams.get('click_id');
  let payout: any = searchParams.get('payout');

  // Validate Params
  if (!clickID) {
    return new Response('no click id', {
      status: 404,
    });
  }
  if (!payout) {
    payout = '1.00';
  }
  
  // Set Date
  let convDate = moment().tz('America/New_York').format('YYYY-MM-DD HH:mm:ss');

  // Get Google Sheet
  const doc = new GoogleSpreadsheet('PASTE_G_SHEET_URL_ID');
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];

  // Set Conversion
  let newConv = {
    ['Google Click ID']: clickID,
    ['Conversion Name']: 'Paste_The_Exact_Name_Of_Conversion_In_Google_Ads',
    ['Conversion Time']: convDate + ' America/New_York',
    ['Conversion Value']: payout,
    ['Conversion Currency']: 'USD',
  }

  // Push Conversion
  await sheet.addRows([newConv]);

  // Complete
  return new Response('success', {
    status: 200,
  });
}