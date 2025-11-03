// Testimonials section with logo marquee + card grid
import { useTranslation } from 'react-i18next'
import imgBg from '../../assets/2.png'

const Testimonials = () => {
  const { t } = useTranslation()
  const testimonials = [
    { id: 1,  name: 'Ananya Mehta',  position: 'COO · FinProTech',       image: '👩‍💼', quote: 'SecureReach took our brand from unknown to top-ranked — and secured our entire infrastructure.' },
    { id: 2,  name: 'Rajesh Kumar',  position: 'CEO · TechNova',         image: '👨‍💼', quote: 'Their digital marketing strategies increased our ROI by 300%. Outstanding team!' },
    { id: 3,  name: 'Priya Sharma',  position: 'Founder · CloudSecure',  image: '👩‍💻', quote: '24/7 protection and peace of mind. SecureReach is a game-changer for cybersecurity.' },
    { id: 4,  name: 'Vikram Desai',  position: 'CTO · DataSphere',       image: '🧑‍💻', quote: 'From audits to remediation, the team was sharp and fast. Highly recommended.' },
    { id: 5,  name: 'Neha Kapoor',   position: 'Head of Growth · ShopIQ',image: '🧑‍💼', quote: 'We saw measurable improvements in leads within weeks. Clear reporting and great execution.' },
    { id: 6,  name: 'Arjun Patel',   position: 'Product Lead · AppVerse',image: '👨‍💻', quote: 'Smooth collaboration and thoughtful strategy. Our security posture improved significantly.' },
    { id: 7,  name: 'Ishita Rao',    position: 'Marketing Dir. · HealthCore', image: '💼', quote: 'Creative campaigns that actually convert. Superb attention to detail.' },
    { id: 8,  name: 'Karan Singh',   position: 'Founder · AgroNext',     image: '🧑‍🌾', quote: 'They built trust with transparent metrics and consistent results.' },
    { id: 9,  name: 'Meera Jain',    position: 'COO · LearnMate',        image: '👩‍🏫', quote: 'Security audits uncovered critical issues we fixed quickly with their help.' },
    { id: 10, name: 'Rohan Gupta',   position: 'CEO · SwiftLogix',       image: '🧑‍✈️', quote: 'End‑to‑end support across marketing and security. Exactly what we needed to scale.' },
  ]

  const logos = [
    { icon: 'ri-building-line', name: 'TechCorp' },
    { icon: 'ri-rocket-line', name: 'GrowthLabs' },
    { icon: 'ri-briefcase-line', name: 'BusinessPro' },
    { icon: 'ri-star-line', name: 'StarTech' },
    { icon: 'ri-fire-line', name: 'FireBrand' },
    { icon: 'ri-diamond-line', name: 'EliteApps' },
  ]

  // Grid layout (no slider)

  return (
    <section className="relative py-8 overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{
          backgroundImage: `url(${imgBg})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      {/* Readability overlay */}
      <div className="absolute inset-0 -z-10 bg-white/80" />

      <div className="container mx-auto px-4">
        {/* Client Logos */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            {t('home.testimonials.title')}
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We collaborate with fast-growing startups and established enterprises across diverse industries.
          </p>
          <div className="relative">
            <div className="logo-marquee">
              <div className="logo-marquee-track" role="list" aria-label="Partner brands carousel">
                <div className="logo-group" aria-hidden="false">
                  {logos.map((brand) => (
                    <div key={brand.name} className="brand-badge" aria-label={brand.name}>
                      <i className={`${brand.icon} text-xl leading-none`}></i>
                      <span className="brand-name">{brand.name}</span>
                    </div>
                  ))}
                </div>
                <div className="logo-group" aria-hidden="true">
                  {logos.map((brand, idx) => (
                    <div key={`${brand.name}-dup-${idx}`} className="brand-badge">
                      <i className={`${brand.icon} text-xl leading-none`}></i>
                      <span className="brand-name">{brand.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Marquee - single row continuous scroll (left to right) */}
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <h3 className="sr-only">{t('home.testimonials.srOnly')}</h3>
          <div className="review-marquee">
            <div className="review-track" role="list" aria-label="Customer testimonials carousel">
              <div className="review-group" aria-hidden="false">
                {testimonials.map((t) => (
                  <div key={t.id} className="review-card">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-3xl flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-blue to-primary-dark text-white" aria-hidden="true">
                        <i className="ri-user-line"></i>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{t.name}</p>
                        <p className="text-sm text-gray-500">{t.position}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-800 leading-relaxed">“{t.quote}”</blockquote>
                  </div>
                ))}
              </div>
              <div className="review-group" aria-hidden="true">
                {testimonials.map((t) => (
                  <div key={`dup-${t.id}`} className="review-card">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-3xl flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-blue to-primary-dark text-white" aria-hidden="true">
                        <i className="ri-user-line"></i>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{t.name}</p>
                        <p className="text-sm text-gray-500">{t.position}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-800 leading-relaxed">“{t.quote}”</blockquote>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

