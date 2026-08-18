import { useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/components/contactform.scss'

const SERVICE_ID = 'service_noy3d97'
const TEMPLATE_ID = 'service_noy3d97'
const PUBLIC_KEY = 'leBI678i7FKLkyWV6'

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('sending')

        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then(() => {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
        })
        .catch(() => {
            setStatus('error')
        })
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label>
                Nom
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Email
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Message
                <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </label>

            <button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Envoi...' : 'Envoyer'}
            </button>

            {status === 'success' && <p className="form-message success">Message envoyé !</p>}
            {status === 'error' && <p className="form-message error">Une erreur est survenue, réessaie.</p>}
        </form>
    )
}

export default ContactForm