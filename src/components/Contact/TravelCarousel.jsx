import img10 from '../../assets/10.png'
import img11 from '../../assets/11.png'
import img12 from '../../assets/12.png'
import img13 from '../../assets/13.png'

const TravelCarousel = () => {
  const images = [img10, img11, img12, img13]

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Destinations & Moments</h3>
      <div className="relative overflow-hidden rounded-xl">
        <div className="carousel-track flex gap-4 will-change-transform">
          {[...images, ...images].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="travel"
              className="h-48 md:h-56 w-auto rounded-lg object-cover flex-shrink-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TravelCarousel


