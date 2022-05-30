import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

function SlideShow() {
  return (
    <Carousel showIndicators={true} showThumbs={false} showArrows={true} showStatus = {false} autoPlay = {true} swipeable = {true}>
      <div>
        <img src="dd.jpg" alt='Parking Images' />
      </div>
      <div>
        <img src="e.jpg" alt='Parking Images' />
      </div>
      <div>
        <img src="o.jpg" alt='Parking Images' />
      </div>
      <div>
        <img src="p.jpg" alt='Parking Images' />
      </div>
    </Carousel>
  );
}

export default SlideShow