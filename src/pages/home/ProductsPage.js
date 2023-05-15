import React, { useState, useEffect } from 'react';
import SearchFeature from '../../components/SearchFeature';
import { Col, Card, Row, Select } from 'antd';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TestScheduling from '@/components/testScheduling';
import { firestore, storage } from '../../../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import { ref, listAll, getDownloadURL, list } from "firebase/storage";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from '@emailjs/browser';
import AuthButtons from '@/components/AuthButtonsComp';


const { Meta } = Card;

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
  for (let itemRef of itemReferences){
    let url = await getDownloadURL(itemRef)
    images[itemRef.name.slice(0, -4)] = url
  }
  return images;
};



function ProductsPage() {
  const [showTestScheduling, setShowTestScheduling] = useState(false);
  const [listings, setListings] = useState(null);
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [scheduledTestDrives, setScheduledTestDrives] = useState([]);
  const [scheduledTestDrivesCounter, setScheduledTestDrivesCounter] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [SearchTerms, setSearchTerms] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate) {
      alert('Please select a date.');
      return;
    }
    const scheduledDate = selectedDate.toISOString().slice(0, 10);
    // Check if selected time slot is already scheduled
    if (scheduledTestDrives.some(testDrive => testDrive.time === selectedTime && testDrive.date === scheduledDate)) {
      alert('Selected time slot is already scheduled. Please choose a different time slot.');
      return;
    }
    

    
    // log(e.target.elements);
    emailjs.sendForm('service_yogknkd', 'template_6ljs4f7', e.target, 'oTRpc9rMm5VwpDu1U');

    setScheduledTestDrives([...scheduledTestDrives, newTestDrive]);
    setSelectedCar('');
    setSelectedTime('');
    setScheduledTestDrivesCounter(scheduledTestDrivesCounter + 1); // Update counter

    const scheduleAnother = window.confirm('Would you like to schedule another test drive?');
    if (!scheduleAnother) {
      e.target.elements.date.value = '';
    }
  };


  // Calculate the next date
  const nextDay = new Date();
  nextDay.setDate(nextDay.getDate() + 1);
  const minDate = nextDay.toISOString().slice(0, 10);

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() +7);
  const maxDateFormatted = maxDate.toISOString().slice(0, 10);

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
  var price, mileage, year, make;
  var listings2=listings;
  function filterFunc(){
    price=document.getElementById("priceSelected").value;
    mileage=document.getElementById("mileageSelected").value;
    year=document.getElementById("yearSelected").value;
    make=document.getElementById("makeSelected").value;
    if (price=='all'){
      listings2=listings.filter(Car=>Car.price);
    }
    else{
      listings2=listings.filter(Car=>Car.price==price);
    }
    if (mileage=='all'){
      listings2=listings2.filter(Car=>Car.mileage);
    }
    else{
      listings2=listings2.filter(Car=>Car.mileage==mileage);
    }
    if (year=='all'){
      listings2=listings2.filter(Car=>Car.year);
    }
    else{
      listings2=listings2.filter(Car=>Car.year==year);
    }
    if (make=='all'){
      listings2=listings2.filter(Car=>Car.make);
    }
    else{
      listings2=listings2.filter(Car=>Car.make==make);
    }
    console.log(listings2);
    // document.getElementById('newCarsFiltered').innerHTML=<Row gutter={[16, 16]}>{renderCards}</Row>
    return renderCards;
  }
  const renderCards = listings2.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card
          hoverable={true}
          cover={
              <img
                src={images[product.VIN]}
                alt=""
                style={{ width: 'auto', maxHeight: '150px', maxWidth:'240px', 'margin':'1px auto 0px auto'}}
              />
            
          }
        >
          <h3 style={{margin:0, 'margin-bottom':8}}>{product.make}</h3>
          <p style={{margin:0, color:'#8C8C8C'}}>Model: {product.model}</p>
          <p style={{margin:0, color:'#8C8C8C'}}>Price: {product.price}$</p>
          {typeof(product.mileage)==='undefined'?
          <p style={{margin:0, color:'#8C8C8C'}}>Mileage: undefined</p>:
          <p style={{margin:0, color:'#8C8C8C'}}>Mileage: {product.mileage}</p>}
          <p style={{margin:0, color:'#8C8C8C'}}>Year: {product.year}</p>
          <p style={{margin:0, color:'#8C8C8C'}}>Color: {product.color}</p>
        </Card>
      </Col>
    );
  });

  const toggleTestScheduling = () => {
    setShowTestScheduling((prevState) => !prevState);
  };

  return (
    <>
      <div className="headercontainer" style={{ textAlign: 'center' }}>
        <AuthButtons />
        <Navbar />
      </div>

      <div className="lists" style={{ width: '100%' }}>
        <div className="Productpagecontainer" style={{ margin: '0 auto', maxWidth: '1200px', minHeight: '100vh' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>

            {/*Filter and Search Section*/}
            <div>
              {/*Filter Section its down*/}
              {/*Search Section*/}
              <div
                className="SearchProdductPage"
                style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem auto'}}
              >
                <SearchFeature
                
                />
              </div>
            </div>
            <div style={{display:'flex'}}>
              <div style={{margin:'auto'}}>
                <label htmlFor="" style={{color:'#fff','margin-right':'10px'}}>Price:</label>
                <select name="" id="priceSelected" style={{background:"#fff", color:'#000'}} onChange={filterFunc}>
                  <option value="all">All</option>
                  {listings.map((product, index) => {
                    return (
                      <option key={index} value={product.price}>{product.price}</option>
                    );
                  })}
                </select>
                <div style={{margin:'10px', display:'inline', color:'#fff'}}>|</div>
                <label htmlFor="" style={{color:'#fff','margin-right':'10px'}}>Mileage:</label>
                <select name="" id="mileageSelected" style={{background:"#fff", color:'#000'}} onChange={filterFunc}>
                  <option value="all">All</option>
                  {listings.map((product, index) => {
                    return (
                      <option key={index} value={product.mileage}>{product.mileage}</option>
                    );
                  })}
                </select>
                <div style={{margin:'10px', display:'inline', color:'#fff'}}>|</div>
                <label htmlFor="" style={{color:'#fff','margin-right':'10px'}}>Year:</label>
                <select name="" id="yearSelected" style={{background:"#fff", color:'#000'}} onChange={filterFunc}>
                  <option value="all">All</option>
                  {listings.map((product, index) => {
                    return (
                      <option key={index} value={product.year}>{product.year}</option>
                    );
                  })}
                </select>
                <div style={{margin:'10px', display:'inline', color:'#fff'}}>|</div>
                <label htmlFor="" style={{color:'#fff','margin-right':'10px'}}>Make:</label>
                <select name="" id="makeSelected" style={{background:"#fff", color:'#000'}} onChange={filterFunc}>
                  <option value="all">All</option>
                  {listings.map((product, index) => {
                    return (
                      <option key={index} value={product.make}>{product.make}</option>
                    );
                  })}
                </select>
              </div>
            </div>


          </div>

         
          
      <div  style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {/*Car Listings*/}
        <div className="listings" style={{ flex: 1, minWidth: 'calc(100% - 800px)' }}>
          {listings.length === 0 ? (
            <div
              className="CarListings"
              style={{
                display: 'flex',
                height: '300px',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h2>No post yet...</h2>
            </div>
          ) : (
            <div id='newCarsFiltered'>
              <Row gutter={[16, 16]}>{renderCards}</Row>
            </div>
          )}
        </div>

       {/*Test Scheduling Button and Component*/}
       <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            width: "30%",
            minWidth: "180px",
            marginRight:'-200px'
          }}
        >
            <button className="testb"
              onClick={toggleTestScheduling}
              style={{ width: "100%", marginBottom: "1rem", }}

            >
              Schedule Your Test Drive
            </button>

            {/*Test Scheduling Component*/}
            {showTestScheduling && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  width: '100%',
                  minWidth: '100px',
                  maxWidth: '800px',
                  marginTop: '-15rem',
                   marginRight: '-60px',
                }}
              >
                    <div className="testDriveContainer">
      <div className="testDriveBox">
      <h1 className="testDriveTitle">  Schedule your test drive Now </h1>
        <p className="testDriveLabel">Select a car and available time slot to schedule a test drive.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="car" className="testDriveLabel">
  Car:
</label>

<select
  className='pleasebeblack'
  id="car"
  value={selectedCar}
  onChange={(e) => setSelectedCar(e.target.value)}
  name='carclient'
>
  <option value="Select-A-TestCar">-- Select a car --</option>
  {listings.map((listing, index) => (
    <option key={index} value={listing.make + " " + listing.model}>{listing.make + " " + listing.model}</option>
  ))}
</select>
<br />
<div className="date-picker-container">
  <label htmlFor="date" className="testDriveLabel">
    Date:
  </label>
  <DatePicker
    className='pleasebeblack2'
    selected={selectedDate}
    onChange={(date) => setSelectedDate(date)}
    minDate={new Date(minDate)}
    maxDate={new Date(maxDateFormatted)}
    filterDate={(date) => date.getDay() !== 0}
    required
    name='dateclient'
  
    disabled={!selectedCar || selectedCar === 'Select-A-TestCar'}
  />
</div>


        <br/>
          <label htmlFor="time" className="testDriveLabel">
            Time:
          </label>
          <select
  id="time"
  className='pleasebeblack3'
  value={selectedTime}
  onChange={(e) => setSelectedTime(e.target.value)}
  required
  name='timeclient'
  disabled={!selectedCar || selectedCar === 'Select-A-TestCar' || !selectedDate}
>
   <option value="">-- Select a time slot --</option>
  <option value="9:00am">9:00am</option>
  <option value="10:00am">10:00am</option>
  <option value="11:00am">11:00am</option>
  <option   value="12:00pm">12:00pm</option>
  <option value="1:00pm ">1:00pm</option>
  <option value="2:00pm">2:00pm</option>
  <option value="3:00pm">3:00pm</option>
  <option value="4:00pm">4:00pm</option>
</select>

          <br />

        {/* {TODO: put variables instead of fixed values @backend} */}
        <input type="text" hidden value={'bechara'} name="nameclient"/>
        <input type="text" hidden value={'becharaerizk@yahoo.com'} name="emailclient"/>
          <br />
          <button type="submit" className="testDriveSubmit" disabled={scheduledTestDrivesCounter >= 3}>
            Schedule Test Drive
          </button>
        </form>
        {scheduledTestDrives.length > 0 && (
  <div>
    <h1 className='testDriveTitle'>Scheduled Test Drives:</h1>
    <ul>
      {scheduledTestDrives.map((testDrive, index) => (
        <li key={index} style={{ borderBottom: '1px solid #000', marginBottom: '10px', paddingBottom: '10px' }}>
          Test Drive Request for Car: {testDrive.car}, Time: {testDrive.time}, Date: {testDrive.date} has been scheduled Successfully

        </li>
      ))}
    </ul>
  </div>
)}
{scheduledTestDrivesCounter >= 3 && (
<p className="testDriveMessage">You have reached the maximum number of scheduled test drives (3).</p>
)}
</div>
</div>
              </div>
            )}
          </div> 
        </div>
      </div>

      </div>


      <Footer />
    </>
  );
}

export default ProductsPage;
