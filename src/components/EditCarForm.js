import React, { useState } from 'react';


const CarInfo = ({ car, onEdit }) => {
  const [make, setMake] = useState(car.make);
  const [model, setModel] = useState(car.model);
  const [year, setYear] = useState(car.year);
  const [mileage, setMileage] = useState(car.mileage);
  const [color, setColor] = useState(car.color);
  const [price, setPrice] = useState(car.price);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedCar = {
      ...car,
      make,
      model,
      year,
      mileage,
      color,
      price
    };

    onEdit(updatedCar);
  };

  return (
    <form onSubmit={handleSubmit} className="car-info">
      <div>
        <label htmlFor="make">Make:</label>
        <input type="text" id="make" value={make} onChange={(event) => setMake(event.target.value)} />
      </div>
      <div>
        <label htmlFor="model">Model:</label>
        <input type="text" id="model" value={model} onChange={(event) => setModel(event.target.value)} />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input type="text" id="year" value={year} onChange={(event) => setYear(event.target.value)} />
      </div>
      <div>
        <label htmlFor="mileage">Mileage:</label>
        <input type="text" id="mileage" value={mileage} onChange={(event) => setMileage(event.target.value)} />
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input type="text" id="color" value={color} onChange={(event) => setColor(event.target.value)} />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" value={price} onChange={(event) => setPrice(event.target.value)} />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

const App = () => {
  const [car, setCar] = useState({
    vin: 'WAUBNAF47LN047401',
    make: 'Audi',
    model: 'A4',
    year: '2020',
    mileage: '10,000',
    color: 'Glacier White',
    price: '$32,500'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleCarEdit = (updatedCar) => {
    setCar(updatedCar);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <h1 className='TitleEditCar'>Edit Car Information</h1>
      {isEditing ? (
        <CarInfo car={car} onEdit={handleCarEdit} />
      ) : (
<div className="car-display">
      <h2>Car Information</h2>
      <table>
        <tbody>
          <tr>
            <th>VIN Number</th>
            <td>{car.vin}</td>
          </tr>
          <tr>
            <th>Make</th>
            <td>{car.make}</td>
          </tr>
          <tr>
            <th>Model</th>
            <td>{car.model}</td>
          </tr>
          <tr>
            <th>Year</th>
            <td>{car.year}</td>
          </tr>
          <tr>
            <th>Mileage</th>
            <td>{car.mileage}</td>
          </tr>
          <tr>
            <th>Color</th>
            <td>{car.color}</td>
          </tr>
          <tr>
            <th>Price</th>
            <td>{car.price}</td>
          </tr>
        </tbody>
      </table>
      <button className="edit-car-button" onClick={handleEditClick}>Edit Car Info</button>
    </div>
)}
</div>
);
};

export default App;




