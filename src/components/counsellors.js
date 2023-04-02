import React from "react";

export default function Counsellor(props){
    return (
        <span>
            {/* <img>{props.image}</img> */}
            <span>{props.name}</span>
            <span>{props.phone}</span>
            <span>{props.email}</span>
        </span>
    )
}