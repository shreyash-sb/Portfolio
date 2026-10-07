import React from "react";
import { X, Cpu, PlusCircle } from "lucide-react";

export function AddSkillModal({
  isOpen,
  newSkill,
  categories = [],
  onChangeSkill,
  onSubmitSkill,
  onClose
}) {
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
      <div className="project-modal" style={{ maxWidth: "500px" }}>
        <button className="modal-close-btn" onClick={onClose} title="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header-meta">
          <span className="project-category-badge">
            <Cpu size={14} style={{ display: "inline", marginRight: "4px" }} /> Skill Manager
          </span>
        </div>

        <h2 className="modal-project-title">Add Technical Skill</h2>
        <p className="modal-timeline-role">Add a technology or tool to your categorized skill matrix</p>

        <form className="cms-form" onSubmit={onSubmitSkill}>
          <div className="form-group">
            <label className="form-label" htmlFor="skill-name">Skill / Tool Name *</label>
            <input
              type="text"
              id="skill-name"
              className="form-input"
              placeholder="e.g. Next.js, Docker, PostgreSQL, PyTorch"
              value={newSkill.name}
              onChange={(e) => onChangeSkill({ ...newSkill, name: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="skill-category">Target Category *</label>
            <select
              id="skill-category"
              className="form-select"
              value={newSkill.category}
              onChange={(e) => onChangeSkill({ ...newSkill, category: e.target.value })}
              required
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat.title}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="skill-status">Competency Level</label>
            <select
              id="skill-status"
              className="form-select"
              value={newSkill.status}
              onChange={(e) => onChangeSkill({ ...newSkill, status: e.target.value })}
            >
              <option value="Proficient">Proficient / Core Stack</option>
              <option value="Advanced">Advanced Concepts</option>
              <option value="Hands-on">Hands-on Project Experience</option>
              <option value="Exploring">Actively Learning / Exploring</option>
            </select>
          </div>

          <div className="modal-actions-footer" style={{ marginTop: "15px" }}>
            <button
              type="submit"
              className="modal-btn-primary"
              style={{ flex: 1, justifyContent: "center" }}
            >
              <PlusCircle size={16} />
              <span>Save Skill Live</span>
            </button>
            <button
              type="button"
              className="modal-btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
