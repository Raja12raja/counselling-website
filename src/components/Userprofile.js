import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

  return (
    <div>
      <div>{userdata.displayName}</div>
      <div>{userdata.email}</div>
      <img src={userdata.image}></img>
      <div className="consellers">
        <h2 className="h-mainheading">HISTORY</h2>
        <div className="c-querie">

          <div className="mx-auto pb-8 w-full max-w-7xl overflow-x-auto">
            <table className="px-4 min-w-full rounded-md border border-gray-200 overflow-hidden">

              <thead className="min-w-full bg-gray-100 text-left text-gray-700">
                <tr class="border-b border-info-200 bg-info-100 text-neutral-800 ">
                  <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col"> Counsellors</th>
                  <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Date</th>
                  <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Time</th>
                  <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Status</th>
                </tr>
              </thead>

              <tbody className="">
                {list.map((val, key) => {
                  if(val.user===user){
                    return (
                      <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                        <td className="py-3 px-4 text-base text-gray-700 font-semibold">{val.name}</td>
                        <td className="py-3 px-4 text-base text-gray-500 font-medium">{val.date}</td>
                        <td className="py-3 px-4 text-base text-gray-500 font-medium">{val.time}</td>
                        <td className="py-3 px-4 text-base text-gray-500 font-medium">{val.status}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Userprofile;
