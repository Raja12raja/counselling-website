import React from "react";
import { NavLink } from "react-router-dom";
import Modal from './Modal.js';
import "../App.css";

export default function Navbar() {
  return (
    <div>
      <div className="border-gray-200 px-2 sm:px-4 pt-2 bg-transparent">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex md:order-2">
          <Modal></Modal>
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
