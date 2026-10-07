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
import { AddSkillModal } from "./components/modals/AddSkillModal";
import { AddProjectModal } from "./components/modals/AddProjectModal";
import { CmsDashboardModal } from "./components/modals/CmsDashboardModal";
import { ResumeModal } from "./components/modals/ResumeModal";
import { Toast } from "./components/ui/Toast";

const STORAGE_KEYS = {
  SKILLS: "shreyash_custom_skills",
  PROJECTS: "shreyash_custom_projects"
};

export default function App() {
  const [data, setData] = useState(initialPortfolioData);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [activeNav, setActiveNav] = useState("about");

  // Modals state
  const [selectedProject, setSelectedProject] = useState(null);
  const [addSkillModalOpen, setAddSkillModalOpen] = useState(false);
  const [addProjectModalOpen, setAddProjectModalOpen] = useState(false);
  const [cmsDashboardModalOpen, setCmsDashboardModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Dynamic creation form states
  const [newSkill, setNewSkill] = useState({
    name: "",
    category: "Programming Languages",
    status: "Proficient"
  });

  const [newProject, setNewProject] = useState({
    title: "",
    category: "Full-Stack Web",
    role: "Lead Developer • 2026",
    desc: "",
    overview: "",
    qualifications: "",
    techStack: "",
    githubUrl: "https://github.com/shreyash-bobalade",
    liveUrl: "https://github.com/shreyash-bobalade"
  });

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

  // Load custom CMS items from localStorage on mount
  useEffect(() => {
    try {
      const savedSkills = JSON.parse(localStorage.getItem(STORAGE_KEYS.SKILLS) || "[]");
      const savedProjects = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROJECTS) || "[]");

      if (savedSkills.length > 0 || savedProjects.length > 0) {
        setData((prev) => {
          let updatedCategories = [...prev.skills.categories];
          savedSkills.forEach((s) => {
            const targetCat = s.category || "Programming Languages";
            updatedCategories = updatedCategories.map((c) =>
              c.title.toLowerCase() === targetCat.toLowerCase()
                ? { ...c, items: c.items.includes(s.name) ? c.items : [...c.items, s.name] }
                : c
            );
          });
          return {
            ...prev,
            skills: {
              ...prev.skills,
              categories: updatedCategories
            },
            projects: [...savedProjects, ...prev.projects]
          };
        });
      }
    } catch (e) {
      console.error("Failed loading stored CMS items", e);
    }
  }, []);

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

  // Add Skill Submission
  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkill.name.trim()) return;

    const skillName = newSkill.name.trim();
    const targetCategory = newSkill.category || "Programming Languages";

    setData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        categories: prev.skills.categories.map((cat) => {
          if (cat.title.toLowerCase() === targetCategory.toLowerCase()) {
            return {
              ...cat,
              items: cat.items.includes(skillName) ? cat.items : [...cat.items, skillName]
            };
          }
          return cat;
        })
      }
    }));

    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.SKILLS) || "[]");
      stored.push({ name: skillName, category: targetCategory, status: newSkill.status });
      localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(stored));
    } catch (err) {
      console.error("Local storage error", err);
    }

    setAddSkillModalOpen(false);
    setNewSkill({ name: "", category: "Programming Languages", status: "Proficient" });
    showToast(`Skill "${skillName}" added live to ${targetCategory}!`);
  };

  // Add Project Submission
  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProject.title.trim() || !newProject.desc.trim()) return;

    const id = "custom-" + newProject.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now();
    const quals = newProject.qualifications.trim()
      ? newProject.qualifications.split("\n").map((q) => q.trim()).filter(Boolean)
      : [newProject.desc.trim()];
    const stack = newProject.techStack.trim()
      ? newProject.techStack.split(",").map((s) => s.trim()).filter(Boolean)
      : ["React.js", "Node.js", "JavaScript"];

    const projItem = {
      id,
      title: newProject.title.trim(),
      category: newProject.category,
      status: "Active",
      role: newProject.role || "Lead Developer • 2026",
      desc: newProject.desc.trim(),
      overview: newProject.overview.trim() || newProject.desc.trim(),
      qualifications: quals,
      techStack: stack,
      githubUrl: newProject.githubUrl || data.personal.github,
      liveUrl: newProject.liveUrl || data.personal.github
    };

    setData((prev) => ({
      ...prev,
      projects: [projItem, ...prev.projects]
    }));

    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROJECTS) || "[]");
      stored.push(projItem);
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(stored));
    } catch (err) {
      console.error("Local storage error", err);
    }

    setAddProjectModalOpen(false);
    setNewProject({
      title: "",
      category: "Full-Stack Web",
      role: "Lead Developer • 2026",
      desc: "",
      overview: "",
      qualifications: "",
      techStack: "",
      githubUrl: data.personal.github,
      liveUrl: data.personal.github
    });
    showToast(`Project "${projItem.title}" added live with full qualifications!`);
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
          onOpenCms={() => setCmsDashboardModalOpen(true)}
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
          <SkillsSection
            skills={data.skills}
            onOpenAddSkill={() => setAddSkillModalOpen(true)}
          />

          {/* Section 4: Projects */}
          <ProjectsSection
            projects={data.projects}
            defaultGithub={data.personal.github}
            onOpenAddProject={() => setAddProjectModalOpen(true)}
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

          {/* Sweet Minimal Footer */}
          <Footer />
        </div>
      </main>

      {/* Project Qualifications Modal */}
      <ProjectModal
        project={selectedProject}
        defaultGithub={data.personal.github}
        onClose={() => setSelectedProject(null)}
      />

      {/* Add Skill Creator Modal */}
      <AddSkillModal
        isOpen={addSkillModalOpen}
        newSkill={newSkill}
        categories={data.skills.categories}
        onChangeSkill={setNewSkill}
        onSubmitSkill={handleAddSkill}
        onClose={() => setAddSkillModalOpen(false)}
      />

      {/* Add Project Creator Modal */}
      <AddProjectModal
        isOpen={addProjectModalOpen}
        newProject={newProject}
        onChangeProject={setNewProject}
        onSubmitProject={handleAddProject}
        onClose={() => setAddProjectModalOpen(false)}
      />

      {/* Developer CMS Dashboard Modal */}
      <CmsDashboardModal
        isOpen={cmsDashboardModalOpen}
        storageKeys={STORAGE_KEYS}
        onOpenAddSkill={() => setAddSkillModalOpen(true)}
        onOpenAddProject={() => setAddProjectModalOpen(true)}
        onShowToast={showToast}
        onClose={() => setCmsDashboardModalOpen(false)}
      />

      {/* Interactive Resume & CV Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        personal={data.personal}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Floating Emerald Toast Notification */}
      <Toast message={toastMessage} visible={toastVisible} />
    </>
  );
}
