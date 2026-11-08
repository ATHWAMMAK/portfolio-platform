import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <div className="project-grid">
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
      ) : (
        <p className="no-projects">
          No projects found. Try another search.
        </p>
      )}
    </div>
  );
}

export default ProjectList;
