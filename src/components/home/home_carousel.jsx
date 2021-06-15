
import { Carousel } from 'react-bootstrap';
import carouselImg1 from '../../images/carousel1.jpg'
import carouselImg2 from '../../images/carousel2.jpg'
import carouselImg3 from '../../images/carousel3.jpg'
import carouselImg4 from '../../images/carousel4.jpg'
const HomeCarousel = () => {
  return (
    <div className="home-carousel">
      <Carousel>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={carouselImg1}
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={carouselImg2}
      alt="Second slide"
    />
    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carouselImg3}
      alt="Third slide"
    />
    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carouselImg4}
      alt="Third slide"
    />
    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
    </div>
  );
};
export default HomeCarousel;
