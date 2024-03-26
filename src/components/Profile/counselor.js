import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from "./calendar";

const Counselor = () => {
  const { counselorId } = useParams();
  const [counselor, setCounselor] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:6005/api/counselors/${counselorId}`)
      .then(response => response.json())
      .then(data => {
        setCounselor(data);
        console.log(data);
        console.log("hello");
      })
      .catch(error => {
        console.error('Error fetching counselor details:', error);
      });
  }, [counselorId]);

  if (!counselor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
            ></div>

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">{counselor.name}</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              {counselor.counsellingType}
            </p>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              {counselor.credentials}
            </p>

            <p className="pt-8 pb-8 text-sm">
              {counselor.Description}
            </p>
            <a className=" text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-10" href='/booking'>Book Now</a>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <img
            src={counselor.img}
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            alt={counselor.name}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 pl-4">
          <Calendar 
            counselorName={counselor.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Counselor;
