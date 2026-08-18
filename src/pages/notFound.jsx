import { Link } from 'react-router-dom'
import '../styles/pages/notfound.scss'

const NotFound = () => {
  return (
    <main className="notfound-page">
      <p className="notfound-code gradient-text">404</p>
      <h1>Page introuvable</h1>
      <p className="notfound-text">
        La page que tu cherches n'existe pas ou a été déplacée.
      </p>
      <Link to="/" className="btn-primary">Retour à l'accueil</Link>
    </main>
  )
}

export default NotFound