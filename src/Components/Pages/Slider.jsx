import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Slider1 from '../Images/slider1.jpg'
import Slider2 from '../Images/slider2.jpg'
import Slider3 from '../Images/slider3.jpg'
import Slider4 from '../Images/slider4.jpg'

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='sli-img' src={Slider1} />
      </Carousel.Item>
      <Carousel.Item>
      <img className='sli-img'  src={Slider2} />
      </Carousel.Item>
      <Carousel.Item>
      <img className='sli-img'  src={Slider3}  />
      </Carousel.Item>
      <Carousel.Item>
      <img className='sli-img'  src={Slider4}  />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;