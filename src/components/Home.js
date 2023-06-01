import React from 'react';
import Carousel from './Home Components/Carousel.js';
import Counsellors from './Home Components/Counsellors/counsellors.js';
import TestimonialCarousel from './Home Components/testimonials/testimonial.js';
import Forms from './Home Components/Forms/Forms.js';
import WhoAreWe from './Home Components/About.js';
import "../App.css"

export default function Home() {
  return (
    <>
      <div className="Home">
        <Carousel></Carousel>
        <div className='background'></div>
        <div className='text'>
        <WhoAreWe></WhoAreWe>
        <Forms></Forms>
        <TestimonialCarousel></TestimonialCarousel>
        <Counsellors></Counsellors>
        </div>
      </div>
    </>
  );
}