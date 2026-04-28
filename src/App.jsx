import { useEffect, useState } from "react";

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="section-header reveal">
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
  const [formState, setFormState] = useState({
    status: "idle",
    message: ""
  });
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    async function loadPortfolio() {
      try {
        const response = await fetch("/api/portfolio");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to load portfolio data.");
        }

        setPortfolio(data);
        document.title = `${data.meta.name} | ${data.meta.title}`;
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

    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % portfolio.hero.roles.length);
    }, 2000);

    return () => window.clearInterval(interval);
  }, [portfolio]);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [portfolio]);

  const heroCode = portfolio?.hero?.code ? portfolio.hero.code.join("\n") : "";

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
          <h1>Preparing portfolio...</h1>
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

  return (
    <div className="app-shell">
      <div className="glow glow-left" />
      <div className="glow glow-right" />

      <header className="topbar reveal">
        <a href="#home" className="brand">
          <span className="brand-mark" />
          <div>
            <strong>{portfolio.meta.name}</strong>
            <span>{portfolio.meta.title}</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="nav-pill">
            Contact
          </a>
        </nav>
      </header>

      <main className="page-layout">
        <section id="home" className="hero-layout">
          <div className="hero-copy card reveal">
            <span className="section-eyebrow">{portfolio.hero.eyebrow}</span>
            <h1>{portfolio.hero.headline}</h1>
            <p className="hero-role">{portfolio.hero.roles[roleIndex]}</p>
            <p className="hero-intro">{portfolio.hero.intro}</p>
            <p className="hero-summary">{portfolio.hero.summary}</p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                View Projects
              </a>
              <a href="#contact" className="button button-secondary">
                Work With Me
              </a>
            </div>

            <div className="chip-row">
              {portfolio.hero.highlights.map((highlight) => (
                <span key={highlight} className="chip">
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-side">
            <div className="profile-card card reveal">
              <div className="avatar-shell">
                <div className="avatar-core">SB</div>
              </div>
              <div className="profile-meta">
                <h3>{portfolio.meta.name}</h3>
                <p>{portfolio.hero.education}</p>
                <p>{portfolio.hero.location}</p>
              </div>
            </div>

            <div className="terminal-card card reveal">
              <div className="terminal-top">
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
            <article key={stat.label} className="stat-card card reveal">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <section id="about" className="section-block">
          <SectionHeader
            eyebrow="About"
            title={portfolio.about.title}
            text={portfolio.about.body}
          />

          <div className="about-grid">
            <article className="about-panel card reveal">
              <h3>What I bring</h3>
              <ul className="detail-list">
                {portfolio.about.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <h3>Relevant Coursework</h3>
              <div className="chip-row">
                {portfolio.about.coursework.map((item) => (
                  <span key={item} className="chip chip-soft">
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article className="facts-panel card reveal">
              <h3>Quick Facts</h3>
              <div className="facts-grid">
                {portfolio.about.factCards.map((card) => (
                  <div key={card.label} className="fact-card">
                    <span>{card.label}</span>
                    <strong>{card.value}</strong>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className="section-block">
          <SectionHeader
            eyebrow="Skills"
            title="A balanced stack across frontend, backend, and product delivery."
            text="I am comfortable building interfaces, wiring APIs, handling data flow, and improving maintainability as projects grow."
          />

          <div className="skills-grid">
            {portfolio.skills.map((group) => (
              <article key={group.title} className="skill-card card reveal">
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span key={item} className="chip chip-soft">
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
            title="Selected builds with practical full stack depth."
            text="These projects reflect a mix of frontend quality, backend workflow handling, and attention to usability."
          />

          <div className="projects-grid">
            {portfolio.projects.map((project) => (
              <article key={project.name} className="project-card card reveal">
                <div className="project-head">
                  <div>
                    <span className="project-type">{project.type}</span>
                    <h3>{project.name}</h3>
                  </div>
                  <span className="project-year">{project.year}</span>
                </div>

                <p>{project.summary}</p>

                <ul className="detail-list">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>

                <div className="chip-row">
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

        <section id="experience" className="section-block">
          <SectionHeader
            eyebrow="Experience"
            title="Internship, leadership, and academic journey."
            text="A complete portfolio needs both projects and context, so this section covers the work and learning path behind the builds."
          />

          <div className="experience-grid">
            <article className="timeline-panel card reveal">
              <h3>Experience</h3>
              <div className="timeline-list">
                {portfolio.experience.map((item) => (
                  <div key={item.title} className="timeline-item">
                    <div className="timeline-head">
                      <strong>{item.title}</strong>
                      <span>{item.period}</span>
                    </div>
                    <p>{item.org}</p>
                    <ul className="detail-list">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>

            <article className="timeline-panel card reveal">
              <h3>Education</h3>
              <div className="timeline-list">
                {portfolio.education.map((item) => (
                  <div key={item.title} className="timeline-item">
                    <div className="timeline-head">
                      <strong>{item.title}</strong>
                      <span>{item.period}</span>
                    </div>
                    <p>{item.org}</p>
                    <small>{item.detail}</small>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section-block">
          <SectionHeader
            eyebrow="Achievements"
            title="Problem solving, project execution, and consistent learning."
            text="A strong student portfolio should show both development output and the discipline behind it."
          />

          <div className="achievements-grid">
            {portfolio.achievements.map((achievement) => (
              <article key={achievement} className="achievement-card card reveal">
                <span className="achievement-mark">+</span>
                <p>{achievement}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <SectionHeader
            eyebrow="Profiles"
            title="Coding profiles and project presence."
            text="These cards keep the portfolio complete and make it easy to replace handles and links later."
          />

          <div className="profiles-grid">
            {portfolio.profiles.map((profile) => (
              <article key={profile.platform} className="profile-detail card reveal">
                <div className="profile-top">
                  <h3>{profile.platform}</h3>
                  <span>{profile.handle}</span>
                </div>
                <p>{profile.summary}</p>
                <ul className="detail-list">
                  {profile.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-block">
          <SectionHeader
            eyebrow="Contact"
            title={portfolio.contact.title}
            text={portfolio.contact.copy}
          />

          <div className="contact-grid">
            <article className="contact-info card reveal">
              <div className="fact-card">
                <span>Email</span>
                <strong>{portfolio.contact.email}</strong>
              </div>
              <div className="fact-card">
                <span>Location</span>
                <strong>{portfolio.contact.location}</strong>
              </div>
              <div className="fact-card">
                <span>Response</span>
                <strong>{portfolio.contact.availability}</strong>
              </div>
            </article>

            <form className="contact-form card reveal" onSubmit={handleSubmit}>
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
                  placeholder="Tell me about the opportunity or project"
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

      <footer className="footer reveal">
        <p>{portfolio.meta.footer}</p>
      </footer>
    </div>
  );
}

export default App;
