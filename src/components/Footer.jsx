import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <StyledFooter className="text-gray-300">
      {/* Animated pattern background */}
      <div className="pattern-bg" aria-hidden="true">
        <svg preserveAspectRatio="xMidYMid slice" height="100%" width="100%" className="cube-svg" viewBox="0 0 120 104">
          <defs>
            <linearGradient y2="100%" x2="100%" y1="0%" x1="0%" id="cube-dark">
              <stop stopColor="#232526" offset="0%" />
              <stop stopColor="#414345" offset="100%" />
            </linearGradient>
            <linearGradient y2="0%" x2="100%" y1="100%" x1="0%" id="cube-mid">
              <stop stopColor="#4b6cb7" offset="0%" />
              <stop stopColor="#182848" offset="100%" />
            </linearGradient>
            <linearGradient y2="100%" x2="0%" y1="0%" x1="100%" id="cube-light">
              <stop stopColor="#a8edea" offset="0%" />
              <stop stopColor="#fed6e3" offset="100%" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Company Column */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="relative">
                <span className="text-2xl font-bold text-white group-hover:text-primary-blue transition-colors duration-300">
                  S
                  <span className="absolute -top-1 -left-1 text-xs shield-icon">🛡️</span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">SecureReach</span>
                <span className="text-xs text-primary-blue leading-tight">Digital Solutions</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400">
              {t('footer.blurb')}
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/digital-marketing" className="hover:text-primary-blue transition-colors">
                  {t('services.dm.title')}
                </Link>
              </li>
              <li>
                <Link to="/services/cyber-security" className="hover:text-primary-blue transition-colors">
                  {t('services.cs.title')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-primary-blue transition-colors">
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link to="/about#story" className="hover:text-primary-blue transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-blue transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary-blue transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Address Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t('footer.address')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <span>📍</span>
                <span>
                  1st Floor, CS-21, Ansal Plz Rd,<br />
                  near Mahagun Metro Mall, Sector 3, Vaishali,<br />
                  Ghaziabad, Uttar Pradesh 201010
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span>✉️</span>
                <a href="mailto:info@ramaoverseas.in" className="hover:text-primary-blue transition-colors">
                  info@ramaoverseas.in
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span>📞</span>
                <a href="tel:+917310005719" className="hover:text-primary-blue transition-colors">
                  7310005719
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span>📞</span>
                <a href="tel:+918285787401" className="hover:text-primary-blue transition-colors">
                  8285787401
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span>📞</span>
                <a href="tel:+911204334987" className="hover:text-primary-blue transition-colors">
                  0120-4334987
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/company/rama-overseas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-blue transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/rama.overseas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/home" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@TheRamaOverseas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c.707.188 1.262.743 1.45 1.45C21.5 6.3 21.5 12 21.5 12s0 5.7-.435 7.366a2.12 2.12 0 0 1-1.45 1.45C17.95 21.5 12 21.5 12 21.5s-5.95 0-7.615-.684a2.12 2.12 0 0 1-1.45-1.45C2.5 17.7 2.5 12 2.5 12s0-5.7.435-7.366a2.12 2.12 0 0 1 1.45-1.45C6.05 2.5 12 2.5 12 2.5s5.95 0 7.615.684zM10 8.5v7l6-3.5-6-3.5z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/ramaoverseas01/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.04H8v-2.91h2.5V9.41c0-2.47 1.48-3.84 3.74-3.84 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87H16.9l-.4 2.91h-2.36v7.04A10 10 0 0 0 22 12z"/>
                </svg>
              </a>
            </div>
            
            <p className="text-center md:text-right text-sm">
              © {new Date().getFullYear()} SecureReach Digital Solutions. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  position: relative;
  overflow: hidden;
  background: #181c21;

  .pattern-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: repeating-linear-gradient(
      135deg,
      #232526 0px,
      #232526 60px,
      #23252699 70px,
      #414345 130px
    );
    z-index: 0;
  }

  .cube-svg {
    position: absolute;
    width: 200%;
    height: 200%;
    left: -30%;
    top: -20%;
    background: transparent;
    opacity: 0.7;
    z-index: 1;
    animation: cubeMove 18s linear infinite alternate;
    pointer-events: none;
  }

  @keyframes cubeMove {
    from {
      transform: translateY(0) scale(1);
    }
    to {
      transform: translateY(-20%) scale(1.02) rotate(1deg);
    }
  }
`

export default Footer

