import React, { useState } from 'react';

const AddCarForm = () => {
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
    <form className="add-car-form-container" onSubmit={handleSubmit}>
      <label>
        Make:
        <input
          className="input-field"
          type="text"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          required
        />
      </label>
      <label>
        Model:
        <input
          className="input-field"
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />
      </label>
      <label>
        Year:
        <input
          className="input-field"
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </label>
      <label>
        Mileage:
        <input
          className="input-field"
          type="text"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
          required
        />
      </label>
      <label>
        Price:
        <input
          className="input-field"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <label>
        Color:
        <input
          className="input-field"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
      </label>
      <label>
        Picture:
        <input
          className="input-field"
          type="file"
          accept="image/*"
          onChange={handlePictureChange}
        />
      </label>
      <button className="submit-button" type="submit">
        Save
      </button>
    </form>
  );
}

export default AddCarForm;
