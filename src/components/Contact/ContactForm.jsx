import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const ContactForm = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000'

      const response = await fetch(`${baseUrl}/api/form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()
      if (!response.ok || !result.ok) {
        const message = Array.isArray(result.errors) ? result.errors.join('\n') : (result.message || 'Submission failed')
        throw new Error(message)
      }

      alert('Thank you for your message! We will get back to you soon.')
      setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' })
    } catch (err) {
      alert(`Error: ${err.message || 'Unable to submit form'}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8" data-aos="fade-right" id="contact-form">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('contactForm.title')}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">{t('contactForm.labels.fullName')}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none transition-colors"
            placeholder={t('contactForm.placeholders.fullName')}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">{t('contactForm.labels.companyNameOptional')}</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none transition-colors"
            placeholder={t('contactForm.placeholders.company')}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">{t('contactForm.labels.email')}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none transition-colors"
            placeholder={t('contactForm.placeholders.email')}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">{t('contactForm.labels.phone')}</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none transition-colors"
            placeholder={t('contactForm.placeholders.phone')}
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">{t('contactForm.labels.serviceType')}</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none transition-colors bg-white"
          >
            <option value="" disabled>{t('contactForm.options.selectService')}</option>
            <option value="marketing">{t('contactForm.options.marketing')}</option>
            <option value="security">{t('contactForm.options.security')}</option>
            <option value="both">{t('contactForm.options.both')}</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">{t('contactForm.labels.messageDetails')}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none transition-colors resize-none"
            placeholder={t('contactForm.placeholders.message')}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-dark text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t('contactForm.submit.sending') : t('contactForm.submit.requestConsultation')}
        </button>
      </form>
    </div>
  )
}

export default ContactForm

