import { Link } from 'react-router-dom'
import heroBg from '../assets/17.png'
import dmBg from '../assets/22.png'
import csBg from '../assets/24.png'
import { Helmet } from 'react-helmet-async'

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white/90 border border-gray-100 rounded-2xl p-6 transition" data-aos="fade-up">
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600 text-sm mt-1">{desc}</p>
  </div>
)

const Services = () => {
  const digitalMarketing = [
    { icon: '🎯', title: 'SEO Optimization', desc: 'Improve rankings and organic traffic with on-page, off-page, and technical SEO.' },
    { icon: '📊', title: 'PPC Management', desc: 'High-ROI Google & Meta Ads campaigns with conversion tracking.' },
    { icon: '📱', title: 'Social Media Growth', desc: 'Content strategy, calendar, and performance analytics across platforms.' },
    { icon: '🎨', title: 'Branding & Strategy', desc: 'Brand identity, messaging, and full-funnel marketing strategy.' },
  ]

  const cyberSecurity = [
    { icon: '🛡️', title: 'Firewall Setup', desc: 'Enterprise-grade perimeter security and policy hardening.' },
    { icon: '🔍', title: 'Security Audit', desc: 'VAPT, compliance checks, and remediation roadmap.' },
    { icon: '🔐', title: 'Threat Protection', desc: 'Endpoint, email, and network threat detection and response.' },
    { icon: '💾', title: 'Data Recovery', desc: 'Backup strategy, DR drills, and rapid recovery playbooks.' },
  ]

  return (
    <div className="pt-24">
      <Helmet>
        <title>Services | Digital Marketing & Cybersecurity | SecureReach</title>
        <meta name="description" content="Explore SecureReach services: SEO, PPC, social, branding, security audits, threat protection, and disaster recovery." />
        <meta property="og:title" content="Services | Digital Marketing & Cybersecurity | SecureReach" />
        <meta property="og:description" content="Explore SecureReach services: SEO, PPC, social, branding, security audits, threat protection, and disaster recovery." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Hero */}
      <header
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/35" aria-hidden />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <p className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-primary-blue/80 bg-white border border-cyan-200 rounded-full px-3 py-1 shadow-sm">
              Our Services
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4">
              Digital Marketing and Cyber Security
            </h1>
            <p className="text-lg md:text-xl mt-4 max-w-2xl text-white">
              Grow faster and stay secure. We blend ROI-focused marketing with enterprise-grade security.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/services/digital-marketing" className="px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-dark text-white rounded-lg font-semibold transform hover:scale-[1.02] transition-all">
                Explore Digital Marketing
              </Link>
              <Link to="/services/cyber-security" className="px-6 py-3 border border-white/70 text-white rounded-lg font-semibold hover:bg-white/10 transition">
                Explore Cyber Security
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Sections */}
      <main className="bg-white">
        <section
          className="relative overflow-hidden py-16"
          style={{
            backgroundImage: `url(${dmBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-white/80" aria-hidden />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-10" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Digital Marketing</h2>
              <p className="text-gray-600 mt-2">Performance-driven growth across channels.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {digitalMarketing.map((s, i) => (
                <ServiceCard key={i} {...s} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/services/digital-marketing" className="inline-block px-6 py-3 bg-primary-blue text-white rounded-lg font-semibold transition">
                View Digital Marketing Services
              </Link>
            </div>
          </div>
        </section>

        <section
          className="relative overflow-hidden py-16"
          style={{
            backgroundImage: `url(${csBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-white/80" aria-hidden />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-10" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Cyber Security</h2>
              <p className="text-gray-600 mt-2">Protect your business with layered defense.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {cyberSecurity.map((s, i) => (
                <ServiceCard key={i} {...s} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/services/cyber-security" className="inline-block px-6 py-3 bg-primary-dark text-white rounded-lg font-semibold transition">
                View Cyber Security Services
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary-blue to-primary-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white" data-aos="zoom-in">
              <h3 className="text-3xl font-extrabold">Ready to Transform and Secure Your Business?</h3>
              <p className="text-white/90 mt-3">Book a free strategy call with our experts today.</p>
              <Link to="/contact" className="inline-block mt-6 px-8 py-3 bg-white text-primary-blue rounded-lg font-semibold transform hover:scale-[1.02] transition">
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Services


