import React from 'react';
import Carousel from './Home Components/Carousel.js';
import Counsellors from './Home Components/Counsellors/counsellors.js';
import Testimonial from './Home Components/testimonials/testimonial.js';
import Forms from './Home Components/Forms/Forms.js';
import WhoAreWe from './Home Components/About.js';

export default function Home() {
  return (
    <div className="Home">
      <Carousel></Carousel>
      <WhoAreWe></WhoAreWe>
      <Forms></Forms>
      <Testimonial></Testimonial>
      <Counsellors></Counsellors>
    </div>
  );
}