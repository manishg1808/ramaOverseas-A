import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import img2 from '../../assets/4.png'

const CoreServices = () => {
  const { t } = useTranslation()
  return (
    <section 
      className="py-8 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${img2})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Intro */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('home.core.title')}
          </h2>
          <p className="text-xl text-gray-200 mx-auto">
            {t('home.core.desc')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Digital Marketing Card */}
          <div 
            className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg p-10"
            data-aos="fade-right"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">💻</span>
              <span>{t('home.core.marketing.title')}</span>
            </h3>

            <ul className="list-disc pl-6 space-y-4 text-gray-700 text-lg">
              {t('home.core.marketing.list', { returnObjects: true }).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <Link 
              to="/services/digital-marketing"
              className="mt-6 inline-block text-primary-blue font-semibold hover:underline"
            >
              {t('home.core.marketing.learnMore')}
            </Link>
          </div>

          {/* Cyber Security Card */}
          <div 
            className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg p-10"
            data-aos="fade-left"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">🔐</span>
              <span>{t('home.core.security.title')}</span>
            </h3>

            <ul className="list-disc pl-6 space-y-4 text-gray-700 text-lg">
              {t('home.core.security.list', { returnObjects: true }).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <Link 
              to="/services/cyber-security"
              className="mt-6 inline-block text-primary-blue font-semibold hover:underline"
            >
              {t('home.core.security.learnMore')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreServices

