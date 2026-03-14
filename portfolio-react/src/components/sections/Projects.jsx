import projects from '../../data/projects';

function Projects() {
  return (
    <section id="projects">
      <h2>Projets</h2>
      <div>
        {projects.map((project) => (
          <article key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
