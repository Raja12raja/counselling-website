import React from "react";
import Content from "./content.js";

const testimonials = [
    {
        "heading": "asd",
        "name": "asa"
    },
    {
        "heading": "asdasd",
        "name": "asdads"
    }
]

// testimonials.map((tesimonial, index) => {
//     return <Card data={testimonial}/>
// })

export default function Testimonial(){
    return(
        <section className="relative flex flex-col">
        <div className="flex flex-col justify-center w-full px-4 py-8 md:mx-24">
            <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
            Testimonial
            </h2>
        </div>
        <div className="flex space-x-8">
            {
                testimonials.map((testimonial, index) => {
                    return ( 
                        <div key={index}>
                            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 float-left justify-center">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{testimonial.heading}</h5>
                                <p class="font-normal text-gray-700"><Content name={testimonial.name}></Content></p>
                            </a>
                        </div>
                    )
                })
            }
        
        </div>
        </section>
    )
}