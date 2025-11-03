import { useTranslation } from 'react-i18next'

const WhyChoose = () => {
  const { t } = useTranslation()
  const features = t('home.why.features', { returnObjects: true }).map((f, idx) => ({
    icon: ['ri-brain-line','ri-bar-chart-line','ri-shield-check-line','ri-user-line'][idx],
    title: f.title,
    description: f.desc,
    color: 'from-primary-blue to-primary-dark'
  }))

  const gradients = [
    'linear-gradient(to right, #13b37f 0%, #11a3c8 100%)',
    'linear-gradient(to right, #00bcd4 0%, #0097a7 100%)',
    'linear-gradient(to right, #6366f1 0%, #06b6d4 100%)',
    'linear-gradient(to right, #fb923c 0%, #ef4444 100%)',
  ]

  return (
    <section className="py-8 bg-white">

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('home.why.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="pro-card" style={{ '--background': gradients[idx % gradients.length] }}>
                <div className="pro-card-inner">
                  <div className="mb-3 text-3xl flex items-center justify-center" aria-hidden="true">
                    <i className={feature.icon}></i>
                  </div>
                  <p className="pro-card-title text-lg md:text-xl mb-1">{feature.title}</p>
                  <p className="pro-card-desc text-sm md:text-base px-3">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose

