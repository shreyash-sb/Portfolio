import React from "react";
import {
  Cpu,
  PlusCircle,
  Code2,
  Layout,
  Server,
  Database,
  Sparkles,
  Wrench
} from "lucide-react";

export function SkillsSection({ skills, onOpenAddSkill }) {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "code":
        return <Code2 size={16} className="skill-cat-icon" />;
      case "layout":
        return <Layout size={16} className="skill-cat-icon" />;
      case "server":
        return <Server size={16} className="skill-cat-icon" />;
      case "database":
        return <Database size={16} className="skill-cat-icon" />;
      case "sparkles":
        return <Sparkles size={16} className="skill-cat-icon" />;
      case "cpu":
        return <Cpu size={16} className="skill-cat-icon" />;
      case "tool":
      default:
        return <Wrench size={16} className="skill-cat-icon" />;
    }
  };

  return (
    <article id="skills" className="skills-section">
      <div className="skills-header-wrapper">
        <div className="title-wrapper">
          <div className="icon-box">
            <Cpu size={18} />
          </div>
          <h2 className="h2 article-title" style={{ marginBottom: 0 }}>
            Technical Skills
          </h2>
        </div>
        <button
          className="add-cms-btn"
          onClick={onOpenAddSkill}
          title="Add New Skill"
        >
          <PlusCircle size={15} />
          <span>Add Skill</span>
        </button>
      </div>

      {/* Unified Technical Skills Grid (Single cohesive section matching resume) */}
      <div className="skill-categories-grid">
        {skills.categories.map((cat, cIdx) => (
          <div key={cIdx} className="skill-cat-card">
            <div className="skill-cat-header">
              <h4 className="skill-cat-title">
                {getCategoryIcon(cat.icon)}
                <span>{cat.title}</span>
              </h4>
              <span className="skill-count-badge">
                {cat.items.length} {cat.items.length === 1 ? "Skill" : "Skills"}
              </span>
            </div>

            <div className="skill-pills-wrap">
              {cat.items.map((tech, tIdx) => (
                <span key={tIdx} className="skill-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
