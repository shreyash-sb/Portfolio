import React from "react";
import { GraduationCap } from "lucide-react";

export function EducationSection({ education }) {
  return (
    <article id="education" className="education">
      <header>
        <h2 className="h2 article-title">Education</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <GraduationCap size={18} />
          </div>
          <h3 className="h3">Academic Journey</h3>
        </div>

        <ol className="timeline-list">
          {education.map((edu, idx) => (
            <li key={idx} className="timeline-item">
              <h4 className="timeline-item-title">{edu.institution}</h4>
              <span className="timeline-item-org">{edu.degree}</span>
              <div>
                <span className="timeline-period-badge">
                  {edu.period} • {edu.grade}
                </span>
              </div>
              <p
                className="timeline-text"
                style={{ fontSize: "13px", lineHeight: "1.6", color: "var(--text-secondary)" }}
              >
                {edu.details}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
