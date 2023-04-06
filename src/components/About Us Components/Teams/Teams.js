import React from "react";
import {NavLink, Outlet} from 'react-router-dom';
//need to update the default page view of our teams i.e. page at about/

export default function Teams(){
    const NavLinkSytles = ({ isActive }) =>{
        return{
            color: isActive ? 'white' : 'black',
            background: isActive ? 'rgb(99 102 241)' : 'white',
        };
    }

    return(
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <h2 className="max-w-lg py-10 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
            OUR TEAM
            </h2>
            <div class="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 sm:px-0 px-6 gap-5">
                <NavLink style={NavLinkSytles} to='Counsellors' className="sm:p-4 py-4 hover:text-indigo-600 rounded shadow-md text-center">
                    Counsellors
                </NavLink>
                <NavLink style={NavLinkSytles} to='Head' className="p-4 rounded  shadow-md text-center">
                    Head, CS
                </NavLink>
                <NavLink style={NavLinkSytles} to='UG' className="p-4 rounded  shadow-md text-center">
                    UG Team
                </NavLink>
                <NavLink style={NavLinkSytles} to='PG' className="p-4 rounded  shadow-md text-center">
                    PG Team
                </NavLink>
                <NavLink style={NavLinkSytles} to='Office' className="p-4 rounded shadow-md text-center">
                    Office
                </NavLink>
                <NavLink style={NavLinkSytles} to='Committee' className="p-4 rounded shadow-md text-center">
                    Committee
                </NavLink>
            </div>
            <div class="shadow-xl border border-gray-100 font-light p-8 rounded text-gray-500 bg-white mt-6">
                <Outlet></Outlet>
            </div>
        </div>
    )
}