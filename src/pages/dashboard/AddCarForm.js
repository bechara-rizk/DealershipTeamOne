import React, { useState } from 'react';

import Sidebar from '@/components/Sidebars';
import DashboardNavbar from '@/components/DashboardNavbar';

const AddCarForm = () => {
  const [vin, setVin] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [picture, setPicture] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  }

  const handlePictureChange = (e) => {
    setPicture(e.target.files[0]);
  }

  return (
    <>
   <DashboardNavbar /><Sidebar />
    <div className="add_car_form">
    
    <div className="add_car">
    <form className="add-car-form-container" onSubmit={handleSubmit}>
    <h2 className='Add-Car-Heading'>Add Car</h2>
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
      <label className="picture">
        Picture:
        <input
          className="input-field"
          type="file"
          accept="image/*"
          onChange={handlePictureChange} />
      </label>
      <button className="submit-button" type="submit">
        Add Car
      </button>
    </form></div></div>
 </>
  );
}

export default AddCarForm;
