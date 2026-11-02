
import React from "react";
import ContactForm from "../../componets/contact-form/ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <p className="contact-eyebrow">Contact Us</p>

          <h1>
            LET'S TALK.
            <br />
            <span>WE'RE HERE TO HELP.</span>
          </h1>

          <p className="contact-hero-description">
            Have a question about our services, or think your
            business may be at risk? Send us a message and a
            Tri-Shield specialist will get back to you.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-grid">
          <ContactForm />

          <div className="contact-info-card">
            <h2>Find us</h2>

            {/* PROJECT PART 10: Google Maps iframe */}
            <div className="contact-map">
              <iframe
                title="Map of Columbia, South Carolina"
                src="https://www.google.com/maps?q=Columbia%2C%20SC%2029201&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="contact-details">
              <p>
                <strong>Office:</strong> Columbia, SC 29201
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:hello@trishieldsecurity.com">
                  hello@trishieldsecurity.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong> (803) 555-0142
              </p>
              <p>
                <strong>Hours:</strong> Mon–Fri, 8am–6pm
                (emergency response 24/7)
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
