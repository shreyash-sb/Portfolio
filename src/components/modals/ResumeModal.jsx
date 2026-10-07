import React from "react";
import {
  X,
  Download,
  ExternalLink,
  FileText
} from "lucide-react";

export function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="project-modal-container active"
      onClick={(e) => {
        if (e.target.classList.contains("project-modal-container")) {
          onClose();
        }
      }}
    >
      <div
        className="resume-modal-dialog resume-pdf-dialog"
        role="dialog"
        aria-label="Resume Preview"
      >
        {/* Modal Top Bar */}
        <div className="resume-modal-header no-print">
          <div className="resume-modal-title-box">
            <div className="resume-icon-badge">
              <FileText size={18} />
            </div>
            <div>
              <h3 className="resume-modal-title">Shreyash Bobalade — Official Resume</h3>
              <p className="resume-modal-subtitle">
                Original Verified CV PDF • B.Tech IT, WCE Sangli
              </p>
            </div>
          </div>

          <div className="resume-modal-actions">
            <a
              href="/Shreyash_Bobalade_Resume.pdf"
              download="Shreyash_Bobalade_Resume.pdf"
              className="resume-action-btn primary"
              title="Download Original Resume PDF"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <a
              href="/Shreyash_Bobalade_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-action-btn secondary"
              title="Open Resume PDF in New Tab"
            >
              <ExternalLink size={15} />
              <span>Open in New Tab</span>
            </a>

            <button
              className="modal-close-btn resume-close-btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Real Embedded PDF Viewer */}
        <div className="resume-pdf-container">
          <iframe
            src="/Shreyash_Bobalade_Resume.pdf#view=FitH&toolbar=1"
            title="Shreyash Bobalade Resume PDF"
            className="resume-pdf-iframe"
          />
        </div>
      </div>
    </div>
  );
}
