import { useState } from 'react'
import '../styles/components/contactForm.scss'

const CONTACT_EMAIL = 'simon.lucas.83136@gmail.com'

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Message de ${formData.name} - Portfolio`)
    const body = encodeURIComponent(
      `Nom : ${formData.name}\nEmail : ${formData.email}\n\n${formData.message}`
    )

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${subject}&body=${body}`

    window.open(gmailUrl, '_blank')
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

      <button type="submit">Envoyer</button>
    </form>
  )
}

export default ContactForm