import { NextRequest, NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = clean(body.name, 120);
    const email = clean(body.email, 254).toLowerCase();
    const interest = clean(body.interest, 120);
    const consent = body.consent === true;

    if (!name || !emailPattern.test(email) || !consent) {
      return NextResponse.json({ error: "Enter a valid name and email and confirm your consent." }, { status: 400 });
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const dataCenter = apiKey?.split("-").at(-1);
    if (!apiKey || !audienceId || !dataCenter) {
      return NextResponse.json(
        { error: "Newsletter signup is temporarily unavailable. Please email info@jhbcurtaincleaning.co.za." },
        { status: 503 },
      );
    }

    const [firstName, ...lastNameParts] = name.split(/\s+/);
    const response = await fetch(`https://${dataCenter}.api.mailchimp.com/3.0/lists/${audienceId}/members`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(`website:${apiKey}`)}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "pending",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastNameParts.join(" "),
          INTEREST: interest,
        },
        tags: ["Website signup"],
      }),
    });

    const result = await response.json();
    if (!response.ok) {
      const existing = result?.title === "Member Exists";
      return NextResponse.json(
        { error: existing ? "This email is already on the list or awaiting confirmation." : "We could not start the subscription. Please try again." },
        { status: existing ? 409 : 502 },
      );
    }

    return NextResponse.json(
      { message: "Check your inbox and confirm your email to complete the subscription." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Newsletter subscription failed", error);
    return NextResponse.json({ error: "We could not process the subscription. Please try again." }, { status: 500 });
  }
}
