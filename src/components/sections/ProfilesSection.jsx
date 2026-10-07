import React from "react";
import { Code2, Star } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export function ProfilesSection({ profiles }) {
  return (
    <article id="profiles" className="profiles-section">
      <header>
        <h2 className="h2 article-title">Coding & Professional Profiles</h2>
      </header>

      <div className="profiles-grid">
        {profiles.map((prof, idx) => (
          <a
            key={idx}
            href={prof.url}
            target="_blank"
            rel="noreferrer"
            className="profile-card"
          >
            <div className="profile-left">
              <div className="profile-icon">
                {prof.icon === "github" && <GithubIcon size={20} />}
                {prof.icon === "linkedin" && <LinkedinIcon size={20} />}
                {prof.icon === "code" && <Code2 size={20} />}
                {prof.icon === "star" && <Star size={20} />}
              </div>
              <div>
                <h4 className="profile-platform">{prof.platform}</h4>
                <p className="profile-handle">@{prof.handle}</p>
              </div>
            </div>
            <span className="profile-badge">{prof.badge}</span>
          </a>
        ))}
      </div>
    </article>
  );
}
