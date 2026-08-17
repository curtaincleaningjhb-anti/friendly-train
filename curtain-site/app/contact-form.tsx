"use client";

import { FormEvent, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  location: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to send your enquiry.");
      setStatus("success");
      setMessage(data.message || "Thank you. Your enquiry has been sent.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your enquiry.");
    }
  }

  const update = (key: keyof typeof initialForm, value: string) =>
    setForm((current) => ({ ...current, [key]: value }));

  return (
    <form className="contact-form" onSubmit={submit}>
      <span className="eyebrow">Send an enquiry</span>
      <h3>Tell us about your space.</h3>
      <label htmlFor="contact-name">Name</label>
      <input id="contact-name" autoComplete="name" value={form.name} onChange={(event) => update("name", event.target.value)} required />
      <label htmlFor="contact-email">Email</label>
      <input id="contact-email" type="email" autoComplete="email" value={form.email} onChange={(event) => update("email", event.target.value)} required />
      <label htmlFor="contact-phone">Phone</label>
      <input id="contact-phone" type="tel" autoComplete="tel" value={form.phone} onChange={(event) => update("phone", event.target.value)} required />
      <label htmlFor="contact-location">Suburb or property location</label>
      <input id="contact-location" autoComplete="address-level2" value={form.location} onChange={(event) => update("location", event.target.value)} required />
      <label htmlFor="contact-message">How can we help?</label>
      <textarea id="contact-message" rows={5} value={form.message} onChange={(event) => update("message", event.target.value)} required />
      <label className="form-honeypot" htmlFor="contact-website">Website</label>
      <input className="form-honeypot" id="contact-website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => update("website", event.target.value)} />
      <button className="button" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send enquiry"}
      </button>
      <p className={`form-status ${status}`} role="status" aria-live="polite">{message}</p>
      <small>We use your details only to respond to this enquiry. WhatsApp and phone remain available if you prefer.</small>
    </form>
  );
}
