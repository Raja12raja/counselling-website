import React from "react";
import { Link } from "react-router-dom";

export const ModalsCard = ({ title, text, date, link}) => {
    return (
                <div>
                    <h4 className="font-bold">{title}</h4>
                    <br/>
                    <p className="font-extralight">{date}</p>
                    <p style={{ whiteSpace: "pre-wrap" }}>{typeof text === "function" ? text() : text}</p>
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
    );
}