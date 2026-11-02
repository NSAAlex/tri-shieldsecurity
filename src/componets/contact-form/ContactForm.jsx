
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./ContactForm.css";

const ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_KEY;

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General question",
    message: ""
  });

  const [submitting, setSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  }

  // PROJECT PART 10:
  // Working contact form using Web3Forms.
  // React Hot Toast library displays success/error messages.
  async function handleSubmit(event) {
    event.preventDefault();

    if (!ACCESS_KEY) {
      toast.error("Contact form is not configured yet.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            access_key: ACCESS_KEY,
            from_name: "TRI-Shield Security Website",
            ...form
          })
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      toast.success("Your message was sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "General question",
        message: ""
      });
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Unable to send your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="contact-form-card">
      <Toaster position="top-right" />

      <h2>Send us a message</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-field">
          <label htmlFor="contact-name">Name *</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            required
            maxLength={100}
          />
        </div>

        <div className="form-field">
          <label htmlFor="contact-email">Email *</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="contact-subject">
            What can we help with?
          </label>

          <select
            id="contact-subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          >
            <option value="General question">
              General question
            </option>
            <option value="Network Security">
              Network Security
            </option>
            <option value="Threat Monitoring">
              Threat Monitoring
            </option>
            <option value="Data Protection">
              Data Protection
            </option>
            <option value="Incident Response">
              Incident Response
            </option>
            <option value="Security Consultation">
              Security Consultation
            </option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="contact-message">Message *</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Tell us how we can help..."
            value={form.message}
            onChange={handleChange}
            required
            maxLength={5000}
            rows={5}
          />
        </div>

        <button
          type="submit"
          className="contact-submit"
          disabled={submitting}
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

