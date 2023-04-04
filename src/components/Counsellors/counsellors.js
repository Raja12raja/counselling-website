import React from "react";
import Counsellor from "./counsellor";

export default function Counsellors(props){
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="max-w-lg mb-10 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
          Meet Our Counsellors
        </h2>
        <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
            <Counsellor name="Harshita Murai" email="counselor_harshita@iiti.ac.in" phone="8830573076"></Counsellor>
            <Counsellor name="Monika Gupta" email="counsellor@iiti.ac.in" phone="9009331946"></Counsellor>
            <Counsellor name="Shubham Mandsaurkar" email="counselor@iiti.ac.in" phone="9174954908"></Counsellor>
        </div>
        </div>
    )
}