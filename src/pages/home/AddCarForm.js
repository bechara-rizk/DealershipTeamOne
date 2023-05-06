import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
     <div className='authButtons'>
        <img src='/images/logo.jpg' alt='logo' className='homepageLogo'/>
        <div className="dropdown">
          <button className="dropbtn">Log in <i className="arrowLogin down"></i>
          <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Login</a>
            <a href="#">Sign Up</a>
            <a href="#">Adminstrator login </a>
          </div>
   
      </div>
    </div>
     <Navbar />
    <h2 className='Add-Car-Heading'>Add Car</h2>
    <div className="add_car">
    <form className="add-car-form-container" onSubmit={handleSubmit}>

      <label>
        VIN:
        <input
          className="input-field"
          type="text"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
          required />
      </label>
      <label>
        Make:
        <input
          className="input-field"
          type="text"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          required />
      </label>
      <label>
        Model:
        <input
          className="input-field"
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required />
      </label>
      <label>
        Year:
        <input
          className="input-field"
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required />
      </label>
      <label>
        Mileage:
        <input
          className="input-field"
          type="text"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
          required />
      </label>
      <label>
        Price:
        <input
          className="input-field"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required />
      </label>
      <label>
        Color:
        <input
          className="input-field"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required />
      </label>
      <label>
        Picture:
        <input
          className="input-field"
          type="file"
          accept="image/*"
          onChange={handlePictureChange} />
      </label>
      <button className="submit-button" type="submit">
        Save
      </button>
    </form></div>
    <Footer /></>
    
  );
}

export default AddCarForm;
