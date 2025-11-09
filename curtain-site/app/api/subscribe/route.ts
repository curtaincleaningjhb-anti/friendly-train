import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!API_KEY || !AUDIENCE_ID) {
      console.warn("Mailchimp API credentials not configured");
      return NextResponse.json(
        { message: "Subscription service is not configured. Please contact us directly." },
        { status: 503 }
      );
    }

    const DATACENTER = API_KEY.split("-")[1];
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const data: any = {
      email_address: email,
      status: "subscribed",
    };

    if (firstName || lastName) {
      data.merge_fields = {};
      if (firstName) data.merge_fields.FNAME = firstName;
      if (lastName) data.merge_fields.LNAME = lastName;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `apikey ${API_KEY}`,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      if (result.title === "Member Exists") {
        return NextResponse.json(
          { error: "This email is already subscribed!" },
          { status: 400 }
        );
      }

      console.error("Mailchimp API error:", result);
      return NextResponse.json(
        { error: result.detail || "Subscription failed. Please try again." },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: "Successfully subscribed to our newsletter!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Mailchimp subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}
