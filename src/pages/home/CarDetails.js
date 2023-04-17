

const cars = [
  {
    id: 1, 
    make: 'Audi',
    model: 'A4',
    year: 2020,
    mileage: '10,000',
    color: 'Glacier White',
    price: '$32,500',
    picture: '/images/audia4.PNG',
  },
  {
    id: 2,
    make: 'BMW',
    model: '4 series',
    year: 2018,
    mileage: '20,000',
    color: 'Black Sapphire Metallic',
    price: '$28,000',
    picture: '/images/bmw4series.PNG',
  },
  {
    id:3,
    make: 'Mercedes-Benz',
    model: 'C Class',
    year: 2019,
    mileage: '15,000',
    color: 'Polar White',
    price: '$34,500',
    picture: '/images/Mercedes.PNG',
  }
];

selectedCarMakes = ["Audi", "Mercedes-Benz", 'BMW'];
cars.filter(car=> selectedCarMakes.includes(car.Make)); // returns cars with make Audi, Mercedes-Benz, or BMW

selectedCarMilage = ["10,000", "20,000", '15,000'];
cars.filter(car=> selectedCarMilage.includes(car.Milage));

selectedCarColor = ['Black Sapphire Metallic','Polar White','Glacier White' ];
cars.filter(car=> selectedCarColor.includes(car.color));

selectedCarPrice = ['$32,500','$28,000','$34,500'];
cars.filter(car=> selectedCarPrice.includes(car.price));

selectedCarYear = [2018,2019,2020];
cars.filter(car=> selectedCarYear.includes(car.year));

export default cars.filter; // returns cars with mileage 10,000, 20,000, or 15,000
