import React from 'react';
import Carousel from './Home Components/Carousel';
import Counsellors from './Home Components/Counsellors/counsellors';
import Testimonial from './Home Components/testimonials/testimonial';



export default function Home() {
  return (
    <div className="Home">
      <Carousel></Carousel>
      <Testimonial></Testimonial>
      <Counsellors></Counsellors>
    </div>
  );
}