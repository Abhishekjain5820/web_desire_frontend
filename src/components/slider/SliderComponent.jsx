// Slider.js


import Slider from 'react-slick';
import './Slider.css'; // Import CSS file

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="../../images/hero.jpg" />
        </div>
        <div>
          <img src="/path/to/image2.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="/path/to/image3.jpg" alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
