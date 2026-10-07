import React from "react";
import { Briefcase, CheckCircle2 } from "lucide-react";

export function ExperienceSection({ experience }) {
  return (
    <article id="experience" className="experience">
      <header>
        <h2 className="h2 article-title">Experience & Leadership</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <Briefcase size={18} />
          </div>
          <h3 className="h3">Leadership & Mentorship</h3>
        </div>

        <ol className="timeline-list">
          {experience.map((exp, idx) => (
            <li key={idx} className="timeline-item">
              <h4 className="timeline-item-title">{exp.role}</h4>
              <span className="timeline-item-org">{exp.organization}</span>
              <div>
                <span className="timeline-period-badge">
                  {exp.period} • {exp.location}
                </span>
              </div>
              <div className="timeline-points-list">
                {exp.points.map((pt, pIdx) => (
                  <div key={pIdx} className="timeline-bullet-item">
                    <CheckCircle2 size={15} />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
