import React, { useState } from "react";
import {
  PlusCircle,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import { ProjectSvgThumbnail } from "../ui/ProjectThumbnail";

export function ProjectsSection({
  projects,
  defaultGithub,
  onOpenAddProject,
  onSelectProject
}) {
  const [selectedFilter, setSelectedFilter] = useState("All Projects");
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);

  const filterCategories = [
    "All Projects",
    "Full-Stack Web",
    "Machine Learning & AI",
    "Mobile & IoT",
    "Python & Games"
  ];

  const filteredProjects = projects.filter((p) => {
    if (selectedFilter === "All Projects") return true;
    return p.category.toLowerCase().trim() === selectedFilter.toLowerCase().trim();
  });

  return (
    <article id="projects" className="portfolio">
      <header className="projects-header-wrapper">
        <h2 className="h2 article-title" style={{ marginBottom: 0 }}>
          Featured Projects
        </h2>
        <button
          className="add-cms-btn"
          onClick={onOpenAddProject}
          title="Add New Project"
        >
          <PlusCircle size={15} />
          <span>Add Project</span>
        </button>
      </header>

      {/* Project Filter for Mobile Dropdown */}
      <div className="filter-select-box">
        <button
          className={`filter-select ${filterDropdownOpen ? "active" : ""}`}
          onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
        >
          <div className="select-value">{selectedFilter}</div>
          <div className="select-icon">
            <ChevronDown size={16} />
          </div>
        </button>
        {filterDropdownOpen && (
          <ul className="select-list">
            {filterCategories.map((cat, idx) => (
              <li key={idx} className="select-item">
                <button
                  onClick={() => {
                    setSelectedFilter(cat);
                    setFilterDropdownOpen(false);
                  }}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Project Filter Desktop Tabs */}
      <ul className="filter-list">
        {filterCategories.map((cat, idx) => (
          <li key={idx} className="filter-item">
            <button
              className={selectedFilter === cat ? "active" : ""}
              onClick={() => setSelectedFilter(cat)}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>

      {/* Project Cards Grid */}
      <ul className="project-list">
        {filteredProjects.map((project) => (
          <li key={project.id} className="project-item active">
            <figure
              className="project-img"
              onClick={() => onSelectProject(project)}
              title="Click to view full qualifications"
            >
              <div className="project-item-icon-box">
                <Sparkles size={20} />
              </div>
              <ProjectSvgThumbnail projectId={project.id} title={project.title} />
            </figure>

            <div className="project-card-header">
              <span className="project-category-badge">{project.category}</span>
              <span className="project-status-pill">
                <CheckCircle2 size={12} /> {project.status || "Completed"}
              </span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>

            <div className="project-tech-list">
              {project.techStack.slice(0, 4).map((tech, tIdx) => (
                <span key={tIdx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-card-actions">
              <button
                className="project-modal-trigger-btn"
                onClick={() => onSelectProject(project)}
              >
                <span>Qualifications</span>
                <Sparkles size={14} />
              </button>
              <div className="project-links-group">
                <a
                  href={project.githubUrl || defaultGithub}
                  target="_blank"
                  rel="noreferrer"
                  className="project-icon-link"
                  title="GitHub Code"
                >
                  <GithubIcon size={15} />
                </a>
                <a
                  href={project.liveUrl || project.githubUrl || defaultGithub}
                  target="_blank"
                  rel="noreferrer"
                  className="project-icon-link"
                  title="Live Preview"
                >
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
