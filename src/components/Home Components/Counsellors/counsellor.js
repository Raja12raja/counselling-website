import React from "react";

export default function Counsellor(props){
    return(
        <div className="flex flex-col items-center">
        <img
            className="object-cover w-40 h-40 mb-2 rounded-full shadow"
            src={props.image}
            alt="Person"
        />
        <div className="flex flex-col items-center">
            <p className="text-lg font-bold">{props.name}</p>
            <a className="text-sm text-black" href={"mailto:"+ props.email}>{props.email}</a>
            <p className="text-sm text-black">{props.phone}</p>
        </div>
        </div>
    )
}