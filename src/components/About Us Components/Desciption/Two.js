import React from "react";
import Image1 from "../../../Images/clipart-doctor-counselling.png";

export default function Two() {
  return (
    <div className="lg:container mx-auto flex md:px-16 px-10 md:flex-row flex-col items-center">
      <div className="lg:max-w-xs md:w-1/2 w-5/6 hidden md:block">
        <img className="object-center rounded" alt="hero" src={Image1} />
      </div>
      <div className="leading-relaxed lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      At IIT-Indore, the Student Counselling Cell provides a supportive and conducive environment for students to discuss personal issues or academic challenges with professional counselors. Counselors play a crucial role in helping students address various concerns, including academic, personal, emotional, family, or peer-related issues. Counseling helps alleviate distress and enhance well-being by building confidence and teaching effective coping strategies. This facilitates adjustment, personality development, and growth. Through the counseling process, counselors listen to students' concerns with empathy and respond in non-judgmental way.
      </div>
    </div>
  );
}
