import React from "react";

export function Navbar({ activeNav, onSelectSection }) {
  const links = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map((link) => (
          <li key={link.id}>
            <button
              className={`navbar-link ${activeNav === link.id ? "active" : ""}`}
              onClick={() => onSelectSection(link.id)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
