import React from "react";
import Content from "./content.js";
import "../../../App.css"

// testimonials.map((tesimonial, index) => {
//     return <Card data={testimonial}/>
// })

// export default function Testimonial(){
//     return(
//         <section className="relative flex flex-col">
//         <div className="flex flex-col justify-center w-full px-4 py-8 md:mx-24">
//             <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
//             Testimonial
//             </h2>
//         </div>
//         <div className="flex space-x-8">
//             {
//                 testimonials.map((testimonial, index) => {
//                     return ( 
//                         <div key={index}>
//                             <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 float-left justify-center">
//                                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{testimonial.heading}</h5>
//                                 <p class="font-normal text-gray-700"><Content name={testimonial.name}></Content></p>
//                             </a>
//                         </div>
//                     )
//                 })
//             }
        
//         </div>
//         </section>
//     )
// }

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const testimonialss = [
  {
      "heading": "-----",
      "name": "Ishaan Mittal"
  },
  {
      "heading": "Helpful",
      "name": "Shagun"
  },
  {
    "heading" : "------",
    "name" : "Anonymous"
  }
]

const TestimonialCarousel = ({ testimonials }) => {

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const previousCard = () => {
    const newIndex =
      currentCardIndex === 0 ? testimonialss.length - 1 : currentCardIndex - 1;
    setCurrentCardIndex(newIndex);
  };

  const nextCard = () => {
    const newIndex =
      currentCardIndex === testimonialss.length - 1 ? 0 : currentCardIndex + 1;
    setCurrentCardIndex(newIndex);
  };

  return (
    <section className="relative flex flex-col">
         <div className="flex flex-col justify-center w-full px-4 py-8 md:mx-24">
             <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
             Testimonial
             </h2>
         </div>
    <div className="h-96 flex justify-center items-center">
        { testimonialss.map((testimonial, index) => {
              return( 
                <div key={index}>
                  <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 float-left justify-center">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{testimonial.heading}</h5>
                    <p class="font-normal text-gray-700"><Content name={testimonial.name}></Content></p>
                  </a>
                </div>
              )
            }
          )
        }
      <button className="absolute top-1/2 left-0 ml-1.5 w-2.5" onClick={previousCard}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="absolute top-1/2 right-0 mr-1.5 w-2.5" onClick={nextCard}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      </div>
    </section>
  );
};



export default TestimonialCarousel;
