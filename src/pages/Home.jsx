import Hero from '../components/Home/Hero'
import CoreServices from '../components/Home/CoreServices'
import WhyChoose from '../components/Home/WhyChoose'
import Testimonials from '../components/Home/Testimonials'
import CTABanner from '../components/Home/CTABanner'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>SecureReach Digital Solutions | Digital Marketing & Cybersecurity Agency</title>
        <meta name="description" content="ROI-focused SEO, PPC, social media, and enterprise-grade cybersecurity to help businesses grow safely." />
        <meta property="og:title" content="SecureReach Digital Solutions | Digital Marketing & Cybersecurity Agency" />
        <meta property="og:description" content="ROI-focused SEO, PPC, social media, and enterprise-grade cybersecurity to help businesses grow safely." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Hero />
      <CoreServices />
      <WhyChoose />
      <Testimonials />
      <CTABanner />
    </div>
  )
}

export default Home

