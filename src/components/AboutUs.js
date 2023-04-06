import React from 'react';
import Teams from './About Us Components/Teams/Teams';
import One from './About Us Components/Desciption/One';
import Two from './About Us Components/Desciption/Two';

export default function About() {
  return (
    <div className="AboutUs">
            <h1 className="title-font sm:text-4xl text-3xl font-semibold text-black md:px-16 my-10 text-center md:text-left">
              Counselling Services
              <br className="inline-block"/>
              <span className="font-medium sm:text-3xl text-2xl">IIT Indore</span>
            </h1>
        <One></One>
        <Two></Two>
        <Teams/>
    </div>
  );
}