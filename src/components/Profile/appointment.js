import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Counsellerappointment from './Counsellerappointment';
import { Profilepage } from './profilePage';

const Appoinment = () => {
  
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
    
   const loginwithgoogle = ()=>{
      window.open("http://localhost:6005/auth/google/callback","_self")
  }

    useEffect(()=>{
      getUser()
    },[])
  console.log(role)
  return (
    <div>
      {role === "Admin" && <Counsellerappointment/>}
      {role === "Client" && <Profilepage/>}
    </div>
  )
}

export default Appoinment
