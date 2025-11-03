import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import img1 from '../../assets/6.png'
import img2 from '../../assets/7.png'
import img3 from '../../assets/3.png'

const Hero = () => {
  const { t } = useTranslation()
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      {/* Animated Background Gradient Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,188,212,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,188,212,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        <div className="absolute inset-0 animate-pulse-slow" style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(0,188,212,0.2) 0%, transparent 50%)',
        }}></div>
        <div className="absolute inset-0 animate-float" style={{
          background: 'radial-gradient(circle at 80% 80%, rgba(0,150,136,0.2) 0%, transparent 50%)',
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div data-aos="fade-right" className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">{t('home.hero.title1')}</span>
                <br />
                <span className="gradient-text">{t('home.hero.title2')}</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                {t('home.hero.subtitle')}
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {t('home.hero.blurb', { dm: t('home.hero.dm'), cs: t('home.hero.cs') })}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8" data-aos="fade-up">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text animate-pulse-slow">100+</div>
                <div className="text-sm text-gray-600">{t('home.hero.stats.clients')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text animate-pulse-slow">98%</div>
                <div className="text-sm text-gray-600">{t('home.hero.stats.retention')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text animate-pulse-slow">24/7</div>
                <div className="text-sm text-gray-600">{t('home.hero.stats.support')}</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-2" data-aos="fade-up">
              <Link 
                to="/services"
                className="px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-dark text-white rounded-lg font-semibold text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:animate-glow"
              >
                {t('home.hero.ctas.explore')}
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 border-2 border-primary-blue text-primary-blue rounded-lg font-semibold text-center hover:bg-primary-blue hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                {t('home.hero.ctas.audit')}
              </Link>
            </div>
          </div>

          {/* Right Side - Images Grid */}
          <div className="relative" data-aos="fade-left">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={img1} 
                  alt="Digital Marketing" 
                  className="rounded-lg shadow-2xl hover:shadow-primary-blue/50 transform hover:-translate-y-2 transition-all duration-300"
                />
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-xl">
                  <div className="text-4xl mb-2 flex items-center justify-center">
                    <i className="ri-bar-chart-line"></i>
                  </div>
                  <h3 className="font-bold text-gray-900">{t('home.hero.cards.analyticsTitle')}</h3>
                  <p className="text-sm text-gray-600">{t('home.hero.cards.analyticsDesc')}</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-xl">
                  <div className="text-4xl mb-2 flex items-center justify-center">
                    <i className="ri-shield-check-line"></i>
                  </div>
                  <h3 className="font-bold text-gray-900">{t('home.hero.cards.shieldTitle')}</h3>
                  <p className="text-sm text-gray-600">{t('home.hero.cards.shieldDesc')}</p>
                </div>
                <img 
                  src={img2} 
                  alt="Cyber Security" 
                  className="rounded-lg shadow-2xl hover:shadow-primary-blue/50 transform hover:-translate-y-2 transition-all duration-300"
                />
              </div>
            </div>
            <img 
              src={img3} 
              alt="Digital Solutions" 
              className="absolute -bottom-8 -right-8 rounded-lg shadow-2xl w-48 h-32 object-cover transform hover:scale-110 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Animated Network Lines */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-blue to-transparent animate-pulse-slow"></div>
    </section>
  )
}

export default Hero

