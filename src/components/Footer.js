import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

//adding font awesome icons are left
export default function Footer() {
  return (
    <div className="relative mt-16 bg-indigo-600">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-indigo-600"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid grid-cols-1 gap-5 mb-8 row-gap-10 md:grid-cols-3">
          <div>
            <p className="font-semibold tracking-wide text-[#79DAE8]">
              Postal Adress
            </p>
            <p className="mt-2 space-y-2 text-purple-100">
              West wing, 2nd Floor, Abhinandan Bhawan, <br></br>
              Indian Institute of Technology Indore<br></br>
              Khandwa Road, Simrol,<br></br>
              Indore, Pin code 453 552, <br></br>
              Madhya Pradesh, India
            </p>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-[#79DAE8]">
              Contact Us
            </p>
            <p className=" mt-2 space-y-2 text-purple-100">
              <FontAwesomeIcon icon={faEnvelope} />
              <span> Mail us at:</span> <br></br>
              <a
                href="mailto:counsellor@iiti.ac.in"
                className="text-white hover:underline"
              >
                counsellor@iiti.ac.in
              </a>{" "}
              (Counsellor)
              <br></br>
              <a
                href="mailto:head-cs@iiti.ac.in"
                className="text-white hover:underline"
              >
                head-cs@iiti.ac.in
              </a>{" "}
              (Head, Counselling Services)
              <br></br>
              <a
                href="mailto:counsellingcell@iiti.ac.in"
                className="text-white hover:underline"
              >
                counsellingcell@iiti.ac.in
              </a>{" "}
              (Appointments)
              <br></br>
              <FontAwesomeIcon icon={faPhone} />
              <span> Phone:</span>
              +91 731- 660 (Ext. No. 3425)
            </p>
          </div>
          <div>
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Counselling Services
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="font-semibold tracking-wide text-[#79DAE8]">
                Website Created by:
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/ishaan-mittal-/"
                  className="text-white hover:underline"
                >
                  <FontAwesomeIcon icon={faCode} /> Ishaan Mittal
                </a>
                <br></br>
                <a
                  href="https://www.linkedin.com/in/shagun-ghatak-59a411230/"
                  className="text-white hover:underline"
                >
                  <FontAwesomeIcon icon={faCode} /> Shagun Ghatak
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-10 mx-4 border-t border-[#79DAE8] sm:flex-row text-center">
        <p className="text-sm text-gray-100 ">
          Copyright ©2023 All rights reserved by: Counselling Services - IIT
          Indore
        </p>
      </div>
    </div>
  );
}
