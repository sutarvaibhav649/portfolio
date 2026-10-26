import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  const hasLinks = Boolean(project.repositoryUrl || project.demoUrl);

  return (
    <article className="project-card">
      <div className="project-topline">
        <span className="project-number">PROJECT_{project.number}</span>
        <span className="project-mark" aria-hidden="true">{project.mark}</span>
      </div>
      <div className="project-category">{project.category}</div>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="tag-list" aria-label={`${project.name} technologies`}>
        {project.technologies.map((technology) => (
          <li className="tag" key={technology}>{technology}</li>
        ))}
      </ul>
      <div className="project-footer">
        <span className="project-status">{project.status}</span>
        <div className="project-links">
          {project.repositoryUrl ? (
            <a href={project.repositoryUrl} target="_blank" rel="noreferrer" aria-label={`${project.name} source code on GitHub`}>
              <Github size={16} aria-hidden="true" /> Source
            </a>
          ) : null}
          {project.demoUrl ? (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`${project.name} live demo`}>
              Demo <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : null}
          {!hasLinks ? <span className="link-pending">Links to be added</span> : null}
        </div>
      </div>
    </article>
  );
}
