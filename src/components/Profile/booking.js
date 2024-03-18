import React, { useEffect, useState } from 'react';
import { Datepicker, Input, initTE, Timepicker } from "tw-elements";
import axios from 'axios';

axios.defaults.baseURL="http://localhost:6005/" // changed the PORT to 6005 from 8080

const Booking = () => {
  const [user1,setUser1] = useState("");

  const getUser = async () => {
    try {
        const response = await axios.get("http://localhost:6005/login/sucess", { withCredentials: true });
        console.log(response.data.user.email)
        setUser1(response.data.user.email)
        console.log("raja")
    } catch (error) {
        console.log("error", error)
    }
  }
  
  useEffect(()=>{
    getUser()
  },[])

  const [list,setList]=useState([])
  const [dt, setdt] = useState({
      user: "",
      name: "",
      date: "",
      time: "",
      status:"pending"
  });
  
  const booked = async(e) => {

      e.preventDefault()
      console.log(dt)
      const data= await axios.post("/create",dt)
      console.log(data)
      if(data.data.success){
        alert("Appoinment booked");
        window.location.href='http://localhost:3000/booking';
      }
  }; 
  
  const handleOnchange=(e)=>{
      console.log(e.target.value)
      const {value,name}=e.target
      setdt((preve)=>{
         return{
           ...preve,
           [name]: value
         }
      })
  }
  const handleOnchange1=(e)=>{
      console.log(e.target.value)
      const {value,name}=e.target
      setdt((preve)=>{
         return{
           ...preve,
           [name]: value
         }
      })
  }

  const getFetchData = async()=>{
     const data= await axios.get("/")
     console.log(data)
     if(data.data.success){
       setList(data.data.data)
     }
  }
  
  useEffect(()=>{
     getFetchData()
  },[])

  
  useEffect(() => {
    initTE({ Datepicker, Input });
    const datepickerDisablePast = document.getElementById(
      "datepicker-disable-past"
      );
      new Datepicker(datepickerDisablePast, {
        disablePast: true,
    });
  }, []);

  useEffect(() => {
    initTE({ Input, Timepicker });
  }, []);

  const onChange1 = (event) => {
    console.log(event.target.value);
    const {value,name}=event.target
    setdt((preve)=>{
      return{
        ...preve,
        [name]: value
      }
    })
  }
  const onChange2 = (event) => {
    console.log(event.target.value);
    const {value,name}=event.target
    setdt((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })
  }
  return (
    <div>

      {/* <div className="consellers">
        <h2 className="h-mainheading">HISTORY</h2>
        <div className="c-querie">

          <div className="mx-auto pb-8 w-full max-w-7xl overflow-x-auto">
            <table className="px-4 min-w-full rounded-md border border-gray-200 overflow-hidden">

              <thead className="min-w-full bg-gray-100 text-left text-gray-700">
                <tr class="border-b border-info-200 bg-info-100 text-neutral-800 ">
                  <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col"> Name</th>
                  <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Date</th>
                  <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Time</th>
                  <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Status</th>
                </tr>
              </thead>

              <tbody className="">
                {list.map((val, key) => {
                  if (val.user === user1) {
                    return (
                      <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                        <td className="py-3 px-4 text-base text-gray-700 font-semibold">{val.name}</td>
                        <td className="py-3 px-4 text-base text-gray-500 font-medium">{val.date}</td>
                        <td className="py-3 px-4 text-base text-gray-500 font-medium">{val.time}</td>
                        <td className="py-3 px-4 text-base text-gray-500 font-medium">{val.status}</td>
                        <td className="py-3 px-4 text-base text-gray-500 font-medium">{val.user}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
  
<div class='flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br'>
		<div class='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
			<div class='max-w-md mx-auto space-y-6'>
        
				<form action="">
					<h2 class="text-2xl font-bold ">Book Appoinment</h2>
					<p class="my-4 opacity-70"></p>
					<hr class="my-6"/>
          <label for="counseller-selecter" >
          <select onInput={handleOnchange1} name="user" id="inputcons" className="b-counseller-select peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0">
            <option  value="">--Please choose an email--</option>
            <option value={user1}>{user1}</option>
          </select>
          </label>
          <label for="counseller-selecter" >
          <select onChange={handleOnchange} name='name' id="inputcons"class="w-full p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"  className="b-counseller-select peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0">
            <option  value="">--Please choose an Conseller--</option>
            <option value="Raja Thakur">Raja Thakur</option>
            <option value="liver">oliver</option>
            <option value="hamster">agastha</option>
          </select>
         </label>
					<div
        className="relative mb-3"
        id="datepicker-disable-past"
        data-te-input-wrapper-init
      >
        <input
         onInput={onChange1}
          name='date'
          type="text"
          class="p-3  mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
          className="peer mt-10 block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          placeholder="Select a date"
        />
        <label
          htmlFor="floatingInput"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Select a date
        </label>
        </div>
        <div
        className="relative"
        data-te-timepicker-init
        data-te-input-wrapper-init
      >
        <input
          onInput={onChange2}
          name='time'
          type="text"
          class="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
          className="peer mt-10 block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="form1"
        />
        <label
          htmlFor="form1"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Select a time
        </label>
        </div>
				  <button onClick={booked} className=" mt-10 bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4  max-w-[50%]">
            Submit
          </button>
				</form>

			</div>
		</div>
	  </div>
    </div>
    
  );
};

export default Booking;
