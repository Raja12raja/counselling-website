import React, { useState } from "react";
import carousel1 from '../Images/young-family-teenage-boy-office-family-therapist-psychologist-vector-flat-cartoon-illustration-psychotherapy-165822058.jpg';
import carousel2 from '../Images/online-psychotherapy-1585671734500 1.jpg';
import carousel3 from '../Images/istockphoto-1288914845-612x612.jpg';
import carousel4 from '../Images/clipart-doctor-counselling.png';
import '../App.css'

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
        className="w-full h-1/4"
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