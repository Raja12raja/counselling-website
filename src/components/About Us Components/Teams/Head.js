import React from 'react'
import image1 from "../../../Images/Head_Counselling_Aruna.jpg"

export default function Head() {
  return (
    <div className="flex flex-col items-center">
    <img
        className="object-cover w-40 h-40 mb-2 rounded-full shadow hover:shadow-lg"
        src={image1}
        alt="Person"
    />
    <div className="flex flex-col items-center">
        <p className="text-lg font-bold">Prof. Aruna Tiwari</p>
        <p className="text-base">(Head, Counselling Services)</p>
        <p className="text-base">Associate Professor Discipline of Computer Science & Engineering</p>
        <p className="text-base">Phone (Office): <span className='text-sm'>+91-731-6603568</span></p>
        <p className="text-base">Email: <span className='text-sm'>head-cs@iiti.ac.in, artiwari@iiti.ac.in</span></p>
    </div>
    </div>
  )
}
