import React from "react";
import Content from "./Content";
import FeedbackImage from "../../../Images/Feedback Form logo.png";

export default function Forms(){
    return(
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-1 lg:pt-12">
            {/* <h2 className="max-w-lg mb-10 mt-10 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
            Useful Forms
            </h2> */}
            <div className="grid justify-items-center mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-2 text-center">
                <Content 
                    title = "Feedback Form" 
                    desc="Please provide your valuable 
                    feedback to our services" 
                    image={FeedbackImage}
                    link="https://www.google.com/"
                    button="explore"/>
                <Content 
                    title = "Book Appointment" 
                    desc="Book an appointment with the counselors" 
                    image={FeedbackImage}
                    link="https://www.google.com/"
                    button="Book Now"/>
            </div>
      </div>
    );
};