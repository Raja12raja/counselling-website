import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Counsellerappointment from './Counsellerappointment';
import { Profilepage } from './profilePage';

const Appoinment = () => {
  
    const [role,setRole] = useState();
    const getUser = async () => {
      try {
          const response = await axios.get("http://localhost:6005/login/sucess", { withCredentials: true });
          console.log(response.data.user.role)
          setRole(response.data.user.role)
          console.log("baby")
      } catch (error) {
          console.log("error", error)
      }
    }
    
    useEffect(()=>{
      getUser()
    },[])
  console.log(role)
  return (
    <div>
      {role === "admin" && <Counsellerappointment/>}
      {role === "Cilent" && <Profilepage/>}
    </div>
  )
}

export default Appoinment
