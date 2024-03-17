import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from './Modal.js';
import "../App.css";
import Wrapper from "./NewModal.jsx";
import axios from "axios"

export default function Navbar() {
  const [userdata, setUserdata] = useState({});
    console.log("response", userdata)
 
    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:6005/login/sucess", { withCredentials: true });

            setUserdata(response.data.user)
        } catch (error) {
            console.log("error", error)
        }
    }

    // logoout
    const logout = ()=>{
        window.open("http://localhost:6005/logout","_self")
    }

    useEffect(() => {
        getUser()
    }, [])
  return (
    <div>
      <div className="border-gray-200 px-2 sm:px-4 pt-2 bg-transparent">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex md:order-2">
          <Wrapper/>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col px-4 border border-gray-100 md:flex-row md:space-x-4 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
                <NavLink to="/" className="block hover:text-indigo-600">
                  <button class="py-1 px-3">Home</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="block hover:text-indigo-600">
                  <button class="py-1 px-3">About Us</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/information"
                  className="block hover:text-indigo-600"
                >
                  <button class="py-1 px-3">Information</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" className="block hover:text-indigo-600">
                  <button class="py-1 px-3">Events</button>
                </NavLink>
              </li>
              {/*  */}
              { Object?.keys(userdata)?.length > 0 ? (
                  <>
                  <li style={{color:"black",fontWeight:"bold"}}>{ "Hi, " + userdata?.displayName}</li>
                    <li>
                         
                      </li>
                      <li>
                          <NavLink to="/home" className="block hover:text-indigo-600">
                          <button class="py-1 px-3" onClick={logout}>Logout</button>
                          </NavLink> 
                         {/* onClick={logout}>Logout */}
                      </li>
                      <li>
                          <img src={userdata?.image} style={{ width: "50px", borderRadius: "50%" }} alt="" />
                    </li>
                  </>
              ) : <li>
              <NavLink to="/login" className="block hover:text-indigo-600">
                <button class="py-1 px-3">Login</button>
              </NavLink>
            </li>
                  }
           
           
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
