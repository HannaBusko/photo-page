import React, { Component } from "react";
import Slider from "react-slick";

import jazz1 from '../assets/images/jazz1.svg';
import jazz2 from '../assets/images/jazz2.svg';
import jazz3 from '../assets/images/jazz3.svg';

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
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
    }
  }