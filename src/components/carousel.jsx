import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import '../styles/components/carousel.scss'

const Carousel = ({ images, altText }) => {
const [current, setCurrent] = useState(0)

const goPrev = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1)
}

const goNext = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
}

return (
    <div className="carousel">
        <img src={images[current]} alt={`${altText} - image ${current + 1}`} />

        {images.length > 1 && (
            <>
                <button className="carousel-btn prev" onClick={goPrev} aria-label="Image précédente">
                    <ChevronLeft size={20} />
                </button>
                <button className="carousel-btn next" onClick={goNext} aria-label="Image suivante">
                    <ChevronRight size={20} />
                </button>

                <div className="carousel-dots">
                    {images.map((_, index) => (
                        <span
                        key={index}
                        className={index === current ? 'dot active' : 'dot'}
                        onClick={() => setCurrent(index)}
                        />
                    ))}
                </div>
            </>
        )}
    </div>
)
}

export default Carousel