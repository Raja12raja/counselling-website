import React from 'react'
import PhotoCard from "../../PhotoCard";
import image1 from "../../../Images/Harshita_Murai_Counselor.jpg"; 
import image2 from "../../../Images/monika_Counsellor.png";
import image3 from "../../../Images/Subham_Mandsaurkar_Counsellor.jpg"; 

export default function Counsellors() {
  return (
    <div className='grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3'>
        <PhotoCard name="Harshita Murai" email="counselor_harshita@iiti.ac.in" phone="8830573076" image={image1}></PhotoCard>
        <PhotoCard name="Monika Gupta" email="counsellor@iiti.ac.in" phone="9009331946" image={image2}></PhotoCard>
        <PhotoCard name="Shubham Mandsaurkar" email="counselor@iiti.ac.in" phone="9174954908" image={image3}></PhotoCard>
    </div>
  )
}
