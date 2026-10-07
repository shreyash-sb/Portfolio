import React from "react";
import {
  X,
  Wrench,
  CheckCircle2,
  Zap,
  PlusCircle,
  Code2,
  Copy,
  Trash2
} from "lucide-react";

export function CmsDashboardModal({
  isOpen,
  storageKeys,
  onOpenAddSkill,
  onOpenAddProject,
  onShowToast,
  onClose
}) {
  if (!isOpen) return null;

  const exportData = {
    customSkills: JSON.parse(localStorage.getItem(storageKeys.SKILLS) || "[]"),
    customProjects: JSON.parse(localStorage.getItem(storageKeys.PROJECTS) || "[]")
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(exportData, null, 2));
    onShowToast("CMS Data copied to clipboard!");
  };

  const handleReset = () => {
    if (window.confirm("Reset all locally created skills and projects?")) {
      localStorage.removeItem(storageKeys.SKILLS);
      localStorage.removeItem(storageKeys.PROJECTS);
      window.location.reload();
    }
  };

  return (
    <div
      className="project-modal-container active"
      onClick={(e) => {
        if (e.target.classList.contains("project-modal-container")) {
          onClose();
        }
      }}
    >
      <div className="project-modal" style={{ maxWidth: "600px" }}>
        <button className="modal-close-btn" onClick={onClose} title="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header-meta">
          <span className="project-category-badge">
            <Wrench size={14} style={{ display: "inline", marginRight: "4px" }} /> Developer CMS
          </span>
          <span className="project-status-pill">
            <CheckCircle2 size={12} /> Client Storage Ready
          </span>
        </div>

        <h2 className="modal-project-title">Portfolio CMS & Data Sync</h2>
        <p className="modal-timeline-role">Manage dynamic content, view local additions, and export JSON</p>

        <div className="modal-section">
          <h4 className="modal-section-heading">
            <Zap size={16} />
            Quick Actions
          </h4>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "8px" }}>
            <button
              className="modal-btn-primary"
              onClick={() => {
                onClose();
                onOpenAddSkill();
              }}
              style={{ flex: 1, justifyContent: "center" }}
            >
              <PlusCircle size={15} />
              <span>Add Skill</span>
            </button>
            <button
              className="modal-btn-primary"
              onClick={() => {
                onClose();
                onOpenAddProject();
              }}
              style={{ flex: 1, justifyContent: "center" }}
            >
              <PlusCircle size={15} />
              <span>Add Project</span>
            </button>
          </div>
        </div>

        <div className="modal-section">
          <h4 className="modal-section-heading">
            <Code2 size={16} />
            Export Stored Items for GitHub / Netlify
          </h4>
          <p className="modal-overview-text">
            Items you add are stored immediately in your browser. To permanently sync custom additions with your repository, copy the JSON export:
          </p>
          <div className="cms-code-box">
            {JSON.stringify(exportData, null, 2)}
          </div>
          <div style={{ display: "flex", gap: "10px", marginTop: "12px", flexWrap: "wrap" }}>
            <button
              type="button"
              className="modal-btn-secondary"
              onClick={handleCopyJson}
              style={{ flex: 1, justifyContent: "center" }}
            >
              <Copy size={15} />
              <span>Copy JSON Export</span>
            </button>
            <button
              type="button"
              className="modal-btn-secondary"
              onClick={handleReset}
              style={{ color: "#EF4444", borderColor: "rgba(239, 68, 68, 0.4)" }}
            >
              <Trash2 size={15} />
              <span>Reset Local Additions</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
