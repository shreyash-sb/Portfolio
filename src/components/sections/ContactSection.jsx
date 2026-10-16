import React from "react";
import { Send, Check } from "lucide-react";

export function ContactSection({
  personal,
  contactOptions,
  contactForm,
  contactSubmitted,
  onChangeForm,
  onSubmitForm
}) {
  return (
    <article id="contact" className="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <div className="connect-dashboard">
        <p className="connect-text">
          Let's collaborate on software engineering, full-stack web platforms, machine learning, projects. Feel free to connect directly via the sidebar options or send a message below:
        </p>

        {/* Working Contact Form */}
        <div className="contact-form-card">
          <h3 className="contact-form-title">Send a Direct Message</h3>
          <p className="contact-form-subtitle">
            Have an internship opening, contract role, or collaboration idea? Leave a message here:
          </p>

          <form className="cms-form" onSubmit={onSubmitForm}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name *</label>
                <input
                  type="text"
                  id="contact-name"
                  className="form-input"
                  placeholder="e.g. XYZ"
                  value={contactForm.name}
                  onChange={(e) => onChangeForm({ ...contactForm, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Your Email *</label>
                <input
                  type="email"
                  id="contact-email"
                  className="form-input"
                  placeholder="e.g. XYZ@example.com"
                  value={contactForm.email}
                  onChange={(e) => onChangeForm({ ...contactForm, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-interest">Interest / Topic</label>
              <select
                id="contact-interest"
                className="form-select"
                value={contactForm.interest}
                onChange={(e) => onChangeForm({ ...contactForm, interest: e.target.value })}
              >
                {contactOptions.map((opt, oIdx) => (
                  <option key={oIdx} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
                className="form-textarea"
                placeholder="Give your message"
                value={contactForm.message}
                onChange={(e) => onChangeForm({ ...contactForm, message: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit-btn"
              style={{
                background: contactSubmitted
                  ? "linear-gradient(135deg, #10B981 0%, #059669 100%)"
                  : "var(--accent-gradient)"
              }}
            >
              {contactSubmitted ? (
                <>
                  <Check size={16} />
                  <span>Message Sent! ✓</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </article>
  );
}
