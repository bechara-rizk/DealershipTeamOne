import React, { useState } from 'react';
import './carschedule.css';

function CarSchedulePage() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [car1Times, setCar1Times] = useState([]);
  const [car2Times, setCar2Times] = useState([]);


  const handleCarSelection = (carNum) => {
    setSelectedCar(carNum);
  };

  const handleTimeSelection = (time) => {
    if (selectedCar === 1) {
      if (car1Times.includes(time)) {
        setCar1Times(car1Times.filter((t) => t !== time));
      } else {
        setCar1Times([...car1Times, time]);
      }
    } else if (selectedCar === 2) {
      if (car2Times.includes(time)) {
        setCar2Times(car2Times.filter((t) => t !== time));
      } else {
        setCar2Times([...car2Times, time]);
      }
    }
  };

  const TimeSelector = () => {
    const availableTimes = ['9:00am','10:00am', '11:00am', '1:00pm', '2:00pm','3:00pm'];

    const handleTimeClick = (time) => {
      handleTimeSelection(time);
    };

    return (
      <div className="time-selector">
        {availableTimes.map((time) => (
          <button
            key={time}
            onClick={() => handleTimeClick(time)}
            disabled={selectedCar === null}
            className={
              selectedCar === 1 && car1Times.includes(time)
                ? 'selected'
                : selectedCar === 2 && car2Times.includes(time)
                ? 'selected'
                : ''
            }
          >
            {time}
          </button>
        ))}
      </div>
    );
  };
  const CarSelector = () => {
    const handleCarClick = (carNum) => {
      handleCarSelection(carNum);
    };

    return (
      <div className="car-selector">
        <h2>Select a car:</h2>
        <button onClick={() => handleCarClick(1)}>Audi A4</button>
        <button onClick={() => handleCarClick(2)}>BMW 4 series</button>
      </div>
    );
  };



  const SelectedTimes = () => {
    const selectedTimes = selectedCar === 1 ? car1Times : car2Times;

    return (
      <div className="selected-times">
        <h3>{selectedCar === 1 ? 'Audi A4' : 'BMW 4 series'} Avaiable::</h3>
        {selectedTimes.length === 0 ? (
          <p>No times selected</p>
        ) : (
          <ul>
            {selectedTimes.map((time) => (
              <li key={time}>{time}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const handleSaveChanges = () => {
    alert(
      `${selectedCar === 1 ? 'Audi A4' : 'BMW 4 series'} times saved: ${
        selectedCar === 1 ? car1Times.join(', ') : car2Times.join(', ')
      }`
    );
  };


  return (
    <div className="car-schedule-page">
      <h1>Car Schedule Page</h1>
      <CarSelector />
      {selectedCar !== null && (
        <>
          <h2> {selectedCar === 1 ? 'Audi A4' : 'BMW 4 series'}</h2>

          <TimeSelector />
          <SelectedTimes />
          <button name="SaveChanges" onClick={handleSaveChanges}>Save Changes</button>
        </>
      )}
    </div>
  );
}

export default CarSchedulePage;
