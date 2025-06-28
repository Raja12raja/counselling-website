import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Counselor = () => {
  const { counselorId } = useParams();
  const [counselor, setCounselor] = useState(null);
  const [dt, setDt] = useState({
    date: "",
    time: "",
    status: "pending",
  });

  useEffect(() => {
    // Fetch logged-in user and pre-fill the user field
    const getUser = async () => {
      try {
        const response = await axios.get("http://localhost:6005/login/sucess", { withCredentials: true });
        setDt((prev) => ({ ...prev, user: response.data.user.email }));
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    // Fetch counselor details and pre-fill the counselor field
    const getCounselor = async () => {
      try {
        const response = await axios.get(`http://localhost:6005/api/counselors/${counselorId}`);
        setCounselor(response.data);
        setDt((prev) => ({ ...prev, counselorEmail: response.data.email }));
        setDt((prev) => ({ ...prev, counselor: response.data.name }));
      } catch (error) {
        console.error("Error fetching counselor details:", error);
      }
    };
    getCounselor();
  }, [counselorId]);

  const booked = async (e) => {
    e.preventDefault();
    if (!dt.date || !dt.time) {
      alert("Please enter correct entries");
      return;
    }
    try {
      const response = await axios.post("http://localhost:6005/counselor/appointments", dt);
      if (response.data.success) {
        alert("Appointment booked");
        window.location.href = 'http://localhost:3000/profiles';
      }
    } catch (error) {
      console.log("Error booking appointment:", error);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDt((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">{counselor.name}</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold">{counselor.counsellingType}</p>
            <p className="pt-4 text-base font-bold">{counselor.credentials}</p>
            <p className="pt-8 pb-8 text-sm">{counselor.Description}</p>

            {/* Booking Form */}
            <form onSubmit={booked}>
              <h2 className="text-2xl font-bold">Book Appointment</h2>
              <hr className="my-6" />
              <label htmlFor="date">Date:</label>
              <input
                type="text"
                name="date"
                onChange={handleOnChange}
                className="border-2 border-solid border-gray-900 mb-6 w-full rounded px-3 py-2"
              />
              <label htmlFor="time">Time:</label>
              <input
                type="text"
                name="time"
                onChange={handleOnChange}
                className="border-2 border-solid border-gray-900 mb-6 w-full rounded px-3 py-2"
              />
              <button type="submit" className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </form>
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

      <div className="flex justify-center items-center min-h-screen flex-col my-20">
        <h1 className="text-2xl font-bold text-center my-5">Scheduled events</h1>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=rt12122003%40gmail.com&ctz=Asia%2FKolkata"
          style={{ border: "0" }}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default Counselor;