// import React from "react";
import carousel1 from '../../Images/young-family-teenage-boy-office-family-therapist-psychologist-vector-flat-cartoon-illustration-psychotherapy-165822058.jpg';
import carousel2 from '../../Images/online-psychotherapy-1585671734500 1.jpg';
import carousel3 from '../../Images/istockphoto-1288914845-612x612.jpg';
import carousel4 from '../../Images/clipart-doctor-counselling.png';

// export default function Carousel () {
//     return (
//         <div>
            
//             <div id="controls-carousel" class="relative w-full">
//             {/* Carousel wrapper */}
//             <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
//                 {/* Item 1 */}
//                 <div class="duration-700 ease-in-out" data-carousel-item>
//                     <img src={carousel1} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//                 </div>
//                 {/* Item 2 */}
//                 <div class=" duration-700 ease-in-out" data-carousel-item="active">
//                     <img src={carousel2} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//                 </div>
//                {/* Item 3 */}
//                 <div class="hidden duration-700 ease-in-out" data-carousel-item>
//                     <img src={carousel3} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//                 </div>
//                 {/* Item 4 */}
//                 <div class="hidden duration-700 ease-in-out" data-carousel-item>
//                     <img src={carousel4} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//                 </div>
//                 {/* Item 5 */}
//                 <div class="hidden duration-700 ease-in-out" data-carousel-item>
//                     <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//                 </div>
//             </div>
//             {/* Slider controls */}
//             <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//                 <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
//                     <span class="sr-only">Previous</span>
//                 </span>
//             </button>
//             <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//                 <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
//                     <span class="sr-only">Next</span>
//                 </span>
//             </button>
//             </div>
//         </div>
//     )
// }

import React, { useState } from "react";
const imagess = [carousel1, carousel2, carousel3, carousel4];

const Carousel = ({ images }) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    const newIndex =
      currentImageIndex === 0 ? imagess.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex =
      currentImageIndex === imagess.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="relative">
      <img
        src={imagess[currentImageIndex]}
        alt="Carousel Image"
        className="w-full"
      />
      <button className="absolute top-1/2 left-0" onClick={previousImage}>
        {"<"}
      </button>
      <button className="absolute top-1/2 right-0" onClick={nextImage}>
        {">"}
      </button>
    </div>
  );
};



export default Carousel;