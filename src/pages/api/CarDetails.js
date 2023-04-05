import { useState } from 'react';
import Audi from './images/audia4.PNG';
import BMW from './images/bmw4series.PNG';
import Mercedes from './images/Mercedes.PNG';

const cars = [
  {
    id: 1, 
    make: 'Audi',
    model: 'A4',
    year: 2020,
    mileage: '10,000',
    color: 'Glacier White',
    price: '$32,500',
    picture: Audi,
  },
  {
    id: 2,
    make: 'BMW',
    model: '4 series',
    year: 2018,
    mileage: '20,000',
    color: 'Black Sapphire Metallic',
    price: '$28,000',
    picture: BMW,
  },
  {
    id:3,
    make: 'Mercedes-Benz',
    model: 'C Class',
    year: 2019,
    mileage: '15,000',
    color: 'Polar White',
    price: '$34,500',
    picture: Mercedes,
  }
];

const CarSelector = ({ cars, onChange }) => {
  const [selectedCar, setSelectedCar] = useState(cars[0].make);

  const handleCarChange = (event) => {
    setSelectedCar(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="car">Select a car:</label>
      <select id="car" value={selectedCar} onChange={handleCarChange}>
        {cars.map((car) => (
          <option key={car.make} value={car.make}>
            {car.make} {car.model}
          </option>
        ))}
      </select>
    </div>
  );
};

const CarDetails = ({ car }) => {
  return (
    <div>
      <h2>{car.make} {car.model}</h2>
      <img src={car.picture} alt={car.make} style={{ maxWidth: '100%' ,maxHeight: '70%' }} />
      <table className="car-details-table">
        <tbody>
          <tr>
            <th>Year:</th>
            <td>{car.year}</td>
          </tr>
          <tr>
            <th>Mileage:</th>
            <td>{car.mileage}</td>
          </tr>
          <tr>
            <th>Color:</th>
            <td>{car.color}</td>
          </tr>
          <tr>
            <th>Price:</th>
            <td>${car.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


const App = () => {
  const [selectedCar, setSelectedCar] = useState(cars[0]);

  const handleCarChange = (make) => {
    const car = cars.find((car) => car.make === make);
    setSelectedCar(car);
  };

  return (
    <div>
      <CarSelector cars={cars} onChange={handleCarChange} />
      <CarDetails car={selectedCar} />
    </div>
  );
};

export default App;
