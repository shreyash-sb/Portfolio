import React from "react";
import { Mail, Phone, Send, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

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
          Let's collaborate on software engineering internships, full-stack web platforms, machine learning, or open-source projects. Reach out directly or send a message below:
        </p>

        <div className="contact-grid">
          <a href={`mailto:${personal.email}`} className="contact-card-box">
            <div className="card-icon-box">
              <Mail size={22} />
            </div>
            <h3 className="card-h3">Email Me</h3>
            <p className="card-val">{personal.email}</p>
            <span className="card-action">Send Email →</span>
          </a>

          <a href={personal.whatsapp} target="_blank" rel="noreferrer" className="contact-card-box">
            <div className="card-icon-box">
              <Phone size={22} />
            </div>
            <h3 className="card-h3">Phone / WhatsApp</h3>
            <p className="card-val">{personal.phone}</p>
            <span className="card-action">Chat on WhatsApp →</span>
          </a>

          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-card-box">
            <div className="card-icon-box">
              <LinkedinIcon size={22} />
            </div>
            <h3 className="card-h3">LinkedIn</h3>
            <p className="card-val">shreyash-bobalade</p>
            <span className="card-action">Connect →</span>
          </a>

          <a href={personal.github} target="_blank" rel="noreferrer" className="contact-card-box">
            <div className="card-icon-box">
              <GithubIcon size={22} />
            </div>
            <h3 className="card-h3">GitHub</h3>
            <p className="card-val">shreyash-bobalade</p>
            <span className="card-action">View Code →</span>
          </a>
        </div>

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
                  placeholder="e.g. John Doe"
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
                  placeholder="e.g. john@example.com"
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
                placeholder="Hi Shreyash, I came across your portfolio and wanted to discuss..."
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
