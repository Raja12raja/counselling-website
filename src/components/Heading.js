import React from 'react';
import picture from '../Images/Indian_Institute_of_Technology,_Indore_Logo.png';

export default function Heading() {
    return (
        <div>
          <nav class="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" class="flex items-center">
          <img src={picture} className="h-6 mr-3 sm:h-9" alt="IIT Indore Logo"/>
          <span >
            <span className="self-center text-3xl font-semibold whitespace-nowrap">परामर्श सेवाएं | Counseling Services</span>
            <br></br>
            <span>भारतीय प्रौद्योगिकी संस्थान, इंदौर | Indian Institute of Technology, Indore</span>            
          </span>
          </a>
          </div>
          </nav>
          </div>
    )
}