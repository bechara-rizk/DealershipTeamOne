import React, { useState } from 'react';
import { TextField, Button, FormControl, Paper } from '@material-ui/core';
import './AddCarForm.css';

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
  }

  const handlePictureChange = (e) => {
    setPicture(e.target.files[0]);
  }

  return (
    <Paper className="add-car-form-container" elevation={3}>
      <FormControl onSubmit={handleSubmit}>
        <TextField
          className="input-field"
          label="Make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          required
        />
        <TextField
          className="input-field"
          label="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />
        <TextField
          className="input-field"
          label="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
        <TextField
          className="input-field"
          label="Mileage"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
          required
        />
        <TextField
          className="input-field"
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <TextField
          className="input-field"
          label="Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
        <input
          className="input-field"
          type="file"
          accept="image/*"
          onChange={handlePictureChange}
        />
        <Button
          className="submit-button"
          type="submit"
          variant="contained"
          color="black"
        >
          Save
        </Button>
      </FormControl>
    </Paper>
  );
}

export default AddCarForm;
