import React from "react";
import {NavLink, Outlet} from 'react-router-dom';

export default function AllYears(){
    const NavLinkSytles = ({ isActive }) =>{
        return{
            color: isActive ? 'white' : 'black',
            background: isActive ? 'rgb(99 102 241)' : 'white',
        };
    }

    return(
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div class="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 sm:px-0 px-6 gap-5">
                <NavLink style={NavLinkSytles} to='Counsellors' className="sm:p-4 py-4 hover:text-indigo-600 rounded shadow-md text-center">
                    2023
                </NavLink>
                <NavLink style={NavLinkSytles} to='Head' className="p-4 rounded  shadow-md text-center">
                    2022
                </NavLink>
                <NavLink style={NavLinkSytles} to='coordinators' className="p-4 rounded  shadow-md text-center">
                    2020-21
                </NavLink>
                <NavLink style={NavLinkSytles} to='Office' className="p-4 rounded shadow-md text-center">
                    2019
                </NavLink>
                <NavLink style={NavLinkSytles} to='Eventk1718' className="p-4 rounded shadow-md text-center">
                    2017-18
                </NavLink>
            </div>
            <div class="shadow-xl border border-gray-100 font-light p-8 rounded text-gray-800 bg-white mt-6">
                <Outlet></Outlet>
            </div>
        </div>
    )
}