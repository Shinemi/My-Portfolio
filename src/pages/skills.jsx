import Collapse from '../components/collapse'
import skills from '../data/skills.json'
import timeline from '../data/timeline.json'
import '../styles/pages/skills.scss'

const Skills = () => {
  return (
    <main className="skills-page">
      <h1>Compétences</h1>
      <p className="intro">Un aperçu détaillé des technologies que je maîtrise, classées par domaine.</p>

      <div className="skills-list">
        {skills.map((group) => (
          <Collapse key={group.category} title={group.category}>
            <div className="badges">
              {group.skills.map((skill) => (
                <span key={skill} className="badge">{skill}</span>
              ))}
            </div>
          </Collapse>
        ))}
      </div>

      {/* --- PARCOURS --- */}
      <section className="timeline-section">
        <h2>Mon parcours</h2>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className={`timeline-item ${item.type}`}>
              <span className="timeline-tag">
                {item.type === 'formation' ? 'Formation' : 'Expérience'}
              </span>
              <h3>{item.title}</h3>
              <p className="timeline-meta">{item.place} — {item.period}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Skills