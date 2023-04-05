import { useState } from 'react';
import Audi from './public/images/audia4.PNG'
import BMW from './public/images/bmw4series.PNG';
import Mercedes from './public/images/Mercedes.PNG';

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

export default cars;
