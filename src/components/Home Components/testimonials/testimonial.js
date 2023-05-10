import React, { useState } from "react";
import { CarouselProvider } from "pure-react-carousel";
import Content from "./content"; /* Import content.js file */
import Cards from "./cards";
/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Index() {
    return (
        <div className="container mx-auto">
            <h2 className="max-w-lg text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center pt-2">
            Testimonial
            </h2>
            <div className="flex items-center justify-center w-full h-full px-4 py-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={4} step={1} infinite={true}>
                    <Cards diff=" gap-14"/>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={3} step={1} infinite={true}>
                    <Cards diff=" gap-14"></Cards>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
                    <Cards diff=" w-full"></Cards>
                </CarouselProvider>
            </div>
        </div>
    );
}
