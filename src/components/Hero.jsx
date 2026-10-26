import { ArrowDownRight, ArrowUpRight, Code2 } from "lucide-react";

export default function Hero({ profile }) {
  return (
    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-content">
        <p className="availability"><span className="status-dot" /> Software developer · Open to opportunities</p>
        <h1 id="hero-title">
          Building software<br />with <span className="text-lime">purpose.</span>
        </h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="button-row">
          <a className="button button-primary" href="#projects">
            Explore projects <ArrowDownRight size={17} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#contact">
            Get in touch <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          {profile.resumeUrl ? (
            <a className="button button-secondary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Resume <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ) : null}
        </div>
        <div className="hero-meta" aria-label="Primary technologies">
          <span><Code2 size={15} aria-hidden="true" /> Java · C++ · REST APIs</span>
          <span>React · Spring Boot</span>
          <span>Linux · Git · CMake</span>
        </div>
      </div>
    </section>
  );
}
