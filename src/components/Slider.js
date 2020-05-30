import React from "react";
import Slider from "react-slick";

import jazz1 from '../assets/images/jazz1.jpg';
import jazz2 from '../assets/images/jazz2.jpg';
import jazz3 from '../assets/images/jazz3.jpg';

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 6000
};

const SimpleSlider = ()=>(
        <div className="slider-block">
          <Slider {...settings}>
            <div>
              <img src={jazz1} alt="jazz"/>
            </div>
            <div>
              <img src={jazz2} alt="jazz"/>
            </div>
            <div>
              <img src={jazz3} alt="jazz" />
            </div>
          </Slider>
        </div>
      );

  export default SimpleSlider;