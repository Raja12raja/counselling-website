import React from 'react';
import {Link} from "react-router-dom"
import '../App.css'

export default function Navbar() {
    return (
        <div>
            <div class="border-gray-200 px-2 sm:px-4 py-2.5 bg-transparent">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
            <div class="flex md:order-2">
            <button type="button" class="text-white bg-[#7286D3] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Get started</button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
            <Link to="/" class="block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Home</Link>
            </li>
            <li>
            <Link to="/about" class="block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About Us</Link>
            </li>
            <li>
            <Link to="/information" class="block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Information</Link>
            </li>
            <li>
            <Link to="/events" class="block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Events</Link>
            </li>
            </ul>
            </div>
            </div>
            </div>
        </div>
    )
}