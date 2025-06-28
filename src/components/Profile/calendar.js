import React, { useState, useEffect } from 'react';
import './calendar.css';
import axios from 'axios';

const Calendar = ({ counselorName }) => {
  const [date, setDate] = useState(new Date());
  const [availability, setAvailability] = useState({});
  const [appointments, setAppointments] = useState({});
  const [userRole, setUserRole] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    if (counselorName) {
      fetchAppointments();
    }
    getUser();
  }, [counselorName]);

  console.log('counselorName:', counselorName);

  const fetchAppointments = async () => {
    if (!counselorName) {
      console.log('No counselor name provided');
      return;
    }
    
    try {
      const response = await axios.get(`http://localhost:6005/counselor/appointments/${counselorName}`);
      console.log('url', `http://localhost:6005/counselor/appointments/${counselorName}`);
      const appointmentData = response.data.reduce((acc, curr) => {
        // Group appointments by date
        if (!acc[curr.date]) {
          acc[curr.date] = [];
        }
        acc[curr.date].push(curr);
        return acc;
      }, {});
      console.log('appointmentData:', appointmentData);
      setAppointments(appointmentData);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const getUser = async () => {
    try {
        const response = await axios.get("http://localhost:6005/login/sucess", { withCredentials: true });
        setUserRole(response.data.user.role);
        setUser(response.data.user.displayName);
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

  const getDayStatus = (day) => {
    const currentDateObj = new Date(date.getFullYear(), date.getMonth(), day);
    const currentDate = new Date();
    
    // Create date objects without time for proper comparison
    const currentDateOnly = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const dayDateOnly = new Date(currentDateObj.getFullYear(), currentDateObj.getMonth(), currentDateObj.getDate());
    
    // If date is in the past (before today), return disabled
    if (dayDateOnly < currentDateOnly) {
      return 'disabled';
    }
    
    const dateString = `${date.getFullYear()}-${(date.getMonth() + 1 < 10 ? '0' : '')}${date.getMonth() + 1}-${(day < 10 ? '0' : '')}${day}`;
    
    // Check if there are confirmed appointments on this date
    if (appointments[dateString] && appointments[dateString].length > 0) {
      // Check if any appointment on this date is confirmed
      const hasConfirmedAppointment = appointments[dateString].some(appointment => appointment.status === 'confirmed');
      if (hasConfirmedAppointment) {
        return 'appointment'; // Red - has confirmed appointment
      }
    }
    
    return 'available'; // Green - available
  };

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
      const dayStatus = getDayStatus(day);
      
      days.push(
        <div
          key={day}
          className={`day ${dayStatus}`}
          onClick={() => {
            if (currentDateObj >= currentDate && userRole == 'Admin')  { // Check user role
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
        await axios.post(`http://localhost:6005/availability`, { date: selectedDate, status: currentStatus, counselorName: counselorName });
      } else {
        // If availability exists, toggle the status
        currentStatus = currentStatus === 'unavailable' ? 'available' : 'unavailable';
        await axios.put(`http://localhost:6005/availability`, { date: selectedDate, status: currentStatus, counselorName: counselorName });
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
      <div className="legend">
        <div className="legend-item">
          <div className="legend-color available"></div>
          <span>Available</span>
        </div>
        <div className="legend-item">
          <div className="legend-color appointment"></div>
          <span>Has Appointment</span>
        </div>
        <div className="legend-item">
          <div className="legend-color unavailable"></div>
          <span>Unavailable</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
