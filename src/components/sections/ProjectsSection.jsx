import React, { useState } from "react";
import {
  PlusCircle,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Search,
  X,
  RotateCcw
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
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);

  const filterCategories = [
    "All Projects",
    "Full-Stack Web",
    "Machine Learning & AI",
    "Mobile & IoT",
    "Python & Games"
  ];

  const filteredProjects = projects.filter((p) => {
    // Category check
    const matchesCategory =
      selectedFilter === "All Projects" ||
      p.category.toLowerCase().trim() === selectedFilter.toLowerCase().trim();

    if (!matchesCategory) return false;

    // Search query check
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase().trim();

    const inTitle = p.title.toLowerCase().includes(query);
    const inDesc = p.desc.toLowerCase().includes(query);
    const inCategory = p.category.toLowerCase().includes(query);
    const inTech = p.techStack.some((t) => t.toLowerCase().includes(query));
    const inOverview = p.overview ? p.overview.toLowerCase().includes(query) : false;

    return inTitle || inDesc || inCategory || inTech || inOverview;
  });

  const handleResetSearch = () => {
    setSearchQuery("");
    setSelectedFilter("All Projects");
  };

  return (
    <article id="projects" className="portfolio">
      <header className="projects-header-wrapper">
        <div>
          <h2 className="h2 article-title" style={{ marginBottom: 0 }}>
            Featured Projects
          </h2>
        </div>
        <button
          className="add-cms-btn"
          onClick={onOpenAddProject}
          title="Add New Project"
        >
          <PlusCircle size={15} />
          <span>Add Project</span>
        </button>
      </header>

      {/* Project Controls Bar: Instant Search & Results Counter */}
      <div className="project-controls-bar">
        <div className="project-search-wrapper">
          <Search size={16} className="project-search-icon" />
          <input
            type="text"
            className="project-search-input"
            placeholder="Instant search by project, stack (React, OpenCV, Firebase)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search projects"
          />
          {searchQuery && (
            <button
              type="button"
              className="project-search-clear-btn"
              onClick={() => setSearchQuery("")}
              title="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="project-count-indicator">
          <span>
            Showing <strong>{filteredProjects.length}</strong> of {projects.length}
          </span>
        </div>
      </div>

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

      {/* Project Cards Grid OR Empty State */}
      {filteredProjects.length === 0 ? (
        <div className="projects-empty-state">
          <div className="empty-state-icon">
            <Search size={30} />
          </div>
          <h3 className="empty-state-title">No projects found</h3>
          <p className="empty-state-desc">
            No projects matched <strong>"{searchQuery}"</strong> in the{" "}
            <strong>"{selectedFilter}"</strong> filter. Try searching for other keywords like <em>React</em>, <em>Python</em>, <em>Vision</em>, <em>IoT</em>, or reset your search.
          </p>
          <button className="reset-filter-btn" onClick={handleResetSearch}>
            <RotateCcw size={14} />
            <span>Reset Search & Filters</span>
          </button>
        </div>
      ) : (
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
      )}
    </article>
  );
}
