import React from "react";
import { Link } from "react-router-dom";

export const EventsCard = ({ title, text,talk,details,activities, date, img, link }) => {
  return (
    <div
      className="container-fluid"
      style={{
        padding: "20px 0",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        margin: "0 10px",
        justifyContent: "flex-start",
      }}
    >
      <div className="flex items-start flex-row">
        {img !== "" && img !== undefined ? (<img
          alt="Image"
          src={img}
          style={{ width: "min(90vw, 400px)", minWidth: "min(90vw, 400px)" }}
        />):(<></>)}
        
        <div className="flex flex-col px-5">
          <h4 className="font-bold">{title}</h4>
          <br></br>
          <p className="font-extralight">{date}</p>
          {text !== "" && text !== undefined && (<p style={{ whiteSpace: "pre-wrap" }}>{typeof text === "function" ? text() : text}</p>)}  
          {talk !=="" && talk !==undefined && (<p style={{ whiteSpace: "pre-wrap" }}><br></br>Talks: {typeof text === "function" ? text() : talk}<br/></p>)}
          {details !=="" && details !==undefined && (<p style={{ whiteSpace: "pre-wrap" }}><br></br>Details: {typeof text === "function" ? text() : details}<br/></p>)}
          {activities !=="" && activities !==undefined && (
          <p><br></br>Activities: {activities}</p>)}
          {link !== "" && link !== undefined && (
            <p style={{ whiteSpace: "pre-wrap" }}>
              To know more,{" "}
              {link[0] === "h" ? (
                <a href={link} target="_blank" rel="noreferrer">
                  Click Here
                </a>
              ) : (
                <Link to={link}>Click Here</Link>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
