import React from 'react'
import image1 from "../../../Images/Ms. Shilpa Chouhan.jpg";

export default function Office() {
  return (
    <div className="flex flex-col items-center">
    <img
        className="object-cover w-40 h-40 mb-2 rounded-full shadow hover:shadow-lg"
        src={image1}
        alt="Person"
    />
    <div className="flex flex-col items-center">
        <p className="text-lg font-bold">Ms. Shilpa Chouhan</p>
        <p className="text-base">(Office staff, Counselling Services)</p>
        <p className="text-base">Junior Superintendent, MBA-HR</p>
        <p className="text-base">Phone (Office): <span className='text-sm'>+91-731-660 (Ext. No. 5550)</span></p>
        <p className="text-base">Email: <span className='text-sm'>counsellingcell@iiti.ac.in</span></p>
    </div>
    </div>
  )
}
