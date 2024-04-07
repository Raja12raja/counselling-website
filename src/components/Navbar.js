
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import Wrapper from "./NewModal.jsx";
import axios from "axios";
import Userprofile from "./Userprofile.js";
import { display } from "@mui/system";

export default function Navbar() {
  const [userdata, setUserdata] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  console.log("response", userdata);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:6005/login/sucess", {
        withCredentials: true,
      });
      setUserdata(response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  };
  const loginwithgoogle = ()=>{
    window.open("http://localhost:6005/auth/google/callback","_self")
}

  const logout = () => {
    window.open("http://localhost:6005/logout", "_self");
  };

  const navigateToProfiles = () => {
    window.location.href = "/profiles";
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <div class="bg-white-900 ">
        <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="relative flex items-center justify-between z-10">
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li>
                <NavLink to="/" className="block hover:text-indigo-600">
                  <button class="py-1 px-3">Home</button>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block hover:text-indigo-600"
                >
                  <button class="py-1 px-3">About Us</button>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/information"
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
              {Object?.keys(userdata)?.length > 0 ? (
                <>
                  <li>
                    <div
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img
                        src={userdata.image}
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                        }}
                        alt=""
                      />
                        {dropdownOpen && (
                          <div className="absolute top-10 left-0 z-10">
                            <div className="bg-white border rounded shadow-sm p-2">
                              <button
                                className="block w-full py-2 px-4 text-left"
                                onClick={navigateToProfiles}
                              >
                                Hi, {userdata?.displayName}
                              </button>
                              <button
                                className="block w-full py-2 px-4 text-left mt-2"
                                onClick={logout}
                              >
                                Logout
                              </button>
                            </div>
                          </div>
                        )}
                    </div>
                  </li>
                </>
              ) : (
                <li>
                  <button className="block hover:text-indigo-600 py-1 px-3" 
                  onClick={loginwithgoogle} > Appointment </button>
                </li>
              )}
              <li>
                <Wrapper />
              </li>
            </ul>
            <div class="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full">
                  <div class="p-5 bg-white border rounded shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y4">
                        <li>
                          <Wrapper />
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import "../App.css";
// import Wrapper from "./NewModal.jsx";
// import axios from "axios"
// import Userprofile from "./Userprofile.js"
// import { display } from "@mui/system";

// export default function Navbar() {
//   const [userdata, setUserdata] = useState({});
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };


//     console.log("response", userdata)
 
//     const getUser = async () => {
//         try {
//             const response = await axios.get("http://localhost:6005/login/sucess", { withCredentials: true });
//             setUserdata(response.data.user)
//         } catch (error) {
//             console.log("error", error)
//         }
//     }

//     // logoout
//     const logout = ()=>{
//         window.open("http://localhost:6005/logout","_self")
//     }

//     useEffect(() => {
//         getUser()
//     }, [])

//   return (
//     <div>
//        <div class="bg-white-900 ">
//       <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
//         <div class="relative flex items-center justify-between z-10">
//           <ul class="flex items-center hidden space-x-8 lg:flex">
//               <li>
//                 <NavLink to="/" className="block hover:text-indigo-600">
//                   <button class="py-1 px-3">Home</button>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/about" className="block hover:text-indigo-600">
//                   <button class="py-1 px-3">About Us</button>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/information"
//                   className="block hover:text-indigo-600"
//                 >
//                   <button class="py-1 px-3">Information</button>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/events" className="block hover:text-indigo-600">
//                   <button class="py-1 px-3">Events</button>
//                 </NavLink>
//               </li>
//               { Object?.keys(userdata)?.length > 0 ? (
//                   <>
//                       <li>
//                           <NavLink to="/home" className="block hover:text-indigo-600">
//                           <button class="py-1 px-3" onClick={logout}>Logout</button>
//                           </NavLink> 
//                       </li>
//                       <li>
//                           <NavLink to="/profiles" className="block hover:text-indigo-100">
//                           <button class="py-1 px-3" >{ "Hi, " + userdata?.displayName}</button>
//                           </NavLink> 
//                       </li>
//                       <img src={userdata.image} style={{ height: "50px" ,width: "50px", borderRadius: "50%" }} alt=""/> 
//                       {dropdownOpen && (
//                <div className="dropdown-menu">
//               <a href="#">Option 1</a>
//               <a href="#">Option 2</a>
//               <a href="#">Option 3</a>
//                 </div>
//                 )}
//                   </>
//               ) :
//               <li>
//               <NavLink to="/login" className="block hover:text-indigo-600">
//                 <button class="py-1 px-3">Login</button>
//               </NavLink>
//               </li>
//                   }
//             <li>
//                  <Wrapper/>
                 
//               </li>
//           </ul>
//           <div class="lg:hidden">
//             <button
//               aria-label="Open Menu"
//               title="Open Menu"
//               class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
//               onClick={() => setIsMenuOpen(true)}
//             >
//               <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
//                 <path
//                   fill="currentColor"
//                   d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
//                 />
//                 <path
//                   fill="currentColor"
//                   d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
//                 />
//                 <path
//                   fill="currentColor"
//                   d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
//                 />
//               </svg>
//             </button>
//             {isMenuOpen && (
//               <div class="absolute top-0 left-0 w-full">
//                 <div class="p-5 bg-white border rounded shadow-sm">
//                   <div class="flex items-center justify-between mb-4">
//                     <div>
//                       <button
//                         aria-label="Close Menu"
//                         title="Close Menu"
//                         class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
//                           <path
//                             fill="currentColor"
//                             d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                   <nav>
//                     <ul class="space-y-4">
//               <li>
//                 <NavLink to="/" className="block hover:text-indigo-600">
//                   <button class="py-1 px-3">Home</button>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/about" className="block hover:text-indigo-600">
//                   <button class="py-1 px-3">About Us</button>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/information"
//                   className="block hover:text-indigo-600"
//                 >
//                   <button class="py-1 px-3">Information</button>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/events" className="block hover:text-indigo-600">
//                   <button class="py-1 px-3">Events</button>
//                 </NavLink>
//               </li>
//               { Object?.keys(userdata)?.length > 0 ? (
//                   <>
//                       <li>
//                           <NavLink to="/home" className="block hover:text-indigo-600">
//                           <button class="py-1 px-3" onClick={logout}>Logout</button>
//                           </NavLink> 
//                       </li>
//                       <li>
//                           <NavLink to="/profiles" className="block hover:text-indigo-100">
//                           <button class="py-1 px-3" >{ "Hi, " + userdata?.displayName}</button>
//                           </NavLink> 
//                       </li>
//                       <img src={userdata.image} style={{ height: "50px" ,width: "50px", borderRadius: "50%" }} alt=""/> 
//                   </>
//               ) :
//               <li>
//               <NavLink to="/login" className="block hover:text-indigo-600">
//                 <button class="py-1 px-3">Login</button>
//               </NavLink>
//               </li>
//                   }
//               <li>
//                  <Wrapper/>
                 
//               </li>
//                     </ul>
//                   </nav>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* <div className="border-gray-200 px-2 sm:px-4 pt-2 bg-transparent">
//         <div className="container flex flex-wrap items-center justify-between mx-auto">
//           <div className="flex md:order-2">
//           </div>
//           <div
//             className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//             id="navbar-cta"
//           >
//             <ul className="flex flex-col px-4 border border-gray-100 md:flex-row md:space-x-4 md:text-sm md:font-medium md:border-0 md:bg-white">
//               <li>
//                 <NavLink to="/" className="block hover:text-indigo-600">
//                   <button class="py-1 px-3">Home</button>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/about" className="block hover:text-indigo-600">
//                   <button class="py-1 px-3">About Us</button>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/information"
//                   className="block hover:text-indigo-600"
//                 >
//                   <button class="py-1 px-3">Information</button>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/events" className="block hover:text-indigo-600">
//                   <button class="py-1 px-3">Events</button>
//                 </NavLink>
//               </li>
//               { Object?.keys(userdata)?.length > 0 ? (
//                   <>
//                       <li>
//                           <NavLink to="/home" className="block hover:text-indigo-600">
//                           <button class="py-1 px-3" onClick={logout}>Logout</button>
//                           </NavLink> 
//                       </li>
//                       <li>
//                           <NavLink to="/profiles" className="block hover:text-indigo-100">
//                           <button class="py-1 px-3" >{ "Hi, " + userdata?.displayName}</button>
//                           </NavLink> 
//                       </li>
//                       <img src={userdata.image} style={{ height: "50px" ,width: "50px", borderRadius: "50%" }} alt=""/> 
//                   </>
//               ) :
//               <li>
//               <NavLink to="/login" className="block hover:text-indigo-600">
//                 <button class="py-1 px-3">Login</button>
//               </NavLink>
//               </li>
//                   }
             
//             </ul>
//           </div>
//         </div>
//       </div> */}





        
        
//       </div>
      
//   );
// }
