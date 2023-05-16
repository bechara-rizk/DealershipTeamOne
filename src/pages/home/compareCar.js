import { Button } from "antd";
import React from "react";
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { firestore, storage } from '../../../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import { ref, listAll, getDownloadURL, list } from "firebase/storage";
import AuthButtons from '@/components/AuthButtonsComp';

const fetchCollectionData = async () => {
  let db = firestore
  let colRef = collection(db, "listings")
  let q = query(colRef, where("sold", "==", false))
  const querySnapshot = await getDocs(q);
  const documents = querySnapshot.docs.map((doc) => doc.data());
  return documents;
};

const fetchStorageData = async (files) => {
  const listRef = ref(storage, 'images/');
  let itemReferences = []
  await listAll(listRef)
    .then((res) => {
      res.items.forEach((itemRef) => {
        itemReferences.push(itemRef)
      });
    })

  let images = {}
  for (let itemRef of itemReferences) {
    let url = await getDownloadURL(itemRef)
    images[itemRef.name.slice(0, -4)] = url
  }
  return images;
};

export default function CompareCar() {

    const [selectedCar1, setSelectedCar1] = useState('');
    const [selectedCar2, setSelectedCar2] = useState('');
    const [loading, setLoading] = useState(true)
    const [listings, setListings] = useState([])
    const [images, setImages] = useState([])

    const car1 = selectedCar1 && listings.find(car => car.make === selectedCar1.split(' ')[0] && car.model.split(' ')[0] === selectedCar1.split(' ')[1]);
    
    const car2 = selectedCar2 && listings.find(car => car.make === selectedCar2.split(' ')[0] && car.model.split(' ')[0] === selectedCar2.split(' ')[1]);
    const handleSubmit = (e) => {}

    const compare = (e) => {}

  useEffect(() => {
    const fetchData = async () => {
      const collectionData = await fetchCollectionData();
      const storageData = await fetchStorageData(collectionData);

      setListings(collectionData);
      setImages(storageData);
      setLoading(false);
 
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(listings)
  console.log(images)
  return (
    <>
    <AuthButtons/>
    <div className="compareCar">
    <Navbar />
    <div>
    <h2 className="header">Compare Cars</h2>
    <h3 className="discription">Select two cars to compare</h3>
    </div>
    <div className="CarContainer">
      
      
      <div className="child">
        <img  src={selectedCar1 && car1 ? images[car1.VIN] :  '/images/blackcar.png'}  alt="car image" style={{width: '450px', height: '210px' }}/>
        <form onSubmit={handleSubmit}>
         <h3 className="cars">First Car</h3>
        <label htmlFor="car-Test">Car:</label>
        <select style={{color: "black"}} id="car" value={selectedCar1} onChange={(e) => setSelectedCar1(e.target.value)}>
          <option style={{color: "gray"}} value="Select-A-TestCar">-- Select a car --</option>
                {listings.map((listing, index) => (
                  <option key={index} value={listing.make + " " + listing.model}>{listing.make + " " + listing.model}</option>
                ))}
          
      
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
          <p>{car1.price}$</p>
        </div>
      </>
    )}
  </div>
      </div>





      <div className="child">
        <img src={selectedCar2 && car2 ? images[car2.VIN]: '/images/redcar.jpg'}   alt="car image" style={{width: '450px', height: '200px' }}/>
        <form onSubmit={handleSubmit}>
        <h3 className="cars">Second Car</h3>
        <label htmlFor="car-Test">Car:</label>
        <select style={{color: "black"}} id="car" value={selectedCar2} onChange={(e) => setSelectedCar2(e.target.value)}>
          <option  style={{color: "gray"}} value="Select-A-TestCar">-- Select a car --</option>
                {listings.map((listing, index) => (
                  <option key={index} value={listing.make + " " + listing.model}>{listing.make + " " + listing.model}</option>
                ))}
          
      
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
          <p>{car2.price}$</p>
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
