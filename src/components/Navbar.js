import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import {
  Modal,
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Modal, Ripple });

export default function Navbar() {
  return (
    <div>
      <div className="border-gray-200 px-2 sm:px-4 pt-2 bg-transparent">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex md:order-2">
            
            {/* Button trigger modal */}
            <button
              type="button"
              class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-toggle="modal"
              data-te-target="#exampleModal"
              data-te-ripple-init
              data-te-ripple-color="light">
              Events
            </button>

            {/* Modal */}
            <div
              data-te-modal-init
              class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div
                data-te-modal-dialog-ref
                class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                <div
                  class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                  <div
                    class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                    {/* Modal title */}
                    <h5
                      class="text-xl font-medium leading-normal text-neutral-800"
                      id="exampleModalLabel">
                      EVENTS
                    </h5>
                    {/* Close button */}
                    <button
                      type="button"
                      class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                      data-te-modal-dismiss
                      aria-label="Close">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Modal body */}
                  <div class="relative flex-auto p-4" data-te-modal-body-ref>
                    Modal body text goes here.
                  </div>

                  {/* Modal footer */}
                  <div
                    class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
                    <button
                      type="button"
                      class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                      data-te-modal-dismiss
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
