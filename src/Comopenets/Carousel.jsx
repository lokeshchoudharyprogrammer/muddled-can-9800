import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default () => (
  <Carousel autoPlay>
    <div>
      <img
        alt=""
        src="https://static.thcdn.com/images/large/webp/widgets/208-us/53/original-Obagi_NPD_1200x675-052053.png"
      />
      <p className="legend">Shop Now </p>
      
    </div>
    <div>
      <img
        alt=""
        src="https://static.thcdn.com/images/large/webp/widgets/208-us/07/original-Tablet-1200x675-085807.jpeg"
      />
      <p className="legend">Shop Now </p>
    </div>
  </Carousel>
);
