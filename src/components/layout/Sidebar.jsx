import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  ChevronDown,
  FileText,
  Download
} from "lucide-react";

export function Sidebar({ personal, active, onToggle, onOpenResume }) {
  return (
    <aside className={`sidebar ${active ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src="/shreyash.jpg"
            alt={personal.name}
            className="avatar-img"
            loading="eager"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title={personal.name}>
            {personal.name}
          </h1>
          <p className="title">{personal.role}</p>
        </div>

        <button
          className="info_more-btn"
          onClick={onToggle}
          aria-label="Toggle contacts"
        >
          <span>{active ? "Hide" : "Contacts"}</span>
          <ChevronDown size={14} />
        </button>
      </div>

      <div className="sidebar-info_more">
        {/* Prominent Resume CTA Card */}
        <div className="sidebar-resume-card">
          <button
            type="button"
            className="sidebar-resume-btn"
            onClick={onOpenResume}
            title="Preview Shreyash's Verified Resume (PDF)"
          >
            <FileText size={16} />
            <span>View Resume (PDF)</span>
          </button>
          <a
            href="/Shreyash_Bobalade_Resume.pdf"
            download="Shreyash_Bobalade_Resume.pdf"
            className="sidebar-resume-download-btn"
            title="Download Resume (PDF)"
          >
            <Download size={15} />
          </a>
        </div>

        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Mail size={16} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email Me</p>
              <a href={`mailto:${personal.email}`} className="contact-link" title="Send Email">
                {personal.email}
              </a>
              <a href={`mailto:${personal.email}`} className="contact-action">
                Send Email →
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <Phone size={16} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone / WhatsApp</p>
              <a href={personal.whatsapp} target="_blank" rel="noreferrer" className="contact-link" title="Chat on WhatsApp">
                {personal.phone}
              </a>
              <a href={personal.whatsapp} target="_blank" rel="noreferrer" className="contact-action">
                Chat on WhatsApp →
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MapPin size={16} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>{personal.location}</address>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GraduationCap size={16} />
            </div>
            <div className="contact-info">
              <p className="contact-title">College</p>
              <span className="contact-link">WCE Sangli (IT Dept)</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}
