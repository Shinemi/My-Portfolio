import Collapse from '../components/collapse'
import skills from '../data/skills.json'
import '../styles/pages/skills.scss'

const Skills = () => {
  return (
    <main className="skills-page">
      <h1>Compétences</h1>
      <p className="intro">Un aperçu détaillé des technologies que je maîtrise, classées par domaine.</p>

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
    </main>
  )
}

export default Skills