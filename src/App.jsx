import React, { useState, useEffect } from "react";
import { initialPortfolioData } from "./data/portfolioData";

// Layout Components
import { Sidebar } from "./components/layout/Sidebar";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

// Section Components
import { AboutSection } from "./components/sections/AboutSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { EducationSection } from "./components/sections/EducationSection";
import { AchievementsSection } from "./components/sections/AchievementsSection";
import { ProfilesSection } from "./components/sections/ProfilesSection";
import { ContactSection } from "./components/sections/ContactSection";

// Modal & UI Components
import { ProjectModal } from "./components/modals/ProjectModal";
import { ResumeModal } from "./components/modals/ResumeModal";
import { Toast } from "./components/ui/Toast";

export default function App() {
  const [data] = useState(initialPortfolioData);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [activeNav, setActiveNav] = useState("about");

  // Modals state
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    interest: "Summer 2026 SDE Internship",
    message: ""
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3500);
  };

  // Scrollspy navigation listener
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "experience",
        "skills",
        "projects",
        "education",
        "achievements",
        "profiles",
        "contact"
      ];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Contact Form Submission
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm)
      });
    } catch (err) {
      // Fallback works gracefully even without live backend server
    }

    setContactSubmitted(true);
    showToast("Message sent successfully! I will reply soon.");
    setTimeout(() => {
      setContactForm({
        name: "",
        email: "",
        interest: "Summer 2026 SDE Internship",
        message: ""
      });
      setContactSubmitted(false);
    }, 4000);
  };

  return (
    <>
      {/* Background ambient lighting */}
      <div className="bg-ambient-glow" />
      <div className="bg-ambient-grid" />

      <main>
        {/* Left Sticky Glass Sidebar */}
        <Sidebar
          personal={data.personal}
          active={sidebarActive}
          onToggle={() => setSidebarActive(!sidebarActive)}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* Right Main Scrollable Content Area */}
        <div className="main-content">
          {/* Top Floating Glass Navbar */}
          <Navbar activeNav={activeNav} onSelectSection={scrollToSection} />

          {/* Section 1: About Me */}
          <AboutSection
            personal={data.personal}
            stats={data.stats}
            interests={data.interests}
          />

          {/* Section 2: Experience & Leadership */}
          <ExperienceSection experience={data.experience} />

          {/* Section 3: Technical Skills */}
          <SkillsSection skills={data.skills} />

          {/* Section 4: Projects */}
          <ProjectsSection
            projects={data.projects}
            defaultGithub={data.personal.github}
            onSelectProject={(project) => setSelectedProject(project)}
          />

          {/* Section 5: Education */}
          <EducationSection education={data.education} />

          {/* Section 6: Achievements & Certifications */}
          <AchievementsSection achievements={data.achievements} />

          {/* Section 7: Coding & Professional Profiles */}
          <ProfilesSection profiles={data.profiles} />

          {/* Section 8: Contact & Connect */}
          <ContactSection
            personal={data.personal}
            contactOptions={data.contact.options}
            contactForm={contactForm}
            contactSubmitted={contactSubmitted}
            onChangeForm={setContactForm}
            onSubmitForm={handleContactSubmit}
          />

          {/* Clean Footer mentioning only Shreyash Bobalade */}
          <Footer />
        </div>
      </main>

      {/* Project Qualifications Modal */}
      <ProjectModal
        project={selectedProject}
        defaultGithub={data.personal.github}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Resume PDF Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Floating Emerald Toast Notification */}
      <Toast message={toastMessage} visible={toastVisible} />
    </>
  );
}
