"use client";

import { useState, FormEvent } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        location: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to submit form. Please try calling us directly.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (status === "success") {
    return (
      <div className="bg-accent/10 border-2 border-accent rounded-lg p-8 text-center">
        <CheckCircleIcon className="h-16 w-16 text-accent mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-700 mb-4">
          We've received your request and will contact you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-primary hover:text-primary-dark font-semibold"
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block font-semibold text-gray-900 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          placeholder="John Doe"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-semibold text-gray-900 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          placeholder="john@example.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block font-semibold text-gray-900 mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          placeholder="+27 75 011 9200"
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block font-semibold text-gray-900 mb-2">
          Service Needed <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
        >
          <option value="">Select a service...</option>
          <option value="curtain-cleaning">Curtain Dry Cleaning</option>
          <option value="mattress-cleaning">Mattress Sanitization</option>
          <option value="upholstery-cleaning">Upholstery Cleaning</option>
          <option value="rug-cleaning">Persian & Oriental Rug Cleaning</option>
          <option value="fabric-protection">Masterguard Fabric Protection</option>
          <option value="fireproofing">Fireproofing Services</option>
          <option value="multiple">Multiple Services</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block font-semibold text-gray-900 mb-2">
          Your Location <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          placeholder="e.g., Sandton, Fourways, Rosebank"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-semibold text-gray-900 mb-2">
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          placeholder="Tell us more about your requirements..."
        />
      </div>

      {/* Error Message */}
      {status === "error" && (
        <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 text-red-700">
          {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Request Free Quote"}
      </button>

      <p className="text-sm text-gray-600 text-center">
        We'll never share your information with third parties.
      </p>
    </form>
  );
}
