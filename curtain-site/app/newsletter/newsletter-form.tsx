"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Home fabric care");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, interest, consent }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to start your subscription.");
      setStatus("success");
      setMessage(data.message || "Check your inbox to confirm your subscription.");
      setName("");
      setEmail("");
      setConsent(false);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to start your subscription.");
    }
  }

  return (
    <form className="signup-card" onSubmit={submit}>
      <span className="eyebrow">Join the list</span>
      <h2>What you’ll receive</h2>
      <ul>
        <li>Seasonal curtain and fabric-care reminders</li>
        <li>Clear stain and spill first-aid advice</li>
        <li>Healthy-home and hospitality guidance</li>
        <li>Priority access to assessment windows</li>
      </ul>
      <label htmlFor="newsletter-name">Name</label>
      <input id="newsletter-name" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} required />
      <label htmlFor="newsletter-email">Email</label>
      <input id="newsletter-email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      <label htmlFor="newsletter-interest">Primary interest</label>
      <select id="newsletter-interest" value={interest} onChange={(event) => setInterest(event.target.value)}>
        <option>Home fabric care</option>
        <option>Hotel or hospitality</option>
        <option>Office or commercial</option>
        <option>Healthcare or institution</option>
      </select>
      <label className="consent-field">
        <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} required />
        <span>I agree to receive occasional email guidance and can unsubscribe at any time.</span>
      </label>
      <button className="button" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting…" : "Request newsletter access"}
      </button>
      <p className={`form-status ${status}`} role="status" aria-live="polite">{message}</p>
      <small>We use double opt-in: your subscription begins only after you confirm it by email.</small>
    </form>
  );
}
