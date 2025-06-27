import React, { useEffect, useState } from "react";
import Content from "./Content";
import  axios from "axios";
import FeedbackImage from "../../../Images/Feedback Form logo.png";
import "./forms.css"
export default function Forms(){

    const [role,setRole] = useState("");
    const getUser = async () => {
      try {
          const response = await axios.get("http://localhost:6005/login/sucess", { withCredentials: true });
          console.log(response.data.user.role)
          setRole(response.data.user.role)
      } catch (error) {
          console.log("error", error)
      }
    }
    
    useEffect(()=>{
      getUser()
    },[])
    console.log(role)

    return(
        <>
            <div className="forms"></div>
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-1 py-4 text">
                <h2 className="max-w-lg mb-10 mt-10 text-3xl font-bold leading-none tracking-tight text-gray-800 sm:text-4xl md:mx-auto text-center">
                Useful Forms
                </h2>
                <div className="grid justify-items-center mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-2 text-center">
                    <Content 
                        title = "Feedback Form" 
                        desc="Please provide your valuable 
                        feedback to our services" 
                        image={FeedbackImage}
                        link="https://www.google.com/"
                        button="Explore"/>
                    <Content 
                        title= {role === "Admin" ?  "Appointments" : "Book now"}
                        desc=  {role === "Admin" ?  "appointments request from clients for approval"  : "BooK an Appointment with counsellor" } 
                        image= {FeedbackImage}
                        link="/appointment"
                        link=   {role === "" ? "http://localhost:6005/auth/google/callback" : "/appointment" }
                        button= {role === "Admin" ? "View Requests" : "Book now" }/>
                </div>
            </div>
      </>
    );
};