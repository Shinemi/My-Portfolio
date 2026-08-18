import { Link } from 'react-router-dom'
import Collapse from '../components/collapse'
import ProjectCard from '../components/projectcard'
import ContactForm from '../components/contactform'
import skills from '../data/skills.json'
import projects from '../data/projects.json'
import '../styles/pages/home.scss'

const Home = () => {
  const featuredProjects = projects.slice(0, 3)

  return (
    <main className="home">

    {/* --- HERO --- */}
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <img
          src="/images/profile.jpg"
          alt="Photo de Lucas"
          className="profile-photo"
        />
        <h1>Lucas</h1>
        <p>Développeur web en formation, je conçois des interfaces claires et modernes.</p>
      </div>
    </section>

    {/* --- COMPÉTENCES --- */}
    <section className="skills-section">
      <h2>Compétences</h2>

      <div className="skills-list">
        {skills.map((group) => (
          <Collapse
            key={group.category}
            title={group.category}
            preview={group.skills.slice(0, 3)}
          >
            <div className="badges">
              {group.skills.map((skill) => (
                <span key={skill} className="badge">{skill}</span>
              ))}
            </div>
          </Collapse>
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