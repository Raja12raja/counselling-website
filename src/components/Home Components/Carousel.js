import carousel1 from '../../Images/young-family-teenage-boy-office-family-therapist-psychologist-vector-flat-cartoon-illustration-psychotherapy-165822058.jpg';
import carousel2 from '../../Images/online-psychotherapy-1585671734500 1.jpg';
import carousel3 from '../../Images/istockphoto-1288914845-612x612.jpg';
import carousel4 from '../../Images/clipart-doctor-counselling.png';
import React, { useState, useEffect } from "react";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: carousel2,
      title: "Student Counselling Services",
      description: "Professional support for academic and personal challenges at IIT Indore"
    },
    {
      image: carousel1,
      title: "Mental Health Support",
      description: "Expert guidance for students facing stress, anxiety, and adjustment issues"
    },
    {
      image: carousel3,
      title: "Professional Counselling",
      description: "Qualified counsellors providing confidential and supportive environment"
    },
    {
      image: carousel4,
      title: "Student Wellbeing",
      description: "Comprehensive support for your academic and personal development"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative rounded-xl carousel overflow-hidden">
      <div className="relative height w-full">
        <img
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          className="object-fill h-full w-full rounded-md transition-opacity duration-500"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {slides[currentSlide].title}
            </h1>
            <p className="mb-12 text-lg md:text-xl opacity-80 text-white">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      
      {/* Previous/Next buttons */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors duration-300"
      >
        ←
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors duration-300"
      >
        →
      </button>
    </div>
  );
}