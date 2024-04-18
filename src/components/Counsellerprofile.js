import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile/CounsellorProfile.css';
import Calendar from './Profile/calendar';

axios.defaults.baseURL="http://localhost:6005/" // changed the PORT to 6005 from 8080

const CounsellorProfile = () => {
  const [list,setList]=useState([])
  const [user,setUser] = useState("");
  const [userdata, setUserdata] = useState({});

  const getUser = async () => {
      try {
          const response = await axios.get("http://localhost:6005/login/sucess", { withCredentials: true });
          console.log(response)
          setUser(response.data.user.email)
          setUserdata(response.data.user)
      } catch (error) {
          console.log("error", error)
      }
  }
  const getFetchData = async()=>{
     const data= await axios.get("/counselor/appointments")
     console.log(data)
     console.log(data.data)
     setList(data.data)
    
  }
  
  useEffect(() => {
    getUser()
  }, [])

  useEffect(()=>{
    getFetchData()
  },[])

  const colour=(value)=>{
    if(value=="confirmed"){
      return <div class="text-green-500 text-lg">Confirmed</div>;
    }
    if(value=="pending"){
      return <div class="text-red-500 text-lg">Cancelled</div>;
    }
    return <div class="text-brown-500 text-lg">{value}</div>;
  };


  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ padding: '5% 5%', margin: '3% 0', backgroundColor: 'rgb(244, 245, 247)' }}>
      <div className="row justify-content-center align-items-center" style={{ borderRadius: '10px', backgroundColor: 'white' }}>
        <div className="col-lg-8 mb-4 mb-lg-0">
          <div className="card mb-3" style={{ borderRadius: '.5rem', display: 'flex', flexDirection: 'row' }}>
            <div className="gradient-custom text-center text-white" style={{ flex: '30%', maxWidth: '30%', borderRadius: '.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <img src={userdata.image} alt="Avatar" className="img-fluid my-5 rounded-circle" style={{ width: '80px' }} />
              <h5>{userdata.displayName}</h5>
              <p>{userdata.role}</p>
              <i className="far fa-edit mb-5"></i>
            </div>
            <div className="col-md-8 user-info-container">
              <div className="card-body p-4">
                <h6>Information</h6>
                <hr className="mt-0 mb-4"></hr>
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>Email</h6>
                    <p className="text-muted py-2 text-base text-gray-400 font-medium">{userdata.email}</p>
                  </div>
                </div>
                <h6>Appointment Calendar</h6>
                <hr className="mt-0 mb-4"></hr>
                <div className="flex justify-center"> 
                  <div style={{ width: '80%' }}> 
                    <Calendar counselorName={userdata.displayName} />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-start">
                <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounsellorProfile;