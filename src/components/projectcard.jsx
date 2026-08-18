import Carousel from './carousel'
import '../styles/components/projectcard.scss'

const ProjectCard = ({ project }) => {
  const targetUrl = project.link || project.repo

  return (
    <div className="project-card">
      <Carousel images={project.images} altText={project.title} />

      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="badges">
          {project.technologies.map((tech) => (
            <span key={tech} className="badge">{tech}</span>
          ))}
        </div>

        <a
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="details-link"
        >
          Voir en détail →
        </a>
      </div>
    </div>
  )
}

export default ProjectCard