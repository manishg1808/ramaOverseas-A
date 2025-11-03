import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const CTABanner = () => {
  const { t } = useTranslation()
  return (
    <section className="py-8 bg-gradient-to-r from-primary-blue via-primary-dark to-teal-600 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('home.ctaBanner.title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-100 mb-8">
            {t('home.ctaBanner.subtitle')}
          </p>
          <Link 
            to="/contact"
            className="inline-block px-12 py-6 bg-white text-primary-blue rounded-full font-bold text-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>{t('home.ctaBanner.button')}</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </span>
            
            {/* Glowing border animation */}
            <div className="absolute inset-0 rounded-full border-2 border-white animate-pulse-slow opacity-0 group-hover:opacity-100"></div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Link>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">
        <i className="ri-rocket-line"></i>
      </div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <i className="ri-shield-check-line"></i>
      </div>
    </section>
  )
}

export default CTABanner

