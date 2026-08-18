import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import ContactForm from '../components/ContactForm'
import projects from '../data/projects.json'
import '../styles/pages/home.scss'

const featuredSkills = ['React', 'JavaScript', 'PHP', 'Bases de données', 'Node.js']

const Home = () => {
  const featuredProjects = projects.slice(0, 3)

  return (
    <main className="home">

      {/* --- HERO --- */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <img
            src="/photo-lucas.png"
            alt="Photo de Lucas"
            className="profile-photo"
          />
          <h1>Lucas</h1>
          <p>Développeur web en formation, je conçois des interfaces claires et modernes.</p>

          <div className="hero-buttons">
            <a href="/CV-Simon-Lucas.pdf" download className="btn btn-primary">
              Télécharger mon CV
            </a>
            <Link to="/skills" className="btn btn-outline">
              En savoir plus sur moi
            </Link>
          </div>
        </div>
      </section>

      {/* --- COMPÉTENCES --- */}
      <section className="skills-section">
        <h2>Compétences</h2>

        <div className="skills-grid">
          {featuredSkills.map((skill) => (
            <div key={skill} className="skill-tile">
              {skill}
            </div>
          ))}
        </div>

        <Link to="/skills" className="cta-btn">Voir toutes mes compétences</Link>
      </section>

      {/* --- PROJETS --- */}
      <section className="projects-section">
        <h2>Projets</h2>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <Link to="/projects" className="cta-btn">Voir tous mes projets</Link>
      </section>

      {/* --- CONTACT --- */}
      <section className="contact-section">
        <h2>Contact</h2>
        <ContactForm />
      </section>

    </main>
  )
}

export default Home