import express from 'express';
import cors from 'cors';
import twilio from 'twilio';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

let connectionSettings;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=twilio',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || !connectionSettings.settings.account_sid) {
    throw new Error('Twilio not connected');
  }

  const settings = connectionSettings.settings;
  
  return {
    accountSid: settings.account_sid,
    authToken: settings.auth_token || settings.api_key_secret,
    apiKey: settings.api_key,
    phoneNumber: settings.phone_number
  };
}

async function getTwilioClient() {
  const credentials = await getCredentials();
  
  if (credentials.apiKey) {
    return twilio(credentials.apiKey, credentials.authToken, {
      accountSid: credentials.accountSid
    });
  } else {
    return twilio(credentials.accountSid, credentials.authToken);
  }
}

async function getTwilioFromPhoneNumber() {
  const { phoneNumber } = await getCredentials();
  return phoneNumber;
}

app.post('/api/send-sms', async (req, res) => {
  try {
    const { to, message } = req.body;

    if (!to || !message) {
      return res.status(400).json({ error: 'Phone number and message are required' });
    }

    const client = await getTwilioClient();
    const fromNumber = await getTwilioFromPhoneNumber();

    const result = await client.messages.create({
      body: message,
      from: fromNumber,
      to: to
    });

    res.json({ 
      success: true, 
      messageSid: result.sid,
      status: result.status 
    });
  } catch (error) {
    console.error('Error sending SMS:', error);
    res.status(500).json({ 
      error: 'Failed to send SMS', 
      details: error.message 
    });
  }
});

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
