// Lightweight inline SVG icons for a more professional look (no external deps)
const IconPin = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-6-5.8-6-10a6 6 0 1 1 12 0c0 4.2-6 10-6 10z" />
    <circle cx="12" cy="11" r="2.5" />
  </svg>
)

const IconMail = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 7 9-7" />
  </svg>
)

const IconPhone = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="7" y="3" width="10" height="18" rx="2" />
    <circle cx="12" cy="17" r="1.2" />
  </svg>
)

const IconClock = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
)

import { useTranslation } from 'react-i18next'

const ContactInfo = () => {
  const { t } = useTranslation()
  return (
    <div className="space-y-6" data-aos="fade-left">
      <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('footer.contact')}</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Address */}
          <div className="group flex items-start gap-4 bg-gray-50 rounded-xl p-5 hover:bg-white hover:shadow-md hover:ring-1 hover:ring-gray-200 transition overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-blue to-primary-dark text-white flex items-center justify-center shadow-sm">
              <IconPin />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">{t('footer.address')}</h3>
              <p className="text-gray-600 leading-relaxed">
                <a href="https://maps.google.com/?q=1st%20Floor%2C%20CS-21%2C%20Ansal%20Plz%20Rd%2C%20near%20Mahagun%20Metro%20Mall%2C%20Sector%203%2C%20Vaishali%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201010" target="_blank" rel="noreferrer" className="hover:text-primary-blue transition-colors">
                  1st Floor, CS-21, Ansal Plz Rd, near Mahagun Metro Mall, Sector 3, Vaishali, Ghaziabad, Uttar Pradesh 201010
                </a>
              </p>
              <div className="mt-3">
                <a href="https://maps.google.com/?q=1st%20Floor%2C%20CS-21%2C%20Ansal%20Plz%20Rd%2C%20near%20Mahagun%20Metro%20Mall%2C%20Sector%203%2C%20Vaishali%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201010" target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-900 text-white hover:bg-gray-800">
                  {t('nav.viewAllServices')}
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="group flex items-start gap-4 bg-gray-50 rounded-xl p-5 hover:bg-white hover:shadow-md hover:ring-1 hover:ring-gray-200 transition">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white flex items-center justify-center shadow-sm">
              <IconMail />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 mb-1">Email</h3>
              <div className="text-gray-700 space-y-1.5">
                <a href="mailto:info@ramaoverseas.in" className="block text-[15px] leading-6 break-all hover:text-primary-blue transition-colors">info@ramaoverseas.in</a>
                <a href="mailto:ramaoverseas01@gmail.com" className="block text-[15px] leading-6 break-all hover:text-primary-blue transition-colors">ramaoverseas01@gmail.com</a>
              </div>
              <div className="mt-3">
                <a href="mailto:info@ramaoverseas.in,ramaoverseas01@gmail.com" className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-primary-blue text-white hover:brightness-110">
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="group flex items-start gap-4 bg-gray-50 rounded-xl p-5 hover:bg-white hover:shadow-md hover:ring-1 hover:ring-gray-200 transition">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center shadow-sm">
              <IconPhone />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">{t('contactForm.labels.phone')}</h3>
              <div className="text-gray-700 space-y-1">
                <a href="tel:+917310005719" className="hover:text-primary-blue transition-colors block">7310005719</a>
                <a href="tel:+918285787401" className="hover:text-primary-blue transition-colors block">8285787401</a>
                <a href="tel:+911204334987" className="hover:text-primary-blue transition-colors block">0120-4334987</a>
              </div>
              <div className="mt-4 flex items-center gap-3 flex-wrap">
                <a href="tel:+917310005719" className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-primary-blue text-white hover:brightness-110 whitespace-nowrap">{t('callbackModal.options.phoneCall')}</a>
                <a href="https://wa.me/917310005719" target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-green-500 text-white hover:brightness-110 whitespace-nowrap">WhatsApp</a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="group flex items-start gap-4 bg-gray-50 rounded-xl p-5 hover:bg-white hover:shadow-md hover:ring-1 hover:ring-gray-200 transition">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center shadow-sm">
              <IconClock />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
              <p className="text-gray-700 leading-relaxed">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden">
        <div className="h-64 flex items-center justify-center relative">
          <iframe
            src="https://www.google.com/maps?q=Mahagun%20Metro%20Mall%2C%20Sector%203%2C%20Vaishali%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201010&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="p-4 text-center">
          <p className="text-sm text-gray-600 inline-flex items-center gap-2 justify-center">
            <span className="inline-flex items-center justify-center text-gray-700">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-6-5.8-6-10a6 6 0 1 1 12 0c0 4.2-6 10-6 10z" />
                <circle cx="12" cy="11" r="2.5" />
              </svg>
            </span>
            Vaishali, Ghaziabad, Uttar Pradesh
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo

