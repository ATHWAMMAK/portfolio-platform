function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />

      <div className="project-content">
        <span className="project-category">{project.category}</span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="technology-list">
          {project.technologies.map((technology, index) => (
            <span key={`${technology}-${index}`}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

