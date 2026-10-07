import React from "react";
import {
  Cpu,
  PlusCircle,
  Terminal,
  Layout,
  Server,
  Sparkles,
  Wrench,
  CheckCircle2
} from "lucide-react";

export function SkillsSection({ skills, onOpenAddSkill }) {
  return (
    <article id="skills" className="skills-section">
      <div className="skills-header-wrapper">
        <div className="title-wrapper">
          <div className="icon-box">
            <Cpu size={18} />
          </div>
          <h2 className="h2 article-title" style={{ marginBottom: 0 }}>
            Technical Competencies
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

      {/* Core Technical Arsenal (Clean Competencies without Arbitrary Bars) */}
      {skills.coreArsenal && skills.coreArsenal.length > 0 && (
        <div className="skills-arsenal-grid">
          {skills.coreArsenal.map((item, idx) => (
            <div key={idx} className="arsenal-card">
              <div className="arsenal-card-header">
                <h4 className="arsenal-title">{item.title}</h4>
                <span className="arsenal-badge">{item.badge}</span>
              </div>
              <div className="arsenal-tech">{item.tech}</div>
              <p className="arsenal-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Categorized Skills Matrix */}
      <div className="skill-categories-grid">
        {skills.categories.map((cat, cIdx) => (
          <div key={cIdx} className="skill-cat-card">
            <h4 className="skill-cat-title">
              {cat.icon === "terminal" && <Terminal size={16} />}
              {cat.icon === "layout" && <Layout size={16} />}
              {cat.icon === "server" && <Server size={16} />}
              {cat.icon === "sparkles" && <Sparkles size={16} />}
              {cat.icon === "tool" && <Wrench size={16} />}
              <span>{cat.title}</span>
            </h4>
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
