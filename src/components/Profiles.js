import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Userprofile from './Userprofile';
import CounsellorProfile from './Counsellerprofile';

const Profiles = () => {
  
    const [role,setRole] = useState();
    const getUser = async () => {
      try {
          const response = await axios.get("http://localhost:6005/login/sucess", { withCredentials: true });
          console.log(response.data.user.role)
          setRole(response.data.user.role)
          console.log("raja")
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
      {role === "Client" && <Userprofile/>}
      {role === "Admin" && <CounsellorProfile/>}
    </div>
  )
}

export default Profiles
