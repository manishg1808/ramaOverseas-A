import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const hoverTimeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolledHeight = window.scrollY
      setScrollProgress((scrolledHeight / windowHeight) * 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const currentLangLabel = { en: 'EN', hi: 'HI', sa: 'SA' }[i18n.language] || 'EN'
  const selectLanguage = (lng) => {
    i18n.changeLanguage(lng)
    try { localStorage.setItem('lng', lng) } catch {}
    setIsLangOpen(false)
  }

  useEffect(() => {
    try {
      const stored = localStorage.getItem('lng')
      if (stored && stored !== i18n.language) i18n.changeLanguage(stored)
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const openDropdown = (name) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setActiveDropdown(name)
  }

  const closeDropdown = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 220)
  }

  const digitalMarketingServices = [
    { name: t('services.dm.seoOptimization'), icon: '🎯' },
    { name: t('services.dm.ppcManagement'), icon: '📊' },
    { name: t('services.dm.socialMediaGrowth'), icon: '📱' },
    { name: t('services.dm.brandingStrategy'), icon: '🎨' },
  ]

  const cyberSecurityServices = [
    { name: t('services.cs.firewallSetup'), icon: '🛡️' },
    { name: t('services.cs.securityAudit'), icon: '🔍' },
    { name: t('services.cs.threatProtection'), icon: '🔐' },
    { name: t('services.cs.dataRecovery'), icon: '💾' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100' : 'py-5 bg-transparent border-b border-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <span className="text-2xl font-bold text-gray-900 group-hover:text-primary-blue transition-colors duration-300">
                  S
                  <span className="absolute -top-1 -left-1 text-xs shield-icon">🛡️</span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 leading-tight">SecureReach</span>
                <span className="text-xs text-primary-blue leading-tight">Digital Solutions</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="hover-underline font-medium text-gray-700">
                {t('nav.home')}
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => openDropdown('services')}
                onMouseLeave={closeDropdown}
              >
                <button className="hover-underline font-medium text-gray-700 flex items-center">
                  {t('nav.services')} <span className="ml-1">▼</span>
                </button>
                {activeDropdown === 'services' && (
                  <div 
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[680px] bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 ring-1 ring-gray-100"
                    onMouseEnter={() => openDropdown('services')}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary-blue to-transparent mb-4" />
                    <div className="grid grid-cols-2 gap-8">
                      {/* Digital Marketing */}
                      <div className="pr-6">
                        <h3 className="font-bold text-primary-blue mb-4 flex items-center gap-2 text-lg">
                          💻 <span>{t('services.dm.title')}</span>
                        </h3>
                        <ul className="space-y-1.5">
                          {digitalMarketingServices.map((service, idx) => (
                            <li key={idx} className="group flex items-center gap-3 px-2 py-2 rounded-md text-[15px] text-slate-700 hover:bg-primary-blue/5 hover:text-primary-blue transition-colors">
                              <span className="shrink-0 text-base">{service.icon}</span>
                              <span className="font-medium">{service.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Cyber Security */}
                      <div className="pl-6 border-l border-gray-100">
                        <h3 className="font-bold text-primary-blue mb-4 flex items-center gap-2 text-lg">
                          🔐 <span>{t('services.cs.title')}</span>
                        </h3>
                        <ul className="space-y-1.5">
                          {cyberSecurityServices.map((service, idx) => (
                            <li key={idx} className="group flex items-center gap-3 px-2 py-2 rounded-md text-[15px] text-slate-700 hover:bg-primary-blue/5 hover:text-primary-blue transition-colors">
                              <span className="shrink-0 text-base">{service.icon}</span>
                              <span className="font-medium">{service.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <Link to="/services" className="text-sm px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium transition">
                        {t('nav.viewAllServices')}
                      </Link>
                      <div className="flex items-center gap-2">
                        <Link to="/services/digital-marketing" className="text-sm px-4 py-2 rounded-lg bg-primary-blue/10 text-primary-blue hover:bg-primary-blue/15 font-medium transition">
                          {t('nav.digitalMarketing')}
                        </Link>
                        <Link to="/services/cyber-security" className="text-sm px-4 py-2 rounded-lg bg-primary-dark/10 text-primary-dark hover:bg-primary-dark/15 font-medium transition">
                          {t('nav.cyberSecurity')}
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/about" className="hover-underline font-medium text-gray-700">
                {t('nav.about')}
              </Link>

              <Link to="/contact" className="hover-underline font-medium text-gray-700">
                {t('nav.contact')}
              </Link>
            </div>

            {/* Right Side Controls */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Language pill (globe + code) */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(v => !v)}
                  aria-label="Change language"
                  className="group flex items-center gap-2 pl-2 pr-3 py-1 rounded-full border border-primary-blue/30 bg-white/70 text-gray-800 hover:text-primary-blue hover:border-primary-blue/60 shadow-sm hover:shadow-[0_0_0_4px_rgba(0,188,212,0.12)] transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-gray-600 group-hover:text-primary-blue transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
                    <path d="M3 12h18M12 3c2.5 2.9 2.5 14.1 0 18M12 3c-2.5 2.9-2.5 14.1 0 18" />
                  </svg>
                  <span className="text-sm font-medium tracking-wide">{currentLangLabel}</span>
                </button>
                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-28 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
                    <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" onClick={() => selectLanguage('en')}>EN</button>
                    <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" onClick={() => selectLanguage('hi')}>HI</button>
                    <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" onClick={() => selectLanguage('sa')}>SA</button>
                  </div>
                )}
              </div>

              

              <Link
                to="/contact"
                className="px-6 py-2 bg-gradient-to-r from-primary-blue to-primary-dark text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:animate-glow"
              >
                {t('cta.freeConsultation')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link to="/" className="block py-2 font-medium text-gray-700" onClick={toggleMenu}>
                {t('nav.home')}
              </Link>
              
              <div className="py-2">
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen(v => !v)}
                  className="w-full flex items-center justify-between font-medium text-gray-700 mb-2"
                >
                  <span>{t('nav.services')}</span>
                  <span className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4 space-y-2">
                    <Link to="/services" onClick={toggleMenu} className="block text-sm font-medium text-gray-700 hover:text-primary-blue">{t('nav.viewAllServices')}</Link>
                    <div className="text-sm font-semibold text-primary-blue mb-2">{t('services.dm.title')}</div>
                    {digitalMarketingServices.map((service, idx) => (
                      <div key={idx} className="pl-4 text-sm text-gray-600">{service.icon} {service.name}</div>
                    ))}
                    <Link to="/services/digital-marketing" onClick={toggleMenu} className="block pl-4 text-sm text-primary-blue hover:underline">{t('nav.exploreDigitalMarketing')}</Link>
                    <div className="text-sm font-semibold text-primary-blue my-2">{t('services.cs.title')}</div>
                    {cyberSecurityServices.map((service, idx) => (
                      <div key={idx} className="pl-4 text-sm text-gray-600">{service.icon} {service.name}</div>
                    ))}
                    <Link to="/services/cyber-security" onClick={toggleMenu} className="block pl-4 text-sm text-primary-blue hover:underline">{t('nav.exploreCyberSecurity')}</Link>
                  </div>
                )}
              </div>

              <Link to="/about#story" className="block py-2 font-medium text-gray-700" onClick={toggleMenu}>
                {t('mobile.ourStory')}
              </Link>
              <Link to="/about#team" className="block py-2 font-medium text-gray-700" onClick={toggleMenu}>
                {t('mobile.team')}
              </Link>
              <Link to="/contact" className="block py-2 font-medium text-gray-700" onClick={toggleMenu}>
                {t('nav.contact')}
              </Link>

              <div className="flex items-center space-x-2 pt-4 border-t">
                <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700" onClick={() => selectLanguage('en')}>EN</button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700" onClick={() => selectLanguage('hi')}>HI</button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700" onClick={() => selectLanguage('sa')}>SA</button>
              </div>

              <Link 
                to="/contact"
                onClick={toggleMenu}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-dark text-white rounded-lg font-semibold"
              >
                {t('cta.freeConsultation')}
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer below navbar for subtle separation */}
      <div className="h-[0.10rem]" />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-blue to-primary-dark z-50 transition-all duration-300" 
           style={{ width: `${Math.min(scrollProgress, 100)}%` }}
      />

      {/* WhatsApp Floating Icon */}
      <a 
        href="https://wa.me/917310005719" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 z-40 animate-float"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </>
  )
}

export default Navbar

