import { NavLink } from 'react-router-dom'
import { projects, services, trustPoints } from '../data/siteData'
import FeatureCard from '../components/FeatureCard';
import promoVideo from '../assets/promo.mp4';
import approvedIcon from '../assets/approve.avif';
import clearDocument from '../assets/clear_document.avif';
import growthIcon from '../assets/growth.avif';
import bankLoanIcon from '../assets/bank_approved.avif';
import readyPlotIcon from '../assets/ready_plot.avif';
import backedDataIcon from '../assets/backed_data.avif';
import { FaArrowRight } from 'react-icons/fa';

function HomePage() {
  return (
    <main>
      <section className="hero-section py-12">
        <div className="container flex flex-col gap-6">

          {/* 🎥 Video (Top) */}
          <div className="w-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[300px] md:h-[450px] object-cover rounded-xl shadow-lg"
            >
              <source src={promoVideo} type="video/mp4" />
            </video>
          </div>

          {/* 🧾 Content (Below Video) */}
          <div className="w-full">
            <p className="text-4xl text-center text-gray-500 mt-8 mb-5">
              25 Years of Building Coimbatore, Plot by Plot
            </p>

            <p className="text-xl text-center mb-12">
              Residential plots, lands & gated communities set for sale in the city&apos;s
              fastest-growing areas
            </p>

            <div className='flex justify-center items-center gap-10 mb-16'>
              <FeatureCard icon={approvedIcon} title="Government Approved" />
              <FeatureCard icon={clearDocument} title="CLEAR Documentation" />
              <FeatureCard icon={growthIcon} title="Growth Potential" />
              <FeatureCard icon={bankLoanIcon} title="Bank Loan Approved" />
              <FeatureCard icon={readyPlotIcon} title="Move-In Ready plots" />
              <FeatureCard icon={backedDataIcon} title="Backed by Data" />
            </div>

            <NavLink to="/about" className='flex items-center justify-center gap-2 cursor-pointer group'>
              <FaArrowRight className="icon-color text-xl transition-transform duration-300 group-hover:translate-x-1" />
              <p className='text-xl'>About us</p>
            </NavLink>
            {/* <NavLink className="btn-primary mt-6 inline-block" to="/contact">
              Schedule a Site Visit
            </NavLink> */}
          </div>

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
