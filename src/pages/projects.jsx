import ProjectCard from '../components/projectcard'
import projects from '../data/projects.json'
import '../styles/pages/projects.scss'

const Projects = () => {
  return (
    <main className="projects-page">
      <h1>Projets</h1>
      <p className="intro">L'ensemble de mes projets, réalisés en formation ou à titre personnel.</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  )
}

export default Projects