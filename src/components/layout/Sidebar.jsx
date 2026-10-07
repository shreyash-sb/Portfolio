import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  ChevronDown,
  Wrench,
  Code2,
  Star,
  FileText,
  Download
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export function Sidebar({ personal, active, onToggle, onOpenCms, onOpenResume }) {
  return (
    <aside className={`sidebar ${active ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <svg className="avatar-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F0FF" />
                <stop offset="100%" stopColor="#0072FF" />
              </linearGradient>
              <linearGradient id="backGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#1E293B" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" fill="url(#backGrad)" stroke="url(#avatarGrad)" strokeWidth="2.5" />
            <path d="M50 24 C40 24 35 32 35 42 C35 52 42 58 50 58 C58 58 65 52 65 42 C65 32 60 24 50 24 Z" fill="#E2E8F0" />
            <path d="M50 38 L43 45 H57 Z" fill="#0072FF" opacity="0.35" />
            <circle cx="45" cy="40" r="2.5" fill="#090D16" />
            <circle cx="55" cy="40" r="2.5" fill="#090D16" />
            <path d="M22 80 C22 68 32 62 50 62 C68 62 78 68 78 80 C78 82 76 84 74 84 H26 C24 84 22 82 22 80 Z" fill="url(#avatarGrad)" />
            <circle cx="82" cy="24" r="3.5" fill="#00F0FF" className="float-dot-1" />
            <circle cx="18" cy="28" r="4" fill="#0072FF" className="float-dot-2" />
          </svg>
        </figure>

        <div className="info-content">
          <h1 className="name" title={personal.name}>
            {personal.name}
          </h1>
          <p className="title">{personal.role}</p>
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>{personal.status}</span>
          </div>
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
            title="Preview Full Qualifications & Resume"
          >
            <FileText size={16} />
            <span>View Resume / CV</span>
          </button>
          <button
            type="button"
            className="sidebar-resume-download-btn"
            onClick={onOpenResume}
            title="Print or Save PDF"
          >
            <Download size={15} />
          </button>
        </div>

        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Mail size={16} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href={`mailto:${personal.email}`} className="contact-link">
                {personal.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <Phone size={16} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone / WhatsApp</p>
              <a href={personal.whatsapp} target="_blank" rel="noreferrer" className="contact-link">
                {personal.phone}
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

          <li className="contact-item">
            <div className="icon-box">
              <LinkedinIcon size={16} />
            </div>
            <div className="contact-info">
              <p className="contact-title">LinkedIn</p>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                shreyash-bobalade
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GithubIcon size={16} />
            </div>
            <div className="contact-info">
              <p className="contact-title">GitHub</p>
              <a href={personal.github} target="_blank" rel="noreferrer" className="contact-link">
                shreyash-bobalade
              </a>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li>
            <a href={personal.github} target="_blank" rel="noreferrer" className="social-link" title="GitHub">
              <GithubIcon size={17} />
            </a>
          </li>
          <li>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
              <LinkedinIcon size={17} />
            </a>
          </li>
          <li>
            <a href={personal.leetcode} target="_blank" rel="noreferrer" className="social-link" title="LeetCode (300+ Solved)">
              <Code2 size={17} />
            </a>
          </li>
          <li>
            <a href={personal.codechef} target="_blank" rel="noreferrer" className="social-link" title="CodeChef (2★)">
              <Star size={17} />
            </a>
          </li>
          <li>
            <a href={`mailto:${personal.email}`} className="social-link" title="Email Me">
              <Mail size={17} />
            </a>
          </li>
        </ul>

        <div className="sidebar-cms-trigger">
          <button
            className="cms-portal-btn"
            onClick={onOpenCms}
            title="Developer CMS Dashboard"
          >
            <Wrench size={14} />
            <span>Developer CMS</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
