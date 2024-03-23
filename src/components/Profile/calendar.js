import React, { useState, useEffect } from 'react';
import './calendar.css';
import axios from 'axios';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  let [availability, setAvailability] = useState({});
  let newd ;


  useEffect(() => {
    fetchAvailability(); 
  }, []);

  const fetchAvailability = async () => {
    try {
      const response = await axios.get(`http://localhost:6005/availability`);
      const availabilityData = response.data.reduce((acc, curr) => {
        acc[curr.date] = curr.status;
        return acc;
      }, {});
      console.log('Availability Data:', availabilityData);
      availability = availabilityData;
      setAvailability(availabilityData);
      console.log(availability)
    } catch (error) {
      console.error('Error fetching availability:', error);
    }
  };
  
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
    const numDays = daysInMonth(date.getFullYear(), date.getMonth());
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let day = 1; day <= numDays; day++) {
      const dayStatus = availability[`${date.getFullYear()}-${(date.getMonth() + 1 < 10 ? '0' : '')}${date.getMonth() + 1}-${(day < 10 ? '0' : '')}${day}`] || '';
      days.push(
        <div
          key={day}
          className={`day ${dayStatus === 'unavailable' ? 'unavailable' : 'available'}`}
          onClick={() => handleDayClick(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const handleDayClick = async (day) => {
    const currentStatus = availability[`${date.getFullYear()}-${(date.getMonth() + 1 < 10 ? '0' : '')}${date.getMonth() + 1}-${(day < 10 ? '0' : '')}${day}`] || '';
    console.log(`${date.getFullYear()}-${(date.getMonth() + 1 < 10 ? '0' : '')}${date.getMonth() + 1}-${(day < 10 ? '0' : '')}${day}`)
    console.log(currentStatus)
    const newStatus = currentStatus === 'unavailable' ? 'available' : 'unavailable';
    console.log(newStatus)
    const selectedDate = `${date.getFullYear()}-${(date.getMonth() + 1 < 10 ? '0' : '')}${date.getMonth() + 1}-${(day < 10 ? '0' : '')}${day}`;
    try {
      await axios.put(`http://localhost:6005/availability`, { date: selectedDate, status: newStatus });
      setAvailability(prevAvailability => ({
        ...prevAvailability,
        [selectedDate]: newStatus // Update availability for clicked day
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
