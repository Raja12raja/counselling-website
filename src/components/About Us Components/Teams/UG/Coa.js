import React from 'react'
import PhotoCard from "../../../PhotoCard";
import image1 from "../../../../Images/Harshita_Murai_Counselor.jpg"; 


export default function Coa() {
  return (
    <div className='grid gap-10 mx-auto lg:max-w-screen-lg'>
    <PhotoCard name="Aniket Tiwari" email="counselor_harshita@iiti.ac.in" phone="8830573076" image={image1}></PhotoCard>
    </div>
  )
}
