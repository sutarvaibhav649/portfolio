import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";
import { profile, projects, skillGroups, principles } from "./data/portfolio.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import Footer from "./components/Footer.jsx";

function AboutSection() {
  return (
    <section className="section-shell" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          number="01"
          eyebrow="About"
          title={<>Engineer by mindset.<br />Builder by practice.</>}
          description="I enjoy understanding how systems work under the hood — from domain models and API boundaries to maintainable code and practical trade-offs."
        />
        <div className="about-grid">
          <div className="surface about-copy">
            <p>
              I’m a computer science graduate building a career in software development,
              with a foundation in Java and C++ and a growing focus on backend engineering.
            </p>
            <p className="text-muted">
              My approach is to keep responsibilities clear, make decisions deliberately,
              and build projects that are understandable, testable, and useful — not just
              demos that look good.
            </p>
          </div>
          <div className="code-window" aria-label="Code-inspired profile illustration">
            <div className="window-chrome" aria-hidden="true"><i /><i /><i /><span>developer.js</span></div>
            <pre><code><span className="syntax-purple">const</span> developer = {"{"}{"\n"}
              {"  "}name: <span className="syntax-green">"Vaibhav"</span>,{"\n"}
              {"  "}focus: <span className="syntax-green">"backend engineering"</span>,{"\n"}
              {"  "}languages: [<span className="syntax-green">"Java"</span>, <span className="syntax-green">"C++"</span>],{"\n"}
              {"  "}principle: <span className="syntax-green">"keep it maintainable"</span>{"\n"}
              {"}"};</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="section-shell" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="Selected work"
          title="Projects, not just claims."
          description="A selection of projects across backend development, full-stack application design, and AI-assisted workflows. Repository and demo links are intentionally omitted until verified."
        />
        <div className="project-grid">
          {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="section-shell" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          number="03"
          eyebrow="Toolkit"
          title="Tools I work with."
          description="Grouped by how they fit into the development workflow, rather than arbitrary percentage bars."
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="section-shell" id="approach" aria-labelledby="approach-title">
      <div className="container">
        <SectionHeading number="04" eyebrow="Engineering approach" title="Good software is deliberate." />
        <div className="principles-grid">
          {principles.map((principle) => (
            <article className="principle" key={principle.title}>
              <span className="principle-mark" aria-hidden="true">↳</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const socialLinks = [
    profile.email ? { href: `mailto:${profile.email}`, label: "Email", icon: Mail } : null,
    profile.github ? { href: profile.github, label: "GitHub", icon: Github } : null,
    profile.linkedin ? { href: profile.linkedin, label: "LinkedIn", icon: Linkedin } : null,
  ].filter(Boolean);

  return (
    <section className="section-shell contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-content">
        <p className="eyebrow">05 / Contact</p>
        <h2 id="contact-title">Have a problem worth solving?</h2>
        <p>
          I'm interested in software developer and backend engineering opportunities.
          Reach out to discuss a role, a project, or an engineering problem.
        </p>
        {socialLinks.length > 0 ? (
          <div className="button-row contact-links">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a className="button button-secondary" href={href} key={label}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}>
                <Icon size={17} aria-hidden="true" /> {label}
                {!href.startsWith("mailto:") ? <ArrowUpRight size={15} aria-hidden="true" /> : null}
              </a>
            ))}
          </div>
        ) : (
          <p className="contact-setup-note">Add your professional email and profile URLs in <code>src/data/portfolio.js</code> to enable contact links.</p>
        )}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header name={profile.name} />
      <main id="main-content">
        <Hero profile={profile} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer name={profile.name} />
    </>
  );
}
