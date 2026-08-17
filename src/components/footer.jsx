import { Link } from 'react-router-dom'
import '../styles/components/footer.scss'

const Footer = () => (
  <footer>
    <div className="footer-content">
      <article>
        <h2>Lucas</h2>
        <p>Développeur web & web mobile</p>
      </article>

      <article>
        <h2>Navigation</h2>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/projects">Projets</Link></li>
          <li><Link to="/skills">Compétences</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </article>

      <article>
        <h2>Liens</h2>
        <ul>
          <li><a href="https://github.com/Shinemi" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </article>
    </div>

    <p className="copyright">© {new Date().getFullYear()} Lucas. Tous droits réservés.</p>
  </footer>
)

export default Footer