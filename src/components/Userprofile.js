import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './userprofile.css';

axios.defaults.baseURL="http://localhost:6005/" // changed the PORT to 6005 from 8080

const Userprofile = () => {
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
     const data= await axios.get("/")
     console.log(data)
     if(data.data.success){
       setList(data.data.data)
     }
  }
  
  useEffect(() => {
    getUser()
  }, [])

  useEffect(()=>{
    getFetchData()
  },[])

  const colour=(value)=>{
    if(value=="cancelled"){
      return <div class="text-red-500 text-lg">Cancelled</div>;
    }
    if(value=="confirmed"){
      return <div class="text-green-500 text-lg">Confirmed</div>;
    }
    return <div class="text-black-500 text-lg">Pending</div>;
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
                <h6>History</h6>
                <hr className="mt-0 mb-4"></hr>
                <div className="c-querie history-container">
                  <div className="mx-auto w-full max-w-7xl overflow-x-auto">
                    <table className="px-4 min-w-full rounded-md border border-gray-200 overflow-hidden">
                      <thead className="min-w-full bg-gray-100 text-left text-gray-700">
                        <tr className="border-b border-info-200 bg-info-100 text-neutral-800">
                          <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col"> Counsellors</th>
                          <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Date</th>
                          <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Time</th>
                          <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {list.map((val, key) => {
                          if (val.user === user) {
                            return (
                              <tr key={key} className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                <td className="py-3 px-4 text-base text-gray-700 font-semibold">{val.name}</td>
                                <td className="py-3 px-4 text-base text-gray-500 font-medium">{val.date}</td>
                                <td className="py-3 px-4 text-base text-gray-500 font-medium">{val.time}</td>
                                <td className="py-3 px-4 text-base text-gray-500 font-medium">{colour(val.status)}</td>
                              </tr>
                            );
                          }
                          return null;
                        })}
                      </tbody>
                    </table>
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

export default Userprofile;