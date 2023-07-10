import React from "react";

export default function CommitteeCard(props){
    return(
        <div className="flex flex-col items-center">
        <img
            className="w-40 h-40 mb-2 rounded-full shadow hover:shadow-lg"
            src={props.image}
            alt="Person"
        />
        <div className="flex flex-col items-center">
            <p className="text-lg font-bold">{props.name}</p>
            <p className="text-sm">{props.department}</p>
            <a className="text-sm" href={"mailto:"+ props.email}>{props.email}</a>
        </div>
        </div>
    );
};