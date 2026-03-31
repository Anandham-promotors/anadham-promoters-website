import { NavLink } from 'react-router-dom'
import { projects, services, trustPoints } from '../data/siteData'

function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container">
          <p className="eyebrow">25 Years of Building Coimbatore, Plot by Plot</p>
          <h1>
            Residential plots, lands & gated communities set for sale in the city&apos;s
            fastest-growing areas
          </h1>
          <p className="hero-copy">
            We blend legacy land expertise with data-backed location strategy, clear legal
            processes, and investor-first support.
          </p>
          <NavLink className="btn-primary" to="/contact">
            Schedule a Site Visit
          </NavLink>
        </div>
      </section>

      <section className="trust-section">
        <div className="container trust-grid">
          {trustPoints.map((point) => (
            <article className="trust-card" key={point}>
              <h3>{point}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <p className="section-kicker">Coimbatore&apos;s Projects</p>
          <h2>Residential Plots, Lands & Villa</h2>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-highlight" key={project.title}>
                <span className="badge">{project.status}</span>
                <h3>{project.title}</h3>
                <p>{project.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="section-kicker">About Our Company</p>
          <h2>We Show the Growth</h2>
          <p className="about-copy">
            Sree Pooja Promoters is Coimbatore&apos;s first data-led land promoter. We blend two
            generations of experience with transparent documentation, infrastructure foresight, and
            investor-level land curation.
          </p>
          <div className="stats-grid">
            <div>
              <strong>5</strong>
              <span>In-Progress Sites</span>
            </div>
            <div>
              <strong>214</strong>
              <span>Projects Completed</span>
            </div>
            <div>
              <strong>135</strong>
              <span>Business Partners</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-kicker">What We Offer</p>
          <h2>Plots, Villas, Land, and Gated Communities</h2>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
