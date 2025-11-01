import { Link } from 'react-router-dom'
import bg21 from '../../assets/21.png'
import { Helmet } from 'react-helmet-async'

const Item = ({ icon, title, points }) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition" data-aos="fade-up">
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
    <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </div>
)

const CyberSecurity = () => {
  const items = [
    {
      icon: '🛡️',
      title: 'Network Security',
      points: ['Firewall configuration', 'Segmentation & ACLs', 'IDS/IPS', 'Secure remote access']
    },
    {
      icon: '🔍',
      title: 'Security Assessment',
      points: ['Vulnerability scans', 'Penetration testing', 'Compliance checks', 'Risk reporting']
    },
    {
      icon: '🔐',
      title: 'Threat Protection',
      points: ['EDR/XDR', 'Email security', 'SIEM integrations', '24/7 monitoring']
    },
    {
      icon: '💾',
      title: 'Backup & Recovery',
      points: ['Backup strategy', 'RTO/RPO planning', 'DR drills', 'Rapid recovery playbooks']
    }
  ]

  return (
    <div className="pt-24">
      <Helmet>
        <title>Cybersecurity Services | Audits, Threat Protection, Recovery | SecureReach</title>
        <meta name="description" content="Network security, VAPT, compliance, EDR/XDR, SIEM integrations, and disaster recovery to reduce risk and stay resilient." />
        <meta property="og:title" content="Cybersecurity Services | Audits, Threat Protection, Recovery | SecureReach" />
        <meta property="og:description" content="Network security, VAPT, compliance, EDR/XDR, SIEM integrations, and disaster recovery to reduce risk and stay resilient." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <header
        className="relative bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${bg21})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/75 to-cyan-50/70"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-3xl" data-aos="fade-up">
            <p className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-primary-blue/80 bg-white border border-cyan-200 rounded-full px-3 py-1 shadow-sm">
              Services · Cyber Security
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">Secure By Design, Safe At Scale</h1>
            <p className="text-gray-700 text-lg mt-3">Reduce risk with layered defenses and proactive monitoring.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/services" className="px-5 py-2.5 border border-primary-blue/50 text-primary-blue rounded-lg font-semibold hover:bg-primary-blue/5 transition">All Services</Link>
              <Link to="/contact" className="px-5 py-2.5 bg-gradient-to-r from-primary-blue to-primary-dark text-white rounded-lg font-semibold shadow hover:shadow-lg transition">Talk to Security Experts</Link>
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

        <section className="relative py-20 overflow-hidden">
          {/* Conic-gradient pattern background */}
          <div
            className="absolute inset-0"
            style={{
              '--s': '82px',
              '--c1': '#b2b2b2',
              '--c2': '#ffffff',
              '--c3': '#d9d9d9',
              '--_g': 'var(--c3) 0 120deg, #0000 0',
              background:
                'conic-gradient(from -60deg at 50% calc(100% / 3), var(--_g)), conic-gradient(from 120deg at 50% calc(200% / 3), var(--_g)), conic-gradient(from 60deg at calc(200% / 3), var(--c3) 60deg, var(--c2) 0 120deg, #0000 0), conic-gradient(from 180deg at calc(100% / 3), var(--c1) 60deg, var(--_g)), linear-gradient(90deg, var(--c1) calc(100% / 6), var(--c2) 0 50%, var(--c1) 0 calc(500% / 6), var(--c2) 0)',
              backgroundSize: 'calc(1.732 * var(--s)) var(--s)'
            }}
            aria-hidden
          />

          {/* subtle white veil for readability */}
          <div className="absolute inset-0 bg-white/70" aria-hidden />

          <div className="relative container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center" data-aos="zoom-in">
              <h2 className="text-3xl font-bold text-gray-900">Need urgent help?</h2>
              <p className="text-gray-700 mt-2">We can assist with incident response, containment, and recovery.</p>
              <Link to="/contact" className="inline-block mt-6 px-8 py-3 bg-primary-dark text-white rounded-lg font-semibold shadow hover:shadow-lg transition">Contact Security Team</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default CyberSecurity


