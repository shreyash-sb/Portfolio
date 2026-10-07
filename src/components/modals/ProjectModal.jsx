import React from "react";
import {
  X,
  CheckCircle2,
  Layout,
  Award,
  Code2,
  Globe
} from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import { ProjectSvgThumbnail } from "../ui/ProjectThumbnail";

export function ProjectModal({ project, defaultGithub, onClose }) {
  if (!project) return null;

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
        <button
          className="modal-close-btn"
          onClick={onClose}
          title="Close modal"
        >
          <X size={20} />
        </button>

        <div className="modal-header-meta">
          <span className="project-category-badge">{project.category}</span>
          <span className="project-status-pill">
            <CheckCircle2 size={12} /> {project.status || "Active"}
          </span>
        </div>

        <h2 className="modal-project-title">{project.title}</h2>
        <p className="modal-timeline-role">{project.role}</p>

        <div className="modal-banner-box">
          <ProjectSvgThumbnail projectId={project.id} title={project.title} />
        </div>

        <div className="modal-section">
          <h4 className="modal-section-heading">
            <Layout size={17} />
            Project Architecture & Overview
          </h4>
          <p className="modal-overview-text">
            {project.overview || project.desc}
          </p>
        </div>

        <div className="modal-section">
          <h4 className="modal-section-heading">
            <Award size={17} />
            Key Qualifications & Highlights
          </h4>
          <div className="modal-qualifications-list">
            {project.qualifications && project.qualifications.length > 0 ? (
              project.qualifications.map((qual, qIdx) => (
                <div key={qIdx} className="modal-qualification-item">
                  <CheckCircle2 size={16} />
                  <span>{qual}</span>
                </div>
              ))
            ) : (
              <div className="modal-qualification-item">
                <CheckCircle2 size={16} />
                <span>{project.desc}</span>
              </div>
            )}
          </div>
        </div>

        <div className="modal-section">
          <h4 className="modal-section-heading">
            <Code2 size={17} />
            Tech Stack & Tools
          </h4>
          <div className="modal-tech-stack-container">
            {project.techStack.map((tech, tIdx) => (
              <span key={tIdx} className="modal-tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-actions-footer">
          <a
            href={project.liveUrl || project.githubUrl || defaultGithub}
            target="_blank"
            rel="noreferrer"
            className="modal-btn-primary"
          >
            <Globe size={16} />
            <span>Live Demo / Preview</span>
          </a>
          <a
            href={project.githubUrl || defaultGithub}
            target="_blank"
            rel="noreferrer"
            className="modal-btn-secondary"
          >
            <GithubIcon size={16} />
            <span>View Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}
