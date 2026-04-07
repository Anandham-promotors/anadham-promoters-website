import { NavLink } from 'react-router-dom'
import { projects, services, trustPoints } from '../data/siteData'
import FeatureCard from '../components/FeatureCard';
import PropertyCard from '../components/PropertyCard';
import AboutCompanySection from '../components/AboutCompanySection';
import promoVideo from '../assets/promo.mp4';
import approvedIcon from '../assets/approve.avif';
import clearDocument from '../assets/clear_document.avif';
import growthIcon from '../assets/growth.avif';
import bankLoanIcon from '../assets/bank_approved.avif';
import readyPlotIcon from '../assets/ready_plot.avif';
import backedDataIcon from '../assets/backed_data.avif';
import { FaArrowRight } from 'react-icons/fa';
import plots1 from '../assets/plots-1.jpg';
import plots2 from '../assets/plots-2.jpg';
import plots3 from '../assets/plots-3.webp';
import plots4 from '../assets/plots-4.jpeg';
import priceCompare from '../assets/price_compare.avif';

function HomePage() {
  return (
    <main>
      <section className="hero-section pb-20">
        <div className="flex flex-col gap-6">

          {/* 🎥 Video (Top) */}
          <div className="w-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[400px] md:h-[650px] object-cover shadow-lg"
            >
              <source src={promoVideo} type="video/mp4" />
            </video>
          </div>

          {/* 🧾 Content (Below Video) */}
          <div className="w-full">
            <p className="text-4xl text-center text-[#D78C3D] mt-8 mb-5">
              25 Years of Building Chennai, Plot by Plot
            </p>

            <p className="text-xl text-center mb-32">
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

      <section className='pb-12'>
        <div className='flex justify-between items-center section-3 py-24 px-16'>
          <div>
            <p className='font-bold text-base pb-5'>CHENNAI'S PROJECTS</p>
            <p className='text-4xl'>Residential Plots, Lands & Villa</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer group">
            <FaArrowRight className="icon-color text-xl transition-transform duration-300 group-hover:translate-x-1" />
            <p className='text-black'>Ongoing project</p>
          </div>
        </div>
      </section>

      <section>
        <div className="px-16 flex gap-6">
          
          <PropertyCard
            image={plots1}
            location="Manimangalam, Chennai"
            price="Plots for sale starting from Rs 13.5 Lakhs"
          />

          <PropertyCard
            image={plots2}
            location="Chengalpattu, Chennai"
            price="Plots for sale starting from Rs 9 Lakhs"
          />

          <PropertyCard
            image={plots3}
            location="Mudichur, Chennai"
            price="Plots for sale starting from Rs 7 Lakhs"
          />

          <PropertyCard
            image={plots4}
            location="Tambaram, Chennai"
            price="Plots for sale starting from Rs 15 Lakhs"
          />

        </div>
      </section>

      {/* <section>
        <div className='py-28 flex'>
        <AboutCompanySection />
        <div className='px-14' >
          <img src={priceCompare} />
        </div>
        </div>
      </section> */}
      <section>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <AboutCompanySection />

          <div className="px-6 lg:px-14 mt-8 lg:mt-0 lg:w-1/2">
            <img src={priceCompare} className="w-full h-auto object-cover" />
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
