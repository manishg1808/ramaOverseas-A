import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const CallbackModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    callbackMethod: '',
    preferredLanguage: '',
    message: ''
  })
  const [dateInputType, setDateInputType] = useState('text')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    if (isOpen) document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)
    try {
      // Always use same-origin in production builds to avoid localhost calls on Vercel.
      // During local development, use VITE_API_URL (e.g., http://localhost:4000).
      const baseUrl = import.meta.env.PROD ? '' : (import.meta.env.VITE_API_URL || 'http://localhost:4000')
      const payload = {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email || '',
        service: formData.service,
        date: formData.date || '',
        callbackMethod: formData.callbackMethod || '',
        preferredLanguage: formData.preferredLanguage || '',
        message: formData.message || ''
      }
      const res = await fetch(`${baseUrl}/api/request-callback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const result = await res.json().catch(() => ({}))
      if (!res.ok || !result.ok) {
        const message = Array.isArray(result.errors) ? result.errors.join('\n') : (result.message || 'Submission failed')
        throw new Error(message)
      }
      alert('Thanks! We will call you back shortly.')
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        callbackMethod: '',
        preferredLanguage: '',
        message: ''
      })
      onClose?.()
    } catch (err) {
      alert(`Error: ${err.message || 'Unable to submit request'}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const openWhatsApp = () => {
    const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || '++91 73100 05719').replace(/\D/g, '')
    if (!formData.fullName || !formData.phone || !formData.service) {
      alert('Please fill Full Name, Phone Number and Select Service before sending on WhatsApp.')
      return
    }

    const messageLines = [
      'Request a Callback',
      '', // blank line for readability (like your sample)
      `Name: ${formData.fullName}`,
      `Phone: ${formData.phone}`,
      formData.email ? `Email: ${formData.email}` : null,
      formData.service ? `Service: ${formData.service}` : null,
      formData.date ? `Preferred Date: ${formData.date}` : null,
      formData.callbackMethod ? `Callback Method: ${formData.callbackMethod}` : null,
      formData.preferredLanguage ? `Language: ${formData.preferredLanguage}` : null,
      formData.message ? `Message: ${formData.message}` : null
    ].filter((line) => line !== null).join('\n')

    const encoded = encodeURIComponent(messageLines)

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i.test(navigator.userAgent)
    const base = isMobile ? 'https://api.whatsapp.com' : 'https://web.whatsapp.com'
    const url = `${base}/send?phone=${whatsappNumber}&text=${encoded}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="absolute inset-0 flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h3 className="text-xl font-bold text-gray-900">{t('callbackModal.title')}</h3>
            <button onClick={onClose} aria-label="Close" className="p-2 rounded-lg hover:bg-gray-100 text-gray-900">
              ✕
            </button>
          </div>
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">{t('callbackModal.labels.fullName')}<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none text-gray-900 placeholder-gray-400"
                  placeholder={t('callbackModal.placeholders.fullName')}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">{t('callbackModal.labels.phone')}<span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none text-gray-900 placeholder-gray-400"
                  placeholder={t('callbackModal.placeholders.phone')}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">{t('callbackModal.labels.emailOptional')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none text-gray-900 placeholder-gray-400"
                  placeholder={t('contactForm.placeholders.email')}
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">{t('callbackModal.labels.preferredDateOptional')}</label>
                <input
                  type={dateInputType}
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  onFocus={() => setDateInputType('date')}
                  onBlur={() => { if (!formData.date) setDateInputType('text') }}
                  placeholder={t('callbackModal.placeholders.date')}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">{t('callbackModal.labels.selectService')}<span className="text-red-500">*</span></label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none bg-white ${formData.service === '' ? 'text-gray-400' : 'text-gray-900'}`}
                >
                  <option value="" disabled>{t('callbackModal.options.selectService')}</option>
                  <option value="Digital Marketing">{t('callbackModal.options.marketing')}</option>
                  <option value="Cyber Security">{t('callbackModal.options.security')}</option>
                  <option value="Both">{t('callbackModal.options.both')}</option>
                  <option value="Other">{t('callbackModal.options.other')}</option>
                </select>
              </div>
              <div>
                <label htmlFor="callbackMethod" className="block text-sm font-semibold text-gray-700 mb-2">{t('callbackModal.labels.callbackMethodOptional')}</label>
                <select
                  id="callbackMethod"
                  name="callbackMethod"
                  value={formData.callbackMethod}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none bg-white ${formData.callbackMethod === '' ? 'text-gray-400' : 'text-gray-900'}`}
                >
                  <option value="">{t('callbackModal.options.selectMethod')}</option>
                  <option value="Phone Call">{t('callbackModal.options.phoneCall')}</option>
                  <option value="WhatsApp">{t('callbackModal.options.whatsapp')}</option>
                  <option value="Zoom Meeting">{t('callbackModal.options.zoomMeeting')}</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="preferredLanguage" className="block text-sm font-semibold text-gray-700 mb-2">{t('callbackModal.labels.preferredLanguageOptional')}</label>
                <select
                  id="preferredLanguage"
                  name="preferredLanguage"
                  value={formData.preferredLanguage}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none bg-white ${formData.preferredLanguage === '' ? 'text-gray-400' : 'text-gray-900'}`}
                >
                  <option value="">{t('callbackModal.options.selectLanguage')}</option>
                  <option value="Hindi">{t('callbackModal.options.hindi')}</option>
                  <option value="English">{t('callbackModal.options.english')}</option>
                  <option value="Sanskrit">{t('callbackModal.options.sanskrit')}</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">{t('callbackModal.labels.messageOptional')}</label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none text-gray-900 placeholder-gray-400"
                  placeholder={t('callbackModal.placeholders.message')}
                />
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch gap-3">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50"
                aria-label="Cancel"
              >
                {t('callbackModal.actions.cancel')}
              </button>
              <button
                type="button"
                onClick={openWhatsApp}
                className="w-full sm:w-auto px-6 py-3 rounded-lg border-2 border-green-500 text-green-600 font-semibold hover:bg-green-50"
                aria-label="Send via WhatsApp"
              >
                {t('callbackModal.actions.sendViaWhatsApp')}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-primary-blue to-primary-dark text-white font-semibold hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('callbackModal.actions.submitting') : t('callbackModal.actions.requestCallback')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CallbackModal


