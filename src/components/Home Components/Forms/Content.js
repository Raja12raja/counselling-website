import React from "react";

export default function Content(props){
    return(
        <div className="flex flex-col items-center py-5 sm:w-1/2">
            <img 
                alt="content" 
                className="object-center w-40 h-40 mb-2 max-w-none rounded-full shadow border-2 border-black" 
                src={props.image} />
            <h2 className="title-font text-2xl font-medium mb-3">{props.title}</h2>
            <p className="leading-relaxed text-base">{props.desc}</p>
            <a className="mx-auto mt-3 text-white bg-indigo-600 py-2 px-5 focus:outline-none hover:bg-indigo-700 rounded-2xl" href={props.link}>{props.button}</a>
      </div>
    )
}