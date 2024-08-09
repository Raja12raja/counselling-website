import React, { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL="http://localhost:6005/" // changed the PORT to 6005 from 8080

const Userprofile = () => {
  const [list,setList]=useState([])
  const [userdata, setUserdata] = useState({});
  const [Timechange,setTimechange] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const hideComponent = () => {
    setIsVisible(false);
  };

  const getUser = async () => {
      try {
          const response = await axios.get("/login/sucess", { withCredentials: true });
          console.log(response)
          setUserdata(response.data.user)
      } catch (error) {
          console.log("error", error)
      }
  }
  const getFetchData = async()=>{
     const data= await axios.get("/counselor/appointments")
     console.log(data)
     setList(data.data)
  }
  
  useEffect(() => {
    getUser()
  }, [])

  useEffect(()=>{
    getFetchData()
  },[])

  const updateYes= async(e)=>{
     console.log(e)
     e.status="confirmed"
     const data= await axios.put("/counselor/appointments",e);
     if(data.data.success){
       getFetchData()
       alert("Appointment confimed")
       window.location.href='http://localhost:3000/appointment';
     }
     setIsVisible(false);

  }
  const updateNo= async(e)=>{
     e.status=Timechange;
     console.log(Timechange);
     if(Timechange=="") return alert("please write reason for that")
     
     const data= await axios.put("/counselor/appointments",e);
     if(data.data.success){
       getFetchData()
       alert("Appointment Cancelled")
       window.location.href='http://localhost:3000/appointment';
     }
     setIsVisible(false);

  }
  console.log(list)

  const msg=(e)=>{
    console.log(e.target.value);
    setTimechange(e.target.value);
  }
  const colour=(value)=>{
    if(value=="pending"){
      return <div class="text-red-500 text-lg">Pending</div>;
    }
    if(value=="confirmed"){
      return <div class="text-green-500 text-lg">Confirmed</div>;
    }
    return <div class="text-blue-500 text-lg">Reschedulement</div>;
  };

  return (
    <div>
    <p class="mb-12 pb-4 text-center text-3xl font-bold">Appointments</p>
    {list.map((val, key) => {
      if(val.counselor===userdata.displayName){
        return (
          <div class="flex  w-full items-center justify-center m-4 flex-wrap ">
          <div class="w-full rounded-xl p-12 shadow-2xl shadow-green-200 md:w-8/12 lg:w-6/12 bg-white">
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div class="grid-cols-1 lg:col-span-3">
                <div class="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full bg-blue-100 p-4">
                  <svg id="logo-39" width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.0001 0L50 15.0098V24.9863L25.0001 40L0 24.9863V15.0099L25.0001 0Z" fill="#A5B4FC" class="ccompli2"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.0098L25 0L50 15.0098V24.9863L25 40L0 24.9863V15.0098ZM25 33.631L44.6967 21.8022V18.1951L44.6957 18.1945L25 30.0197L5.30426 18.1945L5.3033 18.1951V21.8022L25 33.631ZM25 24.5046L40.1018 15.4376L36.4229 13.2298L25 20.0881L13.5771 13.2298L9.89822 15.4376L25 24.5046ZM25 14.573L31.829 10.4729L25 6.37467L18.171 10.4729L25 14.573Z" fill="#4F46E5" class="ccustom"></path>
                    <path d="M25.0001 0L0 15.0099V24.9863L25 40L25.0001 0Z" fill="#A5B4FC" class="ccompli2" fill-opacity="0.3"></path>
                  </svg>
                </div>
              </div>
        
              <div class="col-span-1 lg:col-span-9">
                <div class="text-center lg:text-left">
                  <h2 class="text-2xl font-bold text-zinc-700">{val.user}</h2>
                  <p class="mt-2 font-semibold text-zinc-700">{val.date}</p>
                  <p class="mt-4 text-zinc-500">{val.time}</p>
                  <p class="mt-4 text-zinc-500">Statut/Remark : {colour(val.status)}</p>
                </div>
   <div class="flex mx-auto items-center justify-center shadow-lg mt-3 mx-8 mb-1 max-w-lg">
   <form class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
      <div class="flex flex-wrap -mx-3 mb-3">
         <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">
postponement of meeting</h2>
         <div class="w-full md:w-full px-3 mb-2 mt-2">
            <textarea  onInput={msg} class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your reason' required></textarea>
         </div>
         <div class="w-full md:w-full flex items-start md:w-full px-3">
            <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
               
            </div>
            
         </div>
    </div>
    </form>
    </div>
                {/* <input onInput={msg} ></input> */}
                <div class="mt-6 grid grid-cols-2 gap-4">
                  <button  onClick={()=> updateYes(val)} class="w-full rounded-xl border-2 border-black-500 bg-white px-3 py-2 font-semibold  hover:bg-green-400 hover:text-white">For Approval</button>
                  <button  onClick={()=> updateNo(val)} class="w-full rounded-xl border-2 border-black-500 bg-white px-3 py-2 font-semibold  hover:bg-red-400 hover:text-white">For Reschedulement</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
      }
    })}
      
    </div>
  );
};

export default Userprofile;
