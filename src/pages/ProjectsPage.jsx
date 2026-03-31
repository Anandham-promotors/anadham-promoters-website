import { projects } from '../data/siteData'

function ProjectsPage() {
  return (
    <main className="section">
      <div className="container page-hero">
        <p className="section-kicker">Ongoing Projects</p>
        <h1>Curated Layouts Across Coimbatore Growth Zones</h1>
      </div>
      <div className="container project-list">
        {projects.map((project) => (
          <article className="project-highlight" key={project.title}>
            <span className="badge">{project.status}</span>
            <h3>{project.title}</h3>
            <p>{project.price}</p>
          </article>
        ))}
      </div>
    </main>
  )
}

export default ProjectsPage
