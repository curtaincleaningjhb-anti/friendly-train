import { NextRequest, NextResponse } from "next/server";
import sgMail from '@sendgrid/mail';

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

  const connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=sendgrid',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || (!connectionSettings.settings.api_key || !connectionSettings.settings.from_email)) {
    throw new Error('SendGrid not connected');
  }
  return {apiKey: connectionSettings.settings.api_key, email: connectionSettings.settings.from_email};
}

async function getUncachableSendGridClient() {
  const {apiKey, email} = await getCredentials();
  sgMail.setApiKey(apiKey);
  return {
    client: sgMail,
    fromEmail: email
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, location, message } = body;

    if (!name || !email || !phone || !service || !location) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("Contact form submission received:", {
      name,
      email,
      phone,
      service,
      location,
      message,
      timestamp: new Date().toISOString(),
    });

    try {
      const { client, fromEmail } = await getUncachableSendGridClient();

      const emailContent = {
        to: fromEmail,
        from: fromEmail,
        subject: `New Quote Request - ${service} in ${location}`,
        text: `
New Quote Request Received

Customer Details:
Name: ${name}
Email: ${email}
Phone: ${phone}

Service Requested: ${service}
Location: ${location}

Message:
${message || 'No additional message provided'}

Received: ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })}
        `,
        html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0066CC 0%, #00A3E0 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #0066CC; }
    .value { margin-top: 5px; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #0066CC; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Quote Request</h2>
      <p style="margin: 5px 0 0 0;">On The Spot Curtain Cleaning</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Customer Name:</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value"><a href="tel:${phone}">${phone}</a></div>
      </div>
      <div class="field">
        <div class="label">Service Requested:</div>
        <div class="value">${service}</div>
      </div>
      <div class="field">
        <div class="label">Location:</div>
        <div class="value">${location}</div>
      </div>
      ${message ? `
      <div class="field">
        <div class="label">Additional Message:</div>
        <div class="value">${message.replace(/\n/g, '<br>')}</div>
      </div>
      ` : ''}
      <div class="footer">
        Received: ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })}
      </div>
    </div>
  </div>
</body>
</html>
        `,
      };

      await client.send(emailContent);
      console.log("Email sent successfully to:", fromEmail);

    } catch (emailError) {
      console.error("Failed to send email via SendGrid:", emailError);
    }

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
