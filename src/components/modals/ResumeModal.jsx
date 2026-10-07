import React from "react";
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  Code2,
  FolderGit2,
  Trophy,
  FileText
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export function ResumeModal({ isOpen, personal, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const resumeText = `===============================================================
SHREYASH BOBALADE
📞 ${personal.phone} | ✉️ ${personal.email}
GitHub: ${personal.github} | LinkedIn: ${personal.linkedin} | CodeChef: ${personal.codechef}
===============================================================

ABOUT:
Information Technology undergraduate with strong foundations in software engineering,
DSA, OOP, and DBMS. Experienced in developing full-stack applications, backend APIs,
Android applications, and AI-based solutions. Interested in building scalable,
efficient, and reliable software systems.

TECHNICAL SKILLS:
- Languages: C, C++, Java, Python, JavaScript, SQL
- Frontend: React.js, Next.js, HTML5, CSS3, Tailwind CSS
- Backend & APIs: Node.js, Express.js, Django, FastAPI, REST APIs, JWT Authentication
- Databases: MongoDB, MySQL, Firebase Firestore
- AI & Data Science: OpenCV, TensorFlow, NumPy, Pandas, Matplotlib
- Core CS: Data Structures & Algorithms, OOP, DBMS, Computer Networks, Software Engineering
- Tools & Platforms: Git, GitHub, Android Studio, Cloudinary, Docker, Postman, Vercel, Render

PROJECTS:
1. Prescripto – Doctor Appointment & Healthcare Platform
   Stack: React.js, Node.js, Express.js, MongoDB, JWT, Cloudinary, Gemini AI
   - Built a full-stack healthcare platform with Patient, Doctor, and Admin portals, secure JWT authentication, appointment booking, and role-based access.
   - Implemented digital prescriptions, reviews/ratings, doctor availability, and Cloudinary image uploads with MongoDB persistence.
   - Integrated a project-aware Gemini AI assistant and deployed the platform using Vercel, Render, and MongoDB Atlas.

2. Real-Time Age & Gender Detection System
   Stack: Python, OpenCV, OpenCV DNN, TensorFlow, NumPy, Deep Learning, Computer Vision
   - Built a real-time system for face, age, and gender detection using webcam and images.
   - Implemented image preprocessing and deep-learning inference with OpenCV DNN and TensorFlow models.
   - Optimized frame processing for fast real-time predictions and visualization.

EDUCATION:
* B.Tech, Information Technology — 7.69 (till 4th Sem)
  Walchand College of Engineering, Sangli (Shivaji University) | 2024 – 2028

* Senior Secondary (Class XII) — 80.17% || 98.67 || 88.32
  Ligadi-Patil Jr. College of Science, (Maharashtra Board) | 2022 – 2024
  MHT-CET & JEE Examination

POSITIONS OF RESPONSIBILITY:
* Assistant Web Developer – SAIT, WCE | 2025 – 2026
  - Led an intra-club competitive programming event for 40+ students, promoting problem-solving and coding skills.
  - Organized and delivered a technical session on AWS Cloud Services, introducing cloud fundamentals and real-world applications.

CERTIFICATIONS & ACHIEVEMENTS:
- CodeChef - 2* Rating Problem Solver
- Leetcode – Problem Solver
- Linux Fundamentals - Red Hat
===============================================================`;

    const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Shreyash_Bobalade_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="project-modal-container active"
      onClick={(e) => {
        if (e.target.classList.contains("project-modal-container")) {
          onClose();
        }
      }}
    >
      <div
        className="resume-modal-dialog"
        role="dialog"
        aria-label="Resume Preview"
      >
        {/* Modal Top Bar (Sticky Actions) */}
        <div className="resume-modal-header no-print">
          <div className="resume-modal-title-box">
            <div className="resume-icon-badge">
              <FileText size={18} />
            </div>
            <div>
              <h3 className="resume-modal-title">Resume Preview</h3>
              <p className="resume-modal-subtitle">
                Official Resume of Shreyash Bobalade • Verified Profile
              </p>
            </div>
          </div>

          <div className="resume-modal-actions">
            <button
              className="resume-action-btn primary"
              onClick={handlePrint}
              title="Print or Save to PDF (Ctrl+P)"
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>

            <button
              className="resume-action-btn secondary"
              onClick={handleDownloadTxt}
              title="Download text resume"
            >
              <Download size={15} />
              <span>Download CV</span>
            </button>

            <button
              className="modal-close-btn resume-close-btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable & Interactive Resume Paper Sheet */}
        <div className="resume-sheet-wrapper">
          <div className="resume-paper" id="printable-resume">
            {/* Sheet Header */}
            <header className="resume-sheet-header">
              <h1 className="resume-sheet-name">Shreyash Bobalade</h1>
              <div className="resume-sheet-contact-row">
                <span>
                  <Phone size={12} /> {personal.phone}
                </span>
                <span>|</span>
                <a href={`mailto:${personal.email}`}>
                  <Mail size={12} /> {personal.email}
                </a>
              </div>
              <div className="resume-sheet-links-row">
                <a href={personal.github} target="_blank" rel="noreferrer">
                  <GithubIcon size={12} /> GitHub
                </a>
                <span>|</span>
                <a href={personal.linkedin} target="_blank" rel="noreferrer">
                  <LinkedinIcon size={12} /> LinkedIn
                </a>
                <span>|</span>
                <a href={personal.codechef} target="_blank" rel="noreferrer">
                  <Code2 size={12} /> CodeChef
                </a>
              </div>
            </header>

            {/* About */}
            <section className="resume-section">
              <h2 className="resume-sec-heading">About</h2>
              <p className="resume-summary-text">
                Information Technology undergraduate with strong foundations in software engineering, DSA, OOP, and
                DBMS. Experienced in developing full-stack applications, backend APIs, Android applications, and AI-based
                solutions. Interested in building scalable, efficient, and reliable software systems.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="resume-section">
              <h2 className="resume-sec-heading">
                <Code2 size={15} className="resume-sec-icon" /> Technical Skills
              </h2>
              <div className="resume-skills-table">
                <div className="resume-skill-row">
                  <span className="resume-skill-label">• Languages:</span>
                  <span className="resume-skill-vals">C, C++, Java, Python, JavaScript, SQL</span>
                </div>
                <div className="resume-skill-row">
                  <span className="resume-skill-label">• Frontend:</span>
                  <span className="resume-skill-vals">React.js, Next.js, HTML5, CSS3, Tailwind CSS</span>
                </div>
                <div className="resume-skill-row">
                  <span className="resume-skill-label">• Backend & APIs:</span>
                  <span className="resume-skill-vals">Node.js, Express.js, Django, FastAPI, REST APIs, JWT Authentication</span>
                </div>
                <div className="resume-skill-row">
                  <span className="resume-skill-label">• Databases:</span>
                  <span className="resume-skill-vals">MongoDB, MySQL, Firebase Firestore</span>
                </div>
                <div className="resume-skill-row">
                  <span className="resume-skill-label">• AI & Data Science:</span>
                  <span className="resume-skill-vals">OpenCV, TensorFlow, NumPy, Pandas, Matplotlib</span>
                </div>
                <div className="resume-skill-row">
                  <span className="resume-skill-label">• Core CS:</span>
                  <span className="resume-skill-vals">Data Structures & Algorithms, OOP, DBMS, Computer Networks, Software Engineering</span>
                </div>
                <div className="resume-skill-row">
                  <span className="resume-skill-label">• Tools & Platforms:</span>
                  <span className="resume-skill-vals">Git, GitHub, Android Studio, Cloudinary, Docker, Postman, Vercel, Render</span>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="resume-section">
              <h2 className="resume-sec-heading">
                <FolderGit2 size={15} className="resume-sec-icon" /> Projects
              </h2>

              <div className="resume-item">
                <div className="resume-item-header">
                  <strong>Prescripto – Doctor Appointment & Healthcare Platform</strong>
                </div>
                <div className="resume-item-sub">
                  <span className="resume-tech-pill">React.js, Node.js, Express.js, MongoDB, JWT, Cloudinary, Gemini AI</span>
                </div>
                <ul className="resume-bullet-list">
                  <li>Built a full-stack healthcare platform with Patient, Doctor, and Admin portals, secure JWT authentication, appointment booking, and role-based access.</li>
                  <li>Implemented digital prescriptions, reviews/ratings, doctor availability, and Cloudinary image uploads with MongoDB persistence.</li>
                  <li>Integrated a project-aware Gemini AI assistant and deployed the platform using Vercel, Render, and MongoDB Atlas.</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <strong>Real-Time Age & Gender Detection System</strong>
                </div>
                <div className="resume-item-sub">
                  <span className="resume-tech-pill">Python, OpenCV, OpenCV DNN, TensorFlow, NumPy, Deep Learning, Computer Vision</span>
                </div>
                <ul className="resume-bullet-list">
                  <li>Built a real-time system for face, age, and gender detection using webcam and images.</li>
                  <li>Implemented image preprocessing and deep-learning inference with OpenCV DNN and TensorFlow models.</li>
                  <li>Optimized frame processing for fast real-time predictions and visualization.</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section className="resume-section">
              <h2 className="resume-sec-heading">
                <GraduationCap size={15} className="resume-sec-icon" /> Education
              </h2>
              <div className="resume-item">
                <div className="resume-item-header">
                  <strong>B.Tech, Information Technology</strong>
                  <span className="resume-badge-score">7.69(till 4th Sem)</span>
                </div>
                <div className="resume-item-sub">
                  <span>Walchand College of Engineering, Sangli (Shivaji University)</span>
                  <span className="resume-item-date">2024 – 2028</span>
                </div>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <strong>Senior Secondary (Class XII)</strong>
                  <span className="resume-badge-score">80.17% || 98.67 || 88.32</span>
                </div>
                <div className="resume-item-sub">
                  <span>Ligadi-Patil Jr. College of Science, (Maharashtra Board) — MHT-CET & JEE Examination</span>
                  <span className="resume-item-date">2022 – 2024</span>
                </div>
              </div>
            </section>

            {/* Positions of Responsibility */}
            <section className="resume-section">
              <h2 className="resume-sec-heading">
                <Briefcase size={15} className="resume-sec-icon" /> Positions of Responsibility
              </h2>
              <div className="resume-item">
                <div className="resume-item-header">
                  <strong>Assistant Web Developer – SAIT, WCE</strong>
                  <span className="resume-item-date">2025 – 2026</span>
                </div>
                <ul className="resume-bullet-list">
                  <li>Led an intra-club competitive programming event for 40+ students, promoting problem-solving and coding skills.</li>
                  <li>Organized and delivered a technical session on AWS Cloud Services, introducing cloud fundamentals and real-world applications.</li>
                </ul>
              </div>
            </section>

            {/* Certifications & Achievements */}
            <section className="resume-section">
              <h2 className="resume-sec-heading">
                <Trophy size={15} className="resume-sec-icon" /> Certifications & Achievements
              </h2>
              <ul className="resume-bullet-list">
                <li>• CodeChef - 2* Rating Problem Solver</li>
                <li>• Leetcode – Problem Solver</li>
                <li>• Linux Fundamentals - Red Hat</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
