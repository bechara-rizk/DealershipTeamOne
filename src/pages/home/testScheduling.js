import { useState } from 'react';

function TestDriveScheduler() {
  const [selectedCar, setSelectedCar] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [scheduledDateTime, setScheduledDateTime] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const scheduledDate = e.target.elements.date.value;
    console.log(`Selected car: ${selectedCar}`);
    console.log(`Selected time: ${selectedTime}`);
    console.log(`Scheduled date: ${scheduledDate}`);

    setScheduledDateTime(`${scheduledDate} at ${selectedTime} for ${selectedCar}`);
    const scheduleAnother = window.confirm('Would you like to schedule another test drive?');
    if (scheduleAnother) {
      setSelectedCar('');
      setSelectedTime('');
      e.target.elements.date.value = '';
    }
  };

  // Calculate the next date
  const nextDay = new Date();
  nextDay.setDate(nextDay.getDate() + 1);

  // Format the date for the input element
  const minDate = nextDay.toISOString().slice(0, 10);

  return (
    <>
      <h1 className='TestDriveTitle'>Test Drive Scheduler</h1>
      <p className='Select-A-Test-Car'>Select a car and available time slot to schedule a test drive.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="car-Test">Car:</label>
        <select id="car" value={selectedCar} onChange={(e) => setSelectedCar(e.target.value)}>
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
          <option value="Tesla Model 3">Tesla Model 3</option>
          <option value="Jaguar XE">Jaguar XE</option>
          <option value="Audi A6">Audi A6</option>
          <option value="BMW 5 seies">BMW 5 seies</option>
          <option value="Mercedes-Benz E-Class">Mercedes-Benz E-Class</option>
          <option value="Porshce Panamera">Porshce Panamera</option>
          <option value="Audi Q7">Audi Q7</option>
          <option value="BMW X5">BMW X5</option>
          <option value="Mercedes-Benz GLC">Mercedes-Benz GLC</option>
          <option value="Lexus XR">Lexus XR</option>
      
        </select>
        <br />
        <label htmlFor="time-Test">Time:</label>
        <select id="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required>
          <option value="">-- Select a time slot --</option>
          <option value="9:00am">9:00am</option>
          <option value="10:00am">10:00am</option>
          <option value="11:00am">11:00am</option>
          <option value="12:00pm ">12:00pm </option>
          <option value="1:00pm  ">1:00pm </option>
          <option value="2:00pm ">2:00pm </option>
          <option value="3:00pm ">3:00pm </option>
          <option value="4:00pm ">4:00pm </option>
        </select>
        <br />
        <label className="date-Test">Date:</label>
        <input className="Date2" type="date" id="date" min={minDate} max={minDate} required />
        <br />
        <button type="submit-Test">Schedule Test Drive</button>
      </form>
      {scheduledDateTime && <div><p>Your test drive for {scheduledDateTime} has been scheduled Successfully!</p></div>}
    </>
  );
}

export default TestDriveScheduler;
