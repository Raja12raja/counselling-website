import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRightAlt } from "@fortawesome/free-solid-svg-icons";

export default function Content(props){
    return(
        <div className="flex flex-shrink-0 items-center">
        <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className=" opacity-0" />
        <div className="bg-indigo-600 bg-opacity-100 absolute w-full p-6 shadow-lg">
        <p className="leading-loose text-white">
        <FontAwesomeIcon icon={faQuoteLeft} className="me-4"/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea
        tempora dolores qui eius pariatur odit ad voluptas iste, cum
        accusantium beatae tempore quasi nesciunt distinctio.
        </p>
        <div className="mt-4 -mx-2">
            <div className="mx-2 text-right">
                <h1 className="font-semibold text-[#79DAE8] ">
                    {props.name}
                </h1>
            </div>
        </div>
        </div>
        </div>
    )
}