import React, { useState, useEffect } from 'react';
import './calendar.css';
import axios from 'axios';

const Calendar = (counselorName) => {
  const [date, setDate] = useState(new Date());
  const [availability, setAvailability] = useState({});
  const [userRole, setUserRole] = useState({});

  useEffect(() => {
    fetchAvailability(); 
    getUser();
  }, []);

  const fetchAvailability = async () => {
    try {
      const response = await axios.get(`http://localhost:6005/availability/${counselorName.counselorName}`);
      const availabilityData = response.data.reduce((acc, curr) => {
        acc[curr.date] = curr.status;
        return acc;
      }, {});
      setAvailability(availabilityData);
    } catch (error) {
      console.error('Error fetching availability:', error);
    }
  };

  const getUser = async () => {
    try {
        const response = await axios.get("http://localhost:6005/login/sucess", { withCredentials: true });
        setUserRole(response.data.user.role)
    } catch (error) {
        console.log("error", error)
    }
}
  
  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const renderCalendar = () => {
    const days = [];
    const currentDate = new Date();
    const numDays = daysInMonth(date.getFullYear(), date.getMonth());
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let day = 1; day <= numDays; day++) {
      const currentDateObj = new Date(date.getFullYear(), date.getMonth(), day);
      const dayStatus = availability[`${date.getFullYear()}-${(date.getMonth() + 1 < 10 ? '0' : '')}${date.getMonth() + 1}-${(day < 10 ? '0' : '')}${day}`] || '';
      days.push(
        <div
          key={day}
          className={`day ${currentDateObj < currentDate ? 'disabled' : ''} ${dayStatus === 'unavailable' ? 'unavailable' : 'available'}`}
          onClick={() => {
            if (currentDateObj >= currentDate) { // Check user role
              handleDayClick(day);
            }
          }}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const handleDayClick = async (day) => {
    const selectedDate = `${date.getFullYear()}-${(date.getMonth() + 1 < 10 ? '0' : '')}${date.getMonth() + 1}-${(day < 10 ? '0' : '')}${day}`;
    
    try {
      let currentStatus = availability[selectedDate]; // Check if availability exists
      
      // If availability doesn't exist, create a new object with status 'unavailable'
      if (!currentStatus) {
        currentStatus = 'unavailable';
        await axios.post(`http://localhost:6005/availability`, { date: selectedDate, status: currentStatus, counselorName: counselorName.counselorName });
      } else {
        // If availability exists, toggle the status
        currentStatus = currentStatus === 'unavailable' ? 'available' : 'unavailable';
        await axios.put(`http://localhost:6005/availability`, { date: selectedDate, status: currentStatus, counselorName: counselorName.counselorName });
      }
      
      // Update the availability state
      setAvailability(prevAvailability => ({
        ...prevAvailability,
        [selectedDate]: currentStatus 
      }));
    } catch (error) {
      console.error('Error toggling availability:', error);
    }
  };
  
  

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))}>&lt;</button>
        <h2>{monthNames[date.getMonth()]} {date.getFullYear()}</h2>
        <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))}>&gt;</button>
      </div>
      <div className="days">
        <div className="day">Sun</div>
        <div className="day">Mon</div>
        <div className="day">Tue</div>
        <div className="day">Wed</div>
        <div className="day">Thu</div>
        <div className="day">Fri</div>
        <div className="day">Sat</div>
        {renderCalendar()}
      </div>
    </div>
  );
};

export default Calendar;
