import React, { useState } from 'react';

const EditCarForm = ({ initialCar, onClose }) => {
  const [vin, setVin] = useState(initialCar ? initialCar.vin : '');
  const [make, setMake] = useState(initialCar ? initialCar.make : '');
  const [model, setModel] = useState(initialCar ? initialCar.model : '');
  const [year, setYear] = useState(initialCar ? initialCar.year : '');
  const [mileage, setMileage] = useState(initialCar ? initialCar.mileage : '');
  const [price, setPrice] = useState(initialCar ? initialCar.price : '');
  const [color, setColor] = useState(initialCar ? initialCar.color : '');
  const [picture, setPicture] = useState(initialCar ? initialCar.picture : null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const handlePictureChange = (e) => {
    setPicture(e.target.files[0]);
  };

  return (
    <div className="side-content">
      <div className="edit_car_form">
        <div className="edit_car">
          <form className="edit-car-form-container" onSubmit={handleSubmit}>
            <h2 className='Edit-Car-Heading'>Edit Car</h2>
            <div className="inputs_margin">
              <label className="vin">
                VIN:
                <input
                  className="input-field"
                  type="text"
                  value={vin}
                  onChange={(e) => setVin(e.target.value)}
                  required />
              </label>
              <label className="make">
                Make:
                <input
                  className="input-field"
                  type="text"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  required />
              </label>
            </div>
            <div className="inputs_margin">
              <label className="model">
                Model:
                <input
                  className="input-field"
                  type="text"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  required />
              </label>
              <label className="year">
                Year:
                <input
                  className="input-field"
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required />
              </label>
            </div>
            <div className="inputs_margin">
              <label className="mileage">
                Mileage:
                <input
                  className="input-field"
                  type="text"
                  value={mileage}
                  onChange={(e) => setMileage(e.target.value)}
                  required />
              </label>
              <label className="price">
                Price:
                <input
                  className="input-field"
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required />
              </label>
            </div>
            <label className="color">
              Color:
              <input
                className="input-field"
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required />
            </label>
            <label className="picturecaredit">
              Picture:
              <input
                className="input-field"
                type="file"
                accept="image/*"
                onChange={handlePictureChange} />
            </label>
            <div className="form-buttons">
              <button className="submit-button" type="submit">
                Edit Car
              </button>
              <button className="cancel-button" onClick={onClose}>
                Cancel
</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditCarForm;
