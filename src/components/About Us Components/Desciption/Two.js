import React from "react";
import Image1 from "../../../Images/clipart-doctor-counselling.png";

export default function Two() {
  return (
    <div className="lg:container mx-auto flex md:px-16 px-10 md:flex-row flex-col items-center">
      <div className="lg:max-w-xs md:w-1/2 w-5/6 hidden md:block">
        <img className="object-center rounded" alt="hero" src={Image1} />
      </div>
      <div className="leading-relaxed lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        The counsellor Ms. Monika Gupta (M.Phil, Clinical Psychology, NIMHANS,
        and Bangalore) is available to provide help and support for students
        from diverse religious, cultural and ethnic backgrounds. The role of a
        counsellor is to offer support to the students to deal with a wide range
        of concerns -be it academic, personal, emotional, family or peer
        related. Counsellor meets students and their parents as and when needed.
        Parents and teachers can also approach counsellor over issues pertaining
        to a young person in their care. With the support of the students,
        parents, other departments and services at IIT Indore, counselling
        center has been able to effectively meet the needs of students and
        wishes to continue working for the same.
      </div>
    </div>
  );
}
