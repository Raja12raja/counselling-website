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
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get current date and time for min values
  const today = new Date().toISOString().split('T')[0];
  const currentTime = new Date().toTimeString().slice(0, 5);

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
      alert("Please select both date and time");
      return;
    }
    
    setIsSubmitting(true);
    try {
      const response = await axios.post("http://localhost:6005/counselor/appointments", dt);
      if (response.data.success) {
        alert("Appointment booked successfully!");
        window.location.href = 'http://localhost:3000/profiles';
      }
    } catch (error) {
      console.log("Error booking appointment:", error);
      alert("Failed to book appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
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
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-700"></div>
      </div>
    );
  }

  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen pt-20">
      {/* Profile and Booking Form Section */}
      <div className="max-w-6xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-16 lg:my-8 px-4 lg:px-8">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-xl lg:rounded-l-xl lg:rounded-r-none shadow-2Fxl bg-white/95 backdrop-blur-sm mx-6 lg:mx-0"
        >
          <div className="p-10 md:p-12 text-center lg:text-left">
            <h1 className="text-4xl font-bold pt-8 lg:pt-0 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">{counselor.name}</h1>
            
            {/* Description Section */}
            <div className="pt-6 pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">About Me</h3>
              <p className="text-sm leading-relaxed text-gray-600 bg-gray-50 rounded-lg p-4 border-l-4 border-green-500">
                {counselor.Description}
              </p>
            </div>

            {/* Improved Booking Form */}
            <div className="bg-gradient-to-r from-gray-50 via-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-gray-200/50">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Book Your Appointment</h2>
              <form onSubmit={booked} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date Picker */}
                  <div className="space-y-2">
                    <label htmlFor="date" className="block text-sm font-semibold text-gray-700">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={dt.date}
                      onChange={handleOnChange}
                      min={today}
                      required
                      className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg focus:ring-3 focus:ring-green-200 focus:border-green-500 transition-all duration-300 ease-in-out hover:border-gray-300 bg-white shadow-sm"
                      placeholder="Select date"
                    />
                    <p className="text-xs text-gray-500 flex items-center">
                      <span className="mr-1">📅</span>
                      Please select a future date
                    </p>
                  </div>

                  {/* Time Picker */}
                  <div className="space-y-2">
                    <label htmlFor="time" className="block text-sm font-semibold text-gray-700">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={dt.time}
                      onChange={handleOnChange}
                      min="09:00"
                      max="18:00"
                      required
                      className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg focus:ring-3 focus:ring-green-200 focus:border-green-500 transition-all duration-300 ease-in-out hover:border-gray-300 bg-white shadow-sm"
                      placeholder="Select time"
                    />
                    <p className="text-xs text-gray-500 flex items-center">
                      <span className="mr-1">⏰</span>
                      Available hours: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                {/* Counselor Info Display */}
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="mr-2">👨‍⚕️</span>
                    Appointment Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <div className="font-semibold text-gray-600 min-w-[80px]">Counselor:</div>
                      <div className="ml-2 text-gray-800 font-medium">{counselor.name}</div>
                    </div>
                    <div className="flex items-center">
                      {/* <div className="font-semibold text-gray-600 min-w-[80px]">Specialization:</div>
                      <div className="ml-2 text-gray-800 font-medium">{counselor.counsellingType}</div> */}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting || !dt.date || !dt.time}
                    className={`w-full md:w-auto px-8 py-3 rounded-lg font-bold text-white transition-all duration-300 ease-in-out transform hover:scale-105 ${
                      isSubmitting || !dt.date || !dt.time
                        ? 'bg-gray-400 cursor-not-allowed shadow-none'
                        : 'bg-gradient-to-r from-green-600 via-green-500 to-green-700 hover:from-green-700 hover:via-green-600 hover:to-green-800 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Booking...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <span className="mr-2">📅</span>
                        Book Appointment
                      </div>
                    )}
                  </button>
                </div>

                {/* Terms and Conditions */}
                <div className="text-center pt-2">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    By booking this appointment, you agree to our terms and conditions. 
                    You will receive a confirmation email shortly.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <img
            src={counselor.img}
            className="rounded-xl lg:rounded-l-none lg:rounded-r-xl shadow-2xl hidden lg:block w-full h-auto object-cover"
            alt={counselor.name}
          />
        </div>
      </div>

      {/* Scheduled Events Section - Separated */}
      <div className="mt-20 w-full bg-white/80 backdrop-blur-sm py-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Scheduled Events</h1>
          <div className="w-full max-w-5xl mx-auto">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=rt12122003%40gmail.com&ctz=Asia%2FKolkata"
              style={{ border: "0" }}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              className="rounded-xl shadow-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counselor;