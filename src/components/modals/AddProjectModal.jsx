import React from "react";
import { X, Code2, PlusCircle } from "lucide-react";

export function AddProjectModal({
  isOpen,
  newProject,
  onChangeProject,
  onSubmitProject,
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
      <div className="project-modal">
        <button className="modal-close-btn" onClick={onClose} title="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header-meta">
          <span className="project-category-badge">
            <Code2 size={14} style={{ display: "inline", marginRight: "4px" }} /> Project Manager
          </span>
        </div>

        <h2 className="modal-project-title">Add New Project</h2>
        <p className="modal-timeline-role">Add a complete project with qualifications, tech tags & links</p>

        <form className="cms-form" onSubmit={onSubmitProject}>
          <div className="form-group">
            <label className="form-label" htmlFor="proj-title">Project Title *</label>
            <input
              type="text"
              id="proj-title"
              className="form-input"
              placeholder="e.g. Distributed Task Orchestrator"
              value={newProject.title}
              onChange={(e) => onChangeProject({ ...newProject, title: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="proj-category">Category *</label>
            <select
              id="proj-category"
              className="form-select"
              value={newProject.category}
              onChange={(e) => onChangeProject({ ...newProject, category: e.target.value })}
              required
            >
              <option value="Full-Stack Web">Full-Stack Web</option>
              <option value="Machine Learning & AI">Machine Learning & AI</option>
              <option value="Mobile & IoT">Mobile & IoT</option>
              <option value="Python & Games">Python & Games</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="proj-role">Status & Role</label>
            <input
              type="text"
              id="proj-role"
              className="form-input"
              placeholder="e.g. Lead Full-Stack Architect • 2026"
              value={newProject.role}
              onChange={(e) => onChangeProject({ ...newProject, role: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="proj-desc">Short Description (Card Summary) *</label>
            <textarea
              id="proj-desc"
              className="form-textarea"
              placeholder="Brief 1-2 sentence overview shown on the project card..."
              value={newProject.desc}
              onChange={(e) => onChangeProject({ ...newProject, desc: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="proj-overview">Detailed Technical Overview (Modal Breakdown)</label>
            <textarea
              id="proj-overview"
              className="form-textarea"
              placeholder="In-depth problem statement, system architecture, and features..."
              value={newProject.overview}
              onChange={(e) => onChangeProject({ ...newProject, overview: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="proj-quals">
              <span>Key Qualifications & Highlights</span>
              <span className="form-help-text">(One point per line)</span>
            </label>
            <textarea
              id="proj-quals"
              className="form-textarea"
              placeholder="Implemented distributed message queue with &lt;10ms latency&#10;Integrated JWT token authentication with RBAC guards&#10;Trained vision model achieving 96% validation accuracy"
              value={newProject.qualifications}
              onChange={(e) => onChangeProject({ ...newProject, qualifications: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="proj-tech">
              <span>Tech Stack</span>
              <span className="form-help-text">(Comma separated)</span>
            </label>
            <input
              type="text"
              id="proj-tech"
              className="form-input"
              placeholder="e.g. React.js, Node.js, Express, MongoDB, Tailwind CSS"
              value={newProject.techStack}
              onChange={(e) => onChangeProject({ ...newProject, techStack: e.target.value })}
              required
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
            <div className="form-group">
              <label className="form-label" htmlFor="proj-github">GitHub URL</label>
              <input
                type="url"
                id="proj-github"
                className="form-input"
                value={newProject.githubUrl}
                onChange={(e) => onChangeProject({ ...newProject, githubUrl: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="proj-live">Live Demo / Preview URL</label>
              <input
                type="url"
                id="proj-live"
                className="form-input"
                value={newProject.liveUrl}
                onChange={(e) => onChangeProject({ ...newProject, liveUrl: e.target.value })}
              />
            </div>
          </div>

          <div className="modal-actions-footer" style={{ marginTop: "15px" }}>
            <button
              type="submit"
              className="modal-btn-primary"
              style={{ flex: 1, justifyContent: "center" }}
            >
              <PlusCircle size={16} />
              <span>Save Project Live</span>
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
