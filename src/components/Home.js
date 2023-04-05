import React from 'react';
import Carousel from './Home Components/Carousel';
import Counsellors from './Home Components/Counsellors/Counsellors';
import Testimonial from './Home Components/testimonials/Testimonial';
import Forms from './Home Components/Forms/Forms';


export default function Home() {
  return (
    <div className="Home">
      <Carousel></Carousel>
      <Forms></Forms>
      <Testimonial></Testimonial>
      <Counsellors></Counsellors>
    </div>
  );
}