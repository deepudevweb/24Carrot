import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './Page.css'
import Emblaslide1 from '../Images/1-6-1152x768.jpg'
import Emblaslide2 from '../Images/2-6-1154x768.jpg'
import Emblaslide3 from '../Images/3-6-1152x768.jpg'
import Emblaslide4 from '../Images/4-6-1152x768.jpg'
import Emblaslide5 from '../Images/5-6-1154x768.jpg'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img src={Emblaslide1} alt="" /></div>
        <div className="embla__slide"><img src={Emblaslide2} alt="" /></div>
        <div className="embla__slide"><img src={Emblaslide3} alt="" /></div>
        <div className="embla__slide"><img src={Emblaslide4} alt="" /></div>
        <div className="embla__slide"><img src={Emblaslide5} alt="" /></div>
       <div className="overlay">
         
       </div>
      </div>
    </div>
  )
}
