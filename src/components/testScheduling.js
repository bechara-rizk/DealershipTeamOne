
import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TestDriveScheduler() {
  const [selectedCar, setSelectedCar] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [scheduledTestDrives, setScheduledTestDrives] = useState([]);
  const [scheduledTestDrivesCounter, setScheduledTestDrivesCounter] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate) {
      alert('Please select a date.');
      return;
    }
    const scheduledDate = selectedDate.toISOString().slice(0, 10);
    // Check if selected time slot is already scheduled
    if (scheduledTestDrives.some(testDrive => testDrive.time === selectedTime && testDrive.date === scheduledDate)) {
      alert('Selected time slot is already scheduled. Please choose a different time slot.');
      return;
    }

    setScheduledTestDrives([...scheduledTestDrives, newTestDrive]);
    setSelectedCar('');
    setSelectedTime('');
    setScheduledTestDrivesCounter(scheduledTestDrivesCounter + 1); // Update counter

    const scheduleAnother = window.confirm('Would you like to schedule another test drive?');
    if (!scheduleAnother) {
      e.target.elements.date.value = '';
    }
  };

  // Calculate the next date
  const nextDay = new Date();
  nextDay.setDate(nextDay.getDate() + 1);
  const minDate = nextDay.toISOString().slice(0, 10);

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() +7);
  const maxDateFormatted = maxDate.toISOString().slice(0, 10);

  return (
    <div className="testDriveContainer">
      <div className="testDriveBox">
      <h1 className="testDriveTitle">  Schedule your test drive Now </h1>
        <p className="testDriveLabel">Select a car and available time slot to schedule a test drive.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="car" className="testDriveLabel">
            Car:
          </label>

          <select
          className='pleasebeblack'
            id="car"
            value={selectedCar}
            onChange={(e) => setSelectedCar(e.target.value)}
          >
            <option value="Select-A-TestCar">-- Select a car --</option>
            <option value="Audi A4">Audi A4</option>
          <option value="BMW 4 series">BMW 4 series</option>
          <option value="Mercedes-Benz C-Class">Mercedes-Benz C-Class</option>
          <option value="Lexus ES">Lexus ES</option>
          <option value="Infiniti Q50">Infiniti Q50</option>
          <option value="Volvo S60">Volvo S60</option>
          <option value="Acura TLX">Acura TLX</option>
          <option value="Cadillac CTS">Cadillac CTS</option>
          <option value="Lincoln MKZ">Lincoln MKZ</option>
          <option value="Genesis G80">Genesis G80</option>
          </select>
          <br />
          <label htmlFor="time" className="testDriveLabel">
            Time:
          </label>
          <select
            id="time"
            className='pleasebeblack'
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
          >

            <option value="">-- Select a time slot --</option>
            <option value="9:00am">9:00am</option>
            <option value="10:00am">10:00am</option>
            <option value="11:00am">11:00am</option>
            <option   value="12:00pm ">12:00pm </option>
            <option value="1:00pm  ">1:00pm </option>
           <option value="2:00pm ">2:00pm </option>
            <option value="3:00pm ">3:00pm </option>
           <option value="4:00pm ">4:00pm </option>
          </select>
          <br />
          <label htmlFor="date" className="testDriveLabel">
          Date:
        </label>
        <DatePicker
          className='pleasebeblack'
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={new Date(minDate)}
          maxDate={new Date(maxDateFormatted)}
          filterDate={(date) => date.getDay() !== 0}
          required
        />
          <br />
          <button type="submit" className="testDriveSubmit" disabled={scheduledTestDrivesCounter >= 3}>
            Schedule Test Drive
          </button>
        </form>
        {scheduledTestDrives.length > 0 && (
  <div>
    <h1 className='testDriveTitle'>Scheduled Test Drives:</h1>
    <ul>
      {scheduledTestDrives.map((testDrive, index) => (
        <li key={index} style={{ borderBottom: '1px solid #000', marginBottom: '10px', paddingBottom: '10px' }}>
          Test Drive Request for Car: {testDrive.car}, Time: {testDrive.time}, Date: {testDrive.date} has been scheduled Successfully

        </li>
      ))}
    </ul>
  </div>
)}
{scheduledTestDrivesCounter >= 3 && (
<p className="testDriveMessage">You have reached the maximum number of scheduled test drives (3).</p>
)}
</div>
</div>
);
}

export default TestDriveScheduler;
