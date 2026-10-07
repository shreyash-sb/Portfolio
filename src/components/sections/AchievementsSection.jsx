import React from "react";
import { Zap, Star, Target, Cloud, Award, Shield } from "lucide-react";

export function AchievementsSection({ achievements }) {
  return (
    <article id="achievements" className="achievements-section">
      <header>
        <h2 className="h2 article-title">Achievements & Certifications</h2>
      </header>

      <div className="achievements-grid">
        {achievements.map((ach) => (
          <div key={ach.id} className="achievement-card">
            <div className="achievement-icon-box">
              {ach.icon === "zap" && <Zap size={20} />}
              {ach.icon === "star" && <Star size={20} />}
              {ach.icon === "target" && <Target size={20} />}
              {ach.icon === "cloud" && <Cloud size={20} />}
              {ach.icon === "award" && <Award size={20} />}
              {ach.icon === "shield" && <Shield size={20} />}
            </div>
            <div className="achievement-info">
              <span style={{ fontSize: "11px", color: "var(--accent-cyan)", fontWeight: "600" }}>
                {ach.badge}
              </span>
              <h4 className="achievement-title">{ach.title}</h4>
              <p className="achievement-desc">{ach.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
