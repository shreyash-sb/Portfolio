import { useEffect, useState } from "react";

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="section-header">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function App() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [typedRole, setTypedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [formState, setFormState] = useState({
    status: "idle",
    message: ""
  });

  useEffect(() => {
    async function loadPortfolio() {
      try {
        const response = await fetch("/api/portfolio");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to load portfolio data.");
        }

        setPortfolio(data);
        document.title = `${data.meta.brand} | ${data.meta.role}`;
      } catch (loadError) {
        setError(loadError.message);
      } finally {
        setLoading(false);
      }
    }

    loadPortfolio();
  }, []);

  useEffect(() => {
    if (!portfolio?.hero?.roles?.length) {
      return undefined;
    }

    const currentRole = portfolio.hero.roles[roleIndex];
    const shouldPause = !isDeleting && charIndex === currentRole.length;
    const shouldSwitch = isDeleting && charIndex === 0;

    const timeout = window.setTimeout(
      () => {
        if (shouldPause) {
          setIsDeleting(true);
          return;
        }

        if (shouldSwitch) {
          setIsDeleting(false);
          setRoleIndex((currentIndex) => (currentIndex + 1) % portfolio.hero.roles.length);
          return;
        }

        setCharIndex((current) => current + (isDeleting ? -1 : 1));
      },
      shouldPause ? 1100 : isDeleting ? 45 : 80
    );

    setTypedRole(currentRole.slice(0, charIndex));

    return () => window.clearTimeout(timeout);
  }, [charIndex, isDeleting, portfolio, roleIndex]);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    setFormState({
      status: "loading",
      message: "Sending message..."
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      event.currentTarget.reset();
      setFormState({
        status: "success",
        message: result.message
      });
    } catch (submitError) {
      setFormState({
        status: "error",
        message: submitError.message
      });
    }
  }

  if (loading) {
    return (
      <div className="state-screen">
        <div className="state-card">
          <span className="section-eyebrow">Loading</span>
          <h1>Building portfolio data...</h1>
        </div>
      </div>
    );
  }

  if (error || !portfolio) {
    return (
      <div className="state-screen">
        <div className="state-card">
          <span className="section-eyebrow">Error</span>
          <h1>{error || "Portfolio data could not be loaded."}</h1>
        </div>
      </div>
    );
  }

  const heroCode = Array.isArray(portfolio.hero.code)
    ? portfolio.hero.code.join("\n")
    : String(portfolio.hero.code || "");

  return (
    <div className="app-shell">
      <div className="bg-glow bg-glow-one" />
      <div className="bg-glow bg-glow-two" />

      <header className="topbar">
        <a href="#home" className="brand">
          <span className="brand-dot" />
          <div>
            <strong>{portfolio.meta.brand}</strong>
            <span>{portfolio.meta.role}</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact" className="nav-cta">
            Contact
          </a>
        </nav>
      </header>

      <main className="page">
        <section id="home" className="hero-grid">
          <div className="hero-copy card">
            <span className="section-eyebrow">Student Portfolio</span>
            <h1>
              Hey, I&apos;m <span>{portfolio.hero.name}</span>
            </h1>
            <div className="typing-line">
              <span className="typing-prefix">I am a </span>
              <span className="typing-role">{typedRole || portfolio.hero.roles[0]}</span>
            </div>
            <p className="hero-text">{portfolio.hero.headline}</p>
            <p className="hero-subtext">{portfolio.hero.subtext}</p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                View Projects
              </a>
              <a href="#contact" className="button button-secondary">
                Contact Me
              </a>
            </div>

            <div className="badge-row">
              {portfolio.hero.badges.map((badge) => (
                <span key={badge} className="badge">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-side">
            <div className="hero-profile card">
              <div className="avatar-ring">
                <div className="avatar-core">AS</div>
              </div>
              <div className="hero-meta">
                <h3>{portfolio.hero.availability}</h3>
                <p>{portfolio.hero.education}</p>
                <p>{portfolio.hero.location}</p>
              </div>
            </div>

            <div className="terminal-card card">
              <div className="terminal-dots">
                <span />
                <span />
                <span />
              </div>
              <pre>
                <code>{heroCode}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          {portfolio.stats.map((stat) => (
            <article key={stat.label} className="stat-card card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <section id="about" className="section-block">
          <SectionHeader
            eyebrow="About Me"
            title="Student developer focused on building useful products and improving problem-solving skills."
            text={portfolio.about.description}
          />

          <div className="about-grid">
            <article className="card about-main">
              <p>{portfolio.about.intro}</p>
              <div className="coursework-wrap">
                <h3>Relevant Coursework</h3>
                <div className="chip-grid">
                  {portfolio.about.coursework.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <article className="card quick-facts">
              <h3>Quick Snapshot</h3>
              <div className="facts-list">
                {portfolio.about.quickFacts.map((fact) => (
                  <div key={fact.label} className="fact-row">
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className="section-block">
          <SectionHeader
            eyebrow="Tech Stack"
            title="Skills usually expected in an engineering student portfolio."
            text="Clear grouping, strong readability, and enough detail without turning the page into a wall of icons."
          />

          <div className="skills-grid">
            {portfolio.skills.map((group) => (
              <article key={group.title} className="card skill-card">
                <h3>{group.title}</h3>
                <div className="chip-grid">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-block">
          <SectionHeader
            eyebrow="Projects"
            title="Practical student projects with full-stack and problem-solving depth."
            text="A focused set of projects covering full-stack development, collaboration, and student workflow problems."
          />

          <div className="projects-grid">
            {portfolio.projects.map((project) => (
              <article key={project.name} className="card project-card">
                <div className="project-top">
                  <div>
                    <span className="project-type">{project.type}</span>
                    <h3>{project.name}</h3>
                  </div>
                  <span className="project-year">{project.year}</span>
                </div>

                <p className="project-summary">{project.summary}</p>

                <ul className="project-points">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>

                <div className="chip-grid">
                  {project.stack.map((item) => (
                    <span key={item} className="chip chip-accent">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="section-block">
          <SectionHeader
            eyebrow="Journey"
            title="Education, experience, and achievements in one place."
            text="This follows the normal portfolio flow recruiters expect from engineering students."
          />

          <div className="journey-grid">
            <article className="card timeline-card">
              <h3>Education</h3>
              <div className="timeline-list">
                {portfolio.education.map((item) => (
                  <div key={item.title} className="timeline-item">
                    <div className="timeline-row">
                      <strong>{item.title}</strong>
                      <span>{item.period}</span>
                    </div>
                    <p>{item.subtitle}</p>
                    <small>{item.detail}</small>
                  </div>
                ))}
              </div>
            </article>

            <article className="card timeline-card">
              <h3>Experience and Leadership</h3>
              <div className="timeline-list">
                {portfolio.experience.map((item) => (
                  <div key={item.title} className="timeline-item">
                    <div className="timeline-row">
                      <strong>{item.title}</strong>
                      <span>{item.period}</span>
                    </div>
                    <p>{item.subtitle}</p>
                    <small>{item.detail}</small>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="achievement-grid">
            {portfolio.achievements.map((item) => (
              <article key={item} className="card achievement-card">
                <span className="achievement-mark">+</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <SectionHeader
            eyebrow="Coding Profiles"
            title="Coding profiles and practice platforms."
            text="A simple overview of problem-solving activity and project work."
          />

          <div className="profiles-grid">
            {portfolio.profiles.map((profile) => (
              <article key={profile.platform} className="card profile-card">
                <div className="profile-head">
                  <h3>{profile.platform}</h3>
                  <span>{profile.handle}</span>
                </div>
                <p>{profile.summary}</p>
                <ul className="profile-list">
                  {profile.stats.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-block">
          <SectionHeader
            eyebrow="Contact"
            title="Get in touch for internships, freelance work, or collaboration."
            text={portfolio.contact.note}
          />

          <div className="contact-grid">
            <article className="card contact-info">
              <h3>Let&apos;s connect</h3>
              <div className="facts-list">
                <div className="fact-row">
                  <span>Email</span>
                  <strong>{portfolio.contact.email}</strong>
                </div>
                <div className="fact-row">
                  <span>Location</span>
                  <strong>{portfolio.contact.location}</strong>
                </div>
                <div className="fact-row">
                  <span>Status</span>
                  <strong>{portfolio.contact.availability}</strong>
                </div>
              </div>
            </article>

            <form className="card contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" required />
              </label>

              <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>

              <label>
                <span>Reason</span>
                <select name="interest" defaultValue="" required>
                  <option value="" disabled>
                    Select a reason
                  </option>
                  {portfolio.contact.interests.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span>Message</span>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message here"
                  required
                />
              </label>

              <button type="submit" className="button button-primary">
                Send Message
              </button>

              <p className={`form-message ${formState.status}`}>{formState.message}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>{portfolio.meta.footer}</p>
      </footer>
    </div>
  );
}

export default App;
