import { Link } from 'react-router-dom'
import Pattern from '../../components/Pattern'
import heroBg from '../../assets/23.png'
import { Helmet } from 'react-helmet-async'

const Item = ({ icon, title, points }) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition" data-aos="fade-up">
    <div className="text-3xl mb-3 flex items-center justify-center">
      <i className={icon}></i>
    </div>
    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
    <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </div>
)

const DigitalMarketing = () => {
  const items = [
    {
      icon: 'ri-focus-3-line',
      title: 'SEO Services',
      points: ['Technical SEO', 'On-page & Off-page SEO', 'Keyword strategy', 'Content optimization']
    },
    {
      icon: 'ri-megaphone-line',
      title: 'Performance Ads (PPC)',
      points: ['Google Search & Display', 'Meta/Instagram Ads', 'Conversion tracking', 'Landing page CRO']
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Social Media',
      points: ['Content calendar', 'Reels & creatives', 'Community management', 'Analytics & reporting']
    },
    {
      icon: 'ri-palette-line',
      title: 'Branding & Strategy',
      points: ['Brand identity', 'Messaging & positioning', 'Full-funnel strategy', 'Go-to-market plans']
    }
  ]

  return (
    <div className="pt-24">
      <Helmet>
        <title>Digital Marketing Services | SEO, PPC, Social | SecureReach</title>
        <meta name="description" content="Technical SEO, on-page/off-page, PPC campaigns, social media growth, and branding strategies to drive measurable results." />
        <meta property="og:title" content="Digital Marketing Services | SEO, PPC, Social | SecureReach" />
        <meta property="og:description" content="Technical SEO, on-page/off-page, PPC campaigns, social media growth, and branding strategies to drive measurable results." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <header
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-white/70" aria-hidden />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <p className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-primary-blue/80 bg-white border border-cyan-200 rounded-full px-3 py-1 shadow-sm">
              Services · Digital Marketing
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">Grow Faster with Performance Marketing</h1>
            <p className="text-gray-700 text-lg mt-3">Acquisition, retention, and revenue — engineered with data and creativity.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/services" className="px-5 py-2.5 border border-primary-blue/50 text-primary-blue rounded-lg font-semibold hover:bg-primary-blue/5 transition">All Services</Link>
              <Link to="/contact" className="px-5 py-2.5 bg-gradient-to-r from-primary-blue to-primary-dark text-white rounded-lg font-semibold shadow hover:shadow-lg transition">Book a Strategy Call</Link>
            </div>
          </div>
        </div>
      </header>

      <main className="bg-white">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {items.map((it, i) => (
                <Item key={i} {...it} />
              ))}
            </div>
          </div>
        </section>

        <Pattern className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center" data-aos="zoom-in">
              <h2 className="text-3xl font-bold text-gray-900">Ready to scale?</h2>
              <p className="mt-2 text-gray-700">We’ll audit your current setup and share a clear roadmap.</p>
              <Link to="/contact" className="inline-block mt-6 px-8 py-3 bg-primary-blue text-white rounded-lg font-semibold shadow hover:shadow-lg transition">Get a Free Audit</Link>
            </div>
          </div>
        </Pattern>
      </main>
    </div>
  )
}

export default DigitalMarketing


