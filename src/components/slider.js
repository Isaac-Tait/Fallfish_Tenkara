import React, { Component } from "react";

import Slider from "react-slick";

import Crow from '../../content/assets/sliders/crow.jpg'
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img 
              src={Crow}
              alt="crow"
              height={700}
              width={700}
            />
          </div>
          <div>
            <img 
              src={Crow}
              alt="crow"
              height={700}
              width={700}
            />
          </div>
          <div>
            <img 
              src={Crow}
              alt="crow"
              height={700}
              width={700}
            />
          </div>
          
          
        </Slider>
      </div>
    );
  }
}
