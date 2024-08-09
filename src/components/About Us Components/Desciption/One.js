import React from "react";
import Image1 from "../../../Images/clipart-doctor-counselling.png";

export default function One(){
    return(
        <div className="lg:container mx-auto flex md:px-16 px-10 md:flex-row flex-col items-center">
            <p className="leading-relaxed lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            College life can be fun and fulfilling, offering students numerous opportunities to acquire new skills, gain knowledge, and develop their character. It is a significant milestone before entering the workforce and launching a career. However, adjusting to a new environment away from home and managing academic and personal demands can cause significant emotional or mental distress. Confiding in family or friends is a helpful coping strategy, but if issues persist, seeking professional help becomes essential.
            </p>
            <div className="lg:max-w-xs md:w-1/2 w-5/6">
            <img className="object-center rounded" alt="hero" src={Image1}/>
            </div>
        </div>
    );
};