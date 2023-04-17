import { Button } from "antd";
import React from "react";
import { useState } from 'react';
import cars from './CarDetails';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CompareCar() {

    const [selectedCar1, setSelectedCar1] = useState('');
    const [selectedCar2, setSelectedCar2] = useState('');
    const car1 = selectedCar1 && cars.find(car => car.make === selectedCar1.split(' ')[0] && car.model.split(' ')[0] === selectedCar1.split(' ')[1]);
    
    const car2 = selectedCar2 && cars.find(car => car.make === selectedCar2.split(' ')[0] && car.model.split(' ')[0] === selectedCar2.split(' ')[1]);
    const handleSubmit = (e) => {}

    const compare = (e) => {}
  return (
    <>
    <div className='authButtons'>
        <img src='/images/logo.jpg' alt='logo' className='homepageLogo'/>
        <div class="dropdown">
          <button class="dropbtn">Log in <i className="arrowLogin down"></i>
          <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Login</a>
            <a href="#">Sign Up</a>
            <a href="#">Adminstrator login </a>
          </div>
   
      </div>
    </div>
    <div className="compareCar">
    <Navbar />
    <div>
    <h2 className="header">Compare Cars</h2>
    <h3 className="discription">Select two cars to compare</h3>
    </div>
    <div className="CarContainer">
      
      
      <div className="child">
        <img  src={selectedCar1 && car1 ? car1.picture :  '/images/blackcar.png'}  alt="car image" style={{width: '450px', height: 'auto' }}/>
        <form onSubmit={handleSubmit}>
         <h3 className="cars">First Car</h3>
        <label htmlFor="car-Test">Car:</label>
        <select style={{color: "black"}} id="car" value={selectedCar1} onChange={(e) => setSelectedCar1(e.target.value)}>
          <option style={{color: "gray"}} value="Select-A-TestCar">-- Select a car --</option>
          <option value="Audi A4">Audi A4</option>
          <option value="BMW 4 series">BMW 4 series</option>
          <option value="Mercedes-Benz C Class">Mercedes-Benz C-Class</option>
          
      
        </select>
        </form>
        <div className="car-details">
    {selectedCar1 && car1 &&(
      <>
        <h3 className="cars">{selectedCar1.make} {selectedCar1.model}</h3>
        <div className="details">
          <h4>Year : </h4>
          <p>{car1.year}</p>
        </div>

        <div className="details">
          <h4>Mileage : </h4>
          <p>{car1.mileage}</p>
        </div>

        <div className="details">
          <h4>Color : </h4>
          <p>{car1.color}</p>
        </div>

        <div className="details">
          <h4>Price : </h4>
          <p>{car1.price}</p>
        </div>
      </>
    )}
  </div>
      </div>





      <div className="child">
        <img src={selectedCar2 && car2  ? car2.picture : '/images/redcar.jpg'}   alt="car image" style={{width: '450px', height: 'auto' }}/>
        <form onSubmit={handleSubmit}>
        <h3 className="cars">Second Car</h3>
        <label htmlFor="car-Test">Car:</label>
        <select style={{color: "black"}} id="car" value={selectedCar2} onChange={(e) => setSelectedCar2(e.target.value)}>
          <option  style={{color: "gray"}} value="Select-A-TestCar">-- Select a car --</option>
          <option  value="Audi A4">Audi A4</option>
          <option  value="BMW 4 series">BMW 4 series</option>
          <option  value="Mercedes-Benz C Class">Mercedes-Benz C-Class</option>
          
      
        </select>
        </form>

        <div className="car-details">{selectedCar2 && car2 && (
      <>
        <h3 className="cars">{selectedCar2.make} {selectedCar2.model}</h3>
        <div className="details">
          <h4>Year : </h4>
          <p>{car2.year}</p>
        </div>

        <div className="details">
          <h4>Mileage : </h4>
          <p>{car2.mileage}</p>
        </div>

        <div className="details">
          <h4>Color : </h4>
          <p>{car2.color}</p>
        </div>

        <div className="details">
          <h4>Price : </h4>
          <p>{car2.price}</p>
        </div>
        
      </>
    )}
  </div>
      </div>
     
    </div>
    <Footer />
    </div>
  </>
  );
}
