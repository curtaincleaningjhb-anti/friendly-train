import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing required Stripe secret: STRIPE_SECRET_KEY");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const ALLOWED_DEPOSIT_AMOUNTS = [500, 1000, 1500, 2000];

export async function POST(request: NextRequest) {
  try {
    const { amount, customerName, customerEmail, serviceType } = await request.json();

    if (!amount || typeof amount !== "number") {
      return NextResponse.json(
        { error: "Invalid amount provided" },
        { status: 400 }
      );
    }

    if (!ALLOWED_DEPOSIT_AMOUNTS.includes(amount)) {
      return NextResponse.json(
        { error: "Invalid deposit amount" },
        { status: 400 }
      );
    }

    if (!customerEmail || !customerEmail.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "zar",
      metadata: {
        customerName: customerName || "Unknown",
        customerEmail,
        serviceType: serviceType || "General Cleaning",
      },
      description: `Booking deposit for ${serviceType || "cleaning service"}`,
    });

    return NextResponse.json(
      { clientSecret: paymentIntent.client_secret },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Stripe payment intent creation error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create payment intent" },
      { status: 500 }
    );
  }
}
