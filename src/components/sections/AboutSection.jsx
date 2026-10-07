import React from "react";
import {
  Briefcase,
  Code2,
  Eye,
  Smartphone,
  Cpu,
  Cloud,
  GitBranch
} from "lucide-react";

export function AboutSection({ personal, stats, interests }) {
  return (
    <article id="about" className="about">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      <section className="about-text">
        <p>{personal.bio}</p>
        <p>{personal.subBio}</p>
      </section>

      {/* Quick Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
            <span className="stat-sublabel">{stat.sublabel}</span>
          </div>
        ))}
      </div>

      {/* Internship Callout Banner */}
      <div className="internship-banner">
        <div className="banner-icon">
          <Briefcase size={22} />
        </div>
        <div className="banner-content">
          <h4>Actively Seeking Summer 2026 Internships!</h4>
          <p>
            Looking for Software Engineering, Full-Stack Development, and AI/ML internship opportunities. Open to relocation and remote positions.
          </p>
        </div>
      </div>

      {/* Core Domains & Interests */}
      <section className="service">
        <h3 className="h3 service-title">My Core Domains & Interests</h3>
        <ul className="service-list">
          {interests.map((item, idx) => (
            <li key={idx} className="service-item">
              <div className="service-icon-box">
                {item.icon === "code" && <Code2 size={22} />}
                {item.icon === "eye" && <Eye size={22} />}
                {item.icon === "smartphone" && <Smartphone size={22} />}
                {item.icon === "cpu" && <Cpu size={22} />}
                {item.icon === "cloud" && <Cloud size={22} />}
                {item.icon === "git-branch" && <GitBranch size={22} />}
              </div>
              <div className="service-content-box">
                <h4 className="service-item-title">{item.title}</h4>
                <p className="service-item-text">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
