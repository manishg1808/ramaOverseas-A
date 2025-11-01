import { useEffect, useState } from 'react'
import img13 from '../../assets/13.png'
import img11 from '../../assets/11.png'
import img10 from '../../assets/10.png'
import img12 from '../../assets/12.png'

const images = [img13, img11, img10, img12]

const HeroSlider = ({ intervalMs = 4500 }) => {
  const [index, setIndex] = useState(0)
  const [parallaxY, setParallaxY] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])

  // Lightweight parallax: move background slightly on scroll
  useEffect(() => {
    let rafId = 0
    const handleScroll = () => {
      const y = window.scrollY || 0
      // Smaller factor for subtle effect
      const next = Math.min(120, y * 0.25)
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => setParallaxY(next))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none" style={{ transform: `translateY(${parallaxY}px)` }}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="banner"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 will-change-transform ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transform: 'scale(1.1)' }}
        />)
      )}
    </div>
  )
}

export default HeroSlider


