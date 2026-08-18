import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import '../styles/pages/contact.scss'

const Contact = () => {
  return (
    <main className="contact-page">
      <h1>Contact</h1>
      <p className="intro">Une question, une proposition ? N'hésite pas à me contacter.</p>

      <div className="contact-layout">
        <div className="contact-info">
          <div className="info-item">
            <MapPin size={20} />
            <p>Garéoult (Mobile à Wambrechie), France</p>
          </div>
          <div className="info-item">
            <Phone size={20} />
            <p>06 24 28 05 28</p>
          </div>
          <div className="info-item">
            <Mail size={20} />
            <p>simon.lucas.83136@gmail.com</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  )
}

export default Contact