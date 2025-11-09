"use client";

import { useState, useEffect, FormEvent } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Link from "next/link";
import { PhoneIcon, HomeIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripeKey ? loadStripe(stripeKey) : null;

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!stripe) return;

    const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");
    if (!clientSecret) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (!paymentIntent) return;

      switch (paymentIntent.status) {
        case "succeeded":
          setPaymentStatus("success");
          break;
        case "processing":
          setPaymentStatus("processing");
          break;
        case "requires_payment_method":
          setPaymentStatus("error");
          setErrorMessage("Payment failed. Please try again.");
          break;
        default:
          setPaymentStatus("error");
          setErrorMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setPaymentStatus("processing");
    setErrorMessage("");

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/booking/deposit?success=true`,
        },
      });

      if (error) {
        setPaymentStatus("error");
        setErrorMessage(error.message || "Payment failed");
      }
    } catch (err: any) {
      setPaymentStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred");
    } finally {
      setIsProcessing(false);
    }
  };

  if (paymentStatus === "success") {
    return (
      <div className="bg-accent/10 border-2 border-accent rounded-lg p-8 text-center">
        <CheckCircleIcon className="h-20 w-20 text-accent mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h2>
        <p className="text-gray-700 mb-6">
          Thank you for your deposit. We'll contact you shortly to schedule your service.
        </p>
        <Link href="/" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />

      {errorMessage && (
        <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 text-red-700">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || !elements || isProcessing}
        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isProcessing ? "Processing..." : "Pay Deposit"}
      </button>

      <p className="text-sm text-gray-600 text-center">
        Your payment is secure and processed through Stripe.
      </p>
    </form>
  );
}

export default function DepositPage() {
  const [clientSecret, setClientSecret] = useState("");
  const [depositAmount, setDepositAmount] = useState(500);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [serviceType, setServiceType] = useState("curtain-cleaning");
  const [step, setStep] = useState<"details" | "payment">("details");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentIntent = params.get("payment_intent");
    const paymentIntentClientSecret = params.get("payment_intent_client_secret");
    
    if (paymentIntent && paymentIntentClientSecret) {
      setClientSecret(paymentIntentClientSecret);
      setStep("payment");
    }
  }, []);

  const handleCreatePayment = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/payments/create-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: depositAmount,
          customerName,
          customerEmail,
          serviceType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create payment");
      }

      setClientSecret(data.clientSecret);
      setStep("payment");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      {/* Breadcrumbs */}
      <section className="bg-gray-50 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary flex items-center gap-1">
              <HomeIcon className="h-4 w-4" />
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Book Deposit</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="gradient-hero text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Secure Your Booking with a Deposit
          </h1>
          <p className="text-xl">
            Pay a deposit to confirm your cleaning service appointment
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          {step === "details" ? (
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Booking Details
              </h2>

              <form onSubmit={handleCreatePayment} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-semibold text-gray-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-semibold text-gray-900 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block font-semibold text-gray-900 mb-2">
                    Service Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  >
                    <option value="curtain-cleaning">Curtain Cleaning</option>
                    <option value="mattress-cleaning">Mattress Cleaning</option>
                    <option value="upholstery-cleaning">Upholstery Cleaning</option>
                    <option value="rug-cleaning">Rug Cleaning</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="amount" className="block font-semibold text-gray-900 mb-2">
                    Deposit Amount <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="amount"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(Number(e.target.value))}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  >
                    <option value={500}>R500 - Standard Deposit</option>
                    <option value={1000}>R1,000 - Large Project</option>
                    <option value={1500}>R1,500 - Commercial Booking</option>
                    <option value={2000}>R2,000 - Large Commercial</option>
                  </select>
                </div>

                {error && (
                  <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 text-red-700">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg transition-all disabled:opacity-50"
                >
                  {isLoading ? "Processing..." : "Continue to Payment"}
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Payment Details
              </h2>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Service:</span>
                  <span className="font-semibold">{serviceType.replace("-", " ").toUpperCase()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Customer:</span>
                  <span className="font-semibold">{customerName}</span>
                </div>
                <div className="flex justify-between border-t border-gray-300 pt-2 mt-2">
                  <span className="font-bold text-lg">Deposit Amount:</span>
                  <span className="font-bold text-lg text-primary">R{depositAmount}</span>
                </div>
              </div>

              {!stripePromise ? (
                <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 text-center">
                  <p className="text-gray-900 font-semibold mb-2">Payment system not configured</p>
                  <p className="text-gray-700">Please contact us to complete your booking.</p>
                  <a href="tel:0716226753" className="inline-block mt-4 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg">
                    Call 071 622 6753
                  </a>
                </div>
              ) : clientSecret ? (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <CheckoutForm />
                </Elements>
              ) : (
                <div className="text-center py-8">
                  <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto" />
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help?
          </h2>
          <p className="text-gray-700 mb-6">
            If you have questions about payments or your booking, contact us:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0716226753"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-all"
            >
              <PhoneIcon className="h-5 w-5" />
              Call 071 622 6753
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-6 rounded-lg transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
