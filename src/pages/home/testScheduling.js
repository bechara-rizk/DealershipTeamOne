import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import AuthButtons from '@/components/AuthButtonsComp';

function TestDriveScheduler() {
  const [selectedCar, setSelectedCar] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [scheduledTestDrives, setScheduledTestDrives] = useState([]);
  const [scheduledTestDrivesCounter, setScheduledTestDrivesCounter] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  // Mock listings array
  const listings = [
    { make: 'Audi', model: 'A4' },
    // Add more listings here...
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate) {
      alert('Please select a date.');
      return;
    }
    const scheduledDate = selectedDate.toISOString().slice(0, 10);
    if (scheduledTestDrives.some(testDrive => testDrive.time === selectedTime && testDrive.date === scheduledDate)) {
      alert('Selected time slot is already scheduled. Please choose a different time slot.');
      return;
    }

    const newTestDrive = { car: selectedCar, time: selectedTime, date: scheduledDate };
    setScheduledTestDrives([...scheduledTestDrives, newTestDrive]);
    setSelectedCar('');
    setSelectedTime('');
    setScheduledTestDrivesCounter(scheduledTestDrivesCounter + 1);

    const scheduleAnother = window.confirm('Would you like to schedule another test drive?');
    if (!scheduleAnother) {
      e.target.elements.date.value = '';
    }
  };

  const nextDay = new Date();
  nextDay.setDate(nextDay.getDate() + 1);
  const minDate = nextDay.toISOString().slice(0, 10);

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() +7);
  const maxDateFormatted = maxDate.toISOString().slice(0, 10);

  return (

    <>
    <AuthButtons/>
    <div className="TestSchedulingUser"  >
      <Navbar />
      <div className="testDriveContainer">
    <div className="testDriveContainer"  >
      <div className="testDriveBox">
        <h1 className="testDriveTitle">Schedule your test drive Now</h1>
        <p className="testDriveLabel">Select a car and available time slot to schedule a test drive.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="car" className="testDriveLabel">Car:</label>
          <select
            className='pleasebeblack'
            id="carselect"
            value={selectedCar}
            onChange={(e) => setSelectedCar(e.target.value)}
            name='carclient'
          >
            <option value="" className='selectacar'>-- Select a car --</option>
            {listings.map((listing, index) => (
              <option key={index} value={listing.make + " " + listing.model}>{listing.make + " " + listing.model}</option>
            ))}
          </select>
          <br />
          <div className="date-picker-container">
            <label htmlFor="date" className="testDriveLabel">Date:</label>
            <DatePicker
              className='pleasebeblack2'
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={new Date(minDate)}
              maxDate={new Date(maxDateFormatted)}
              filterDate={(date) => date.getDay() !== 0}
              required
              name='dateclient'
              disabled={!selectedCar || selectedCar === 'Select-A-TestCar'}
            />
          </div>
          <br />
          <label htmlFor="time" className="testDriveLabelTime">Time:</label>
          <select
            id="time"
            className='pleasebeblack3'
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
            name='timeclient'
            disabled={!selectedCar || selectedCar === 'Select-A-TestCar' || !selectedDate}
          >
            <option value="">--  Select time --</option>
            <option value="9:00am">9:00am</option>
            <option value="10:00am">10:00am</option>
            <option value="11:00am">11:00am</option>
            <option value="12:00pm">12:00pm</option>
            <option value="1:00pm">1:00pm</option>
            <option value="2:00pm">2:00pm</option>
            <option value="3:00pm">3:00pm</option>
            <option value="4:00pm">4:00pm</option>
          </select>
          <br />
          <input type="text" hidden value={'bechara'} name="nameclient"/>
          <input type="text" hidden value={'becharaerizk@yahoo.com'} name="emailclient"/>
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
    </div>
    <Footer />
    </div>
    </>
  );
}

export default TestDriveScheduler;

             
