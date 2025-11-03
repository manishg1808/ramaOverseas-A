import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import heroBg from '../assets/15.png'
import storyImg from '../assets/9.png'
import worldMapBg from '../assets/14.png'
import { Helmet } from 'react-helmet-async'

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.2 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])

  return isIntersecting
}

const Counter = ({ from = 0, to = 100, duration = 1500, suffix = '' }) => {
  const ref = useRef(null)
  const visible = useOnScreen(ref)
  const [value, setValue] = useState(from)

  useEffect(() => {
    if (!visible) return
    let start = null
    const delta = to - from

    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(from + delta * eased))
      if (progress < 1) requestAnimationFrame(step)
    }
    const raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [visible, from, to, duration])

  return (
    <span ref={ref} className="tabular-nums">{value}{suffix}</span>
  )
}

const About = () => {
  return (
    <div className="pt-24">
      <Helmet>
        <title>About SecureReach Digital Solutions | Our Story & Team</title>
        <meta name="description" content="Learn about SecureReach — a next-generation digital agency blending performance marketing with advanced cybersecurity." />
        <meta property="og:title" content="About SecureReach Digital Solutions | Our Story & Team" />
        <meta property="og:description" content="Learn about SecureReach — a next-generation digital agency blending performance marketing with advanced cybersecurity." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* 1. Hero / Intro */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Full-bleed background image behind content */}
        <div className="absolute inset-0 z-0">
          {/* subtle vignette shadow for readability */}
          <div
            className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_55%,rgba(0,0,0,0.35)_100%)]"
            aria-hidden
          />
        </div>

        <div className="container mx-auto px-4 py-24 md:py-28 relative z-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <div className="rounded-2xl bg-transparent backdrop-blur-sm border border-white/50 shadow-lg p-6 md:p-8">
              <p className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-primary-blue/80 bg-white border border-cyan-200 rounded-full px-3 py-1 shadow-sm">
                About SecureReach
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-4">
                We’re SecureReach — Where Growth Meets Security.
              </h1>
              <p className="text-lg md:text-xl mt-4 max-w-2xl bg-gradient-to-r from-white/95 via-cyan-200/90 to-white/95 bg-clip-text text-transparent">
                A next-generation digital agency blending smart marketing and advanced cybersecurity solutions to empower modern businesses.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <a href="#team" className="px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-dark text-white rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all">
                  Meet Our Team
                </a>
                <Link to="/contact" className="px-6 py-3 border border-white/60 text-white rounded-lg font-semibold hover:bg-white/10 transition">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* 2. Our Story / Company Overview */}
      <section id="story" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Circular Image */}
            <div className="flex justify-center" data-aos="fade-right">
              <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full overflow-hidden shadow-lg ring-4 ring-primary-blue/10">
                <img src={storyImg} alt="Our story" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="max-w-4xl ml-auto text-right" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                Our Story
              </h2>
              <div className="mx-auto mt-3 h-1.5 w-20 bg-gradient-to-r from-primary-blue to-primary-dark rounded-full" />
              <p className="text-gray-600 text-lg mt-4 leading-8" style={{ textAlign: 'justify' }}>
                <span className="font-semibold text-gray-800">Rama Overseas Immigration Services</span> is a reputable immigration consultancy firm dedicated to providing comprehensive and reliable immigration services to individuals and families seeking to migrate to different countries across the world. With a team of experienced professionals, Rama Overseas Immigration Services aims to simplify the complex immigration process and guide clients towards a successful and smooth transition to their desired destinations.
              </p>
              <p className="text-gray-600 text-lg mt-4 leading-8" style={{ textAlign: 'justify' }}>
                Established with the goal of assisting individuals in realizing their dreams of studying, working, or settling abroad, Rama Overseas Immigration Services offers a wide range of immigration services tailored to meet the specific needs and requirements of each client. The company is committed to delivering personalized attention and maintaining the highest standards of professionalism and integrity throughout the entire immigration journey.
              </p>
              <div className="mt-6 text-sm text-gray-500">
                <span className="inline-block px-3 py-1 bg-gray-50 border rounded-full mr-2">Founded in 2018</span>
                <span className="inline-block px-3 py-1 bg-gray-50 border rounded-full">Serving 100+ global clients</span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-500 text-center" data-aos="fade-up" data-aos-delay="150">
            Content reference: Rama Overseas Immigration Services — About Us.
          </p>
        </div>
      </section>

      {/* 4. Meet the Team */}

      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Minds Behind SecureReach.</h2>
            <p className="text-gray-600 mt-2">Experienced professionals across cybersecurity, marketing, and engineering.</p>
          </div>

          {/* Continuous right-to-left marquee */}
          <div className="relative overflow-hidden">
            <style>{`@keyframes marquee-rtl { from { transform: translateX(0%);} to { transform: translateX(-50%);} }`}</style>
            <div
              className="flex gap-6 items-stretch"
              style={{ width: '200%', animation: 'marquee-rtl 45s linear infinite' }}
            >
            {[
                {
                  name: 'Amit Tyagi',
                  text:
                    'Most reliable and professional immigration Company as they have took care of all the requirement in minute details. They have helped me in explaining the job tasks according to Canadian standards and requirements. Also have provided solution in providing all the documents for my family.'
                },
                {
                  name: 'Swati',
                  text:
                    'The consultants of Rama Overseas are very knowledgable and their behavior is very professional. They helped me with my Australia PR. Within a very short span of time, I got my VISA. I have also recommended many of my friends about your company.'
                },
                {
                  name: 'Arvind',
                  text:
                    'Rama Overseas is a thoroughly professional consultancy, one that I would trust without hesitation. The careful measured assessment, answering my queries at a single go and attending all my concerns of my visa application Rama Overseas has always proved as a guiding light.'
                },
                {
                  name: 'Rajni',
                  text:
                    "The management of Team Rama Overseas gives its clients the best advice and support possible! I'm quite appreciative of their help. They efficiently handled the application process and addressed all of my questions and worries. I suggest Rama Overseas for matters involving visas. Regards, everyone."
                },
                
                {
                  name: 'Balihar Singh',
                  text:
                    'Presently I am in Canada with my family on PR. I would like to thank Rama Overseas to make this possible. We have achieved our PR for all family members with the help and sincere efforts of Rama Overseas. I would recommend everyone Rama Overseas Services for PR Settlement. Great People!! Great Results.!! WOW'
                },
                {
                  name: 'Pt. Dhirender Shastri',
                  text:
                    'Members of the team will be available to you at all times to help you with the immigration process. Very happy with the services. They helped me submit my application for permanent residence in Canada. I really do appreciate it. I wholeheartedly support Rama Overseas.'
                }
              ]
                // duplicate for seamless scroll
                .concat([
                  {
                    name: 'Amit Tyagi',
                    text:
                      'Most reliable and professional immigration Company as they have took care of all the requirement in minute details. They have helped me in explaining the job tasks according to Canadian standards and requirements. Also have provided solution in providing all the documents for my family.'
                  },
                  { name: 'Swati', text: 'The consultants of Rama Overseas are very knowledgable and their behavior is very professional. They helped me with my Australia PR. Within a very short span of time, I got my VISA. I have also recommended many of my friends about your company.' },
                  { name: 'Arvind', text: 'Rama Overseas is a thoroughly professional consultancy, one that I would trust without hesitation. The careful measured assessment, answering my queries at a single go and attending all my concerns of my visa application Rama Overseas has always proved as a guiding light.' },
                  { name: 'Rajni', text: "The management of Team Rama Overseas gives its clients the best advice and support possible! I'm quite appreciative of their help. They efficiently handled the application process and addressed all of my questions and worries. I suggest Rama Overseas for matters involving visas. Regards, everyone." },
                  
                  { name: 'Balihar Singh', text: 'Presently I am in Canada with my family on PR. I would like to thank Rama Overseas to make this possible. We have achieved our PR for all family members with the help and sincere efforts of Rama Overseas. I would recommend everyone Rama Overseas Services for PR Settlement. Great People!! Great Results.!! WOW' },
                  { name: 'Pt. Dhirender Shastri', text: 'Members of the team will be available to you at all times to help you with the immigration process. Very happy with the services. They helped me submit my application for permanent residence in Canada. I really do appreciate it. I wholeheartedly support Rama Overseas.' }
                ])
                .map((t, idx) => (
                  <div key={idx} className="group relative h-full min-w-[260px] max-w-[260px]">
                    <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-primary-blue/40 via-cyan-300/40 to-primary-dark/40 transition-all duration-300 group-hover:from-primary-blue group-hover:via-cyan-400 group-hover:to-primary-dark group-hover:shadow-xl group-hover:shadow-primary-blue/10">
                      <div className="min-h-[360px] bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 flex flex-col">
                        <div className="pointer-events-none absolute -top-10 -right-10 w-24 h-24 bg-cyan-200/30 rounded-full blur-3xl" aria-hidden />
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-blue to-primary-dark text-white flex items-center justify-center text-lg shadow ring-4 ring-cyan-50 group-hover:ring-cyan-100 font-bold">
                              <span>{t.name.charAt(0)}</span>
                            </div>
                            <div>
                              <h3 className="text-[15px] font-semibold text-gray-900">{t.name}</h3>
                              <span className="inline-flex items-center gap-1 text-[10px] mt-1 px-2 py-0.5 rounded-full bg-cyan-50 text-primary-blue border border-cyan-100">
                                <i className="ri-shield-check-line"></i> Verified Client
                              </span>
                            </div>
                          </div>
                          <div className="text-xl text-primary-blue/30">“</div>
                        </div>
                        <div className="mt-3 text-amber-500 text-xs flex items-center gap-1" aria-label="5 star rating">
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                        </div>
                        <p className="text-gray-700 mt-2 text-[13px] leading-6 whitespace-pre-line" style={{ textAlign: 'justify' }}>{t.text}</p>
                        <div className="mt-auto pt-3 text-[10px] text-gray-400 border-t border-gray-100">Shared publicly · Thank you for your trust</div>
                </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Clients Choose Us */}
      <section
        id="why"
        className="relative py-20 bg-transparent"
        style={{
          backgroundImage: `url(${worldMapBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40 pointer-events-none" aria-hidden />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Why Businesses Trust SecureReach</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Dual Expertise', desc: 'Marketing + Cybersecurity under one roof.', icon: 'ri-lightbulb-line' },
              { title: 'Proven Results', desc: 'Measurable ROI across campaigns.', icon: 'ri-bar-chart-fill' },
              { title: '24/7 Support', desc: 'Always available for peace of mind.', icon: 'ri-time-line' },
              { title: 'Experienced Pros', desc: 'Certified experts across domains.', icon: 'ri-brain-line' },
              { title: 'Global Perspective', desc: 'Serving clients worldwide.', icon: 'ri-global-line' },
            ].map((f, idx) => (
              <div key={idx} className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay={idx * 80}>
                <div className="text-3xl mb-3 flex items-center justify-center">
                  <i className={f.icon}></i>
                </div>
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Company Achievements / Statistics */}
      <section
        id="achievements"
        className="relative py-20 bg-transparent"
        style={{
          backgroundImage: `url(${worldMapBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40 pointer-events-none" aria-hidden />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">A Track Record of Excellence.</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">Our commitment to quality and client satisfaction speaks for itself.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300" data-aos="fade-up">
              <div className="mb-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-blue/10 to-primary-dark/10 group-hover:from-primary-blue/20 group-hover:to-primary-dark/20 flex items-center justify-center transition-all duration-300">
                  <i className="ri-folder-chart-line text-4xl text-primary-blue"></i>
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
                <Counter to={150} suffix="+" />
              </div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="mb-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-blue/10 to-primary-dark/10 group-hover:from-primary-blue/20 group-hover:to-primary-dark/20 flex items-center justify-center transition-all duration-300">
                  <i className="ri-shield-check-line text-4xl text-primary-blue"></i>
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
                <Counter to={200} suffix="+" />
              </div>
              <div className="text-gray-600 font-medium">Websites Secured</div>
            </div>
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="mb-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-blue/10 to-primary-dark/10 group-hover:from-primary-blue/20 group-hover:to-primary-dark/20 flex items-center justify-center transition-all duration-300">
                  <i className="ri-user-heart-line text-4xl text-primary-blue"></i>
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
                <Counter to={98} suffix="%" />
              </div>
              <div className="text-gray-600 font-medium">Client Retention</div>
            </div>
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="mb-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-blue/10 to-primary-dark/10 group-hover:from-primary-blue/20 group-hover:to-primary-dark/20 flex items-center justify-center transition-all duration-300">
                  <i className="ri-calendar-check-line text-4xl text-primary-blue"></i>
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
                <Counter to={5} suffix="+" />
              </div>
              <div className="text-gray-600 font-medium">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section id="contact-cta" className="py-20 bg-gradient-to-r from-primary-blue to-primary-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white" data-aos="zoom-in">
            <h2 className="text-3xl md:text-4xl font-extrabold">Let’s Build Something Great Together.</h2>
            <p className="text-white/90 mt-3 text-lg">Ready to take your business to the next level? Partner with SecureReach and experience secure digital transformation.</p>
            <Link to="/contact" className="inline-block mt-8 px-8 py-3 bg-white text-primary-blue rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About


