import ContactForm from '../components/Contact/ContactForm'
import ContactInfo from '../components/Contact/ContactInfo'
import HeroSlider from '../components/Contact/HeroSlider'
import CTAHelp from '../components/Contact/CTAHelp'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Helmet>
        <title>Contact SecureReach | Book a Free Consultation</title>
        <meta name="description" content="Get in touch with SecureReach for digital marketing and cybersecurity consulting. Book a free strategy call today." />
        <meta property="og:title" content="Contact SecureReach | Book a Free Consultation" />
        <meta property="og:description" content="Get in touch with SecureReach for digital marketing and cybersecurity consulting. Book a free strategy call today." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Hero / Header */}
      <header className="relative mt-24 pt-28 md:pt-36 pb-20 overflow-hidden">
        {/* sliding images background */}
        <HeroSlider />
        {/* floating icons removed */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <div className="glass-soft rounded-2xl p-6 md:p-8 text-center shadow-xl border border-white/20">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 text-slate-900">
                {t('contactPage.headerTitle')}
              </h1>
              <p className="text-lg md:text-xl text-slate-700 mb-8">
                {t('contactPage.headerDesc')}
              </p>
              <a href="#contact-form" className="inline-block px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-primary-blue to-primary-dark text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition">
                {t('contactPage.headerCTA')}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-gradient-to-br from-gray-50 to-blue-50 text-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-white/70">
          <div className="container mx-auto px-4 py-16">
            <CTAHelp />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Contact

