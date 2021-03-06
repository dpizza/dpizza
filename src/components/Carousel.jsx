import React from 'react';

import Carousel from 'react-bootstrap/lib/Carousel';
import Image from './Resources/Image';

const MainCarousel = () => (
  <div className="container">
    <Carousel>
      <Carousel.Item>
        <Image />
        <Carousel.Caption>
          <h1>Bienvenidos a D'Pizza</h1>
          <h3>
            Tenemos los ingredientes especiales que hacen una buena pizza!!
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default MainCarousel;
