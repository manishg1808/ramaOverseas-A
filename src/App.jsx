import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'
import DigitalMarketing from './pages/services/DigitalMarketing'
import CyberSecurity from './pages/services/CyberSecurity'
import Footer from './components/Footer'
import Loader from './components/Loader'

function App() {
  const [showLoader, setShowLoader] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    })
    const fadeTimer = setTimeout(() => setFadeOut(true), 2600)
    const hideTimer = setTimeout(() => setShowLoader(false), 3000)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <Router>
      <div className="App">
        {showLoader && <Loader fadeOut={fadeOut} />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/cyber-security" element={<CyberSecurity />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

