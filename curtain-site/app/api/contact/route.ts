import { NextRequest, NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+0-9()\s-]{7,24}$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (clean(body.website, 200)) return NextResponse.json({ message: "Thank you." });

    const name = clean(body.name, 120);
    const email = clean(body.email, 254).toLowerCase();
    const phone = clean(body.phone, 30);
    const location = clean(body.location, 160);
    const message = clean(body.message, 4000);

    if (!name || !emailPattern.test(email) || !phonePattern.test(phone) || !location || !message) {
      return NextResponse.json({ error: "Please complete every field with valid contact details." }, { status: 400 });
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const toEmail = process.env.CONTACT_TO_EMAIL || "info@jhbcurtaincleaning.co.za";
    if (!apiKey || !fromEmail) {
      return NextResponse.json(
        { error: "Online enquiries are temporarily unavailable. Please call or WhatsApp +27 75 011 9200." },
        { status: 503 },
      );
    }

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      location: escapeHtml(location),
      message: escapeHtml(message).replace(/\n/g, "<br>"),
    };

    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: toEmail }] }],
        from: { email: fromEmail, name: "JHB Curtain Cleaning Website" },
        reply_to: { email, name },
        subject: `Website enquiry from ${name} in ${location}`,
        content: [
          {
            type: "text/plain",
            value: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\n\n${message}`,
          },
          {
            type: "text/html",
            value: `<h1>New website enquiry</h1><p><strong>Name:</strong> ${safe.name}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Phone:</strong> ${safe.phone}</p><p><strong>Location:</strong> ${safe.location}</p><p><strong>Message:</strong><br>${safe.message}</p>`,
          },
        ],
      }),
    });

    if (!response.ok) {
      console.error("SendGrid contact delivery failed", response.status, await response.text());
      return NextResponse.json({ error: "We could not send the enquiry. Please call or WhatsApp us instead." }, { status: 502 });
    }

    return NextResponse.json({ message: "Thank you. Your enquiry has been sent to our team." });
  } catch (error) {
    console.error("Contact submission failed", error);
    return NextResponse.json({ error: "We could not process the enquiry. Please try again." }, { status: 500 });
  }
}
