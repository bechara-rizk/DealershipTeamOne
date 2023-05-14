import React, { useState, useEffect } from 'react';
import SearchFeature from '../../components/SearchFeature';
import { Col, Card, Row } from 'antd';
import RadioBox from '../../components/RadioBox';
import CheckBox from '../../components/CheckBox';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TestScheduling from '@/components/testScheduling';
import { firestore, storage } from '../../../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import { ref, listAll, getDownloadURL, list } from "firebase/storage";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  
  const renderCards = listings.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card
          hoverable={true}
          cover={
            <a href={`/product/${product.id}`}>
              <img
                src={images[product.VIN]}
                alt=""
                style={{ width: '100%', maxHeight: '150px' }}
              />
            </a>
          }
        >
          <Meta
            title={product.make}
            description={`Model: ${product.model}
              Price: ${product.price}
              Mileage: ${product.mileage}
              Year: ${product.year}
              Color: ${product.color}`}
          />
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
        <div className="authButtons">
          <img src="/images/logo.jpg" alt="logo" className="homepageLogo" />
          <div className="dropdown">
            {!auth.currentUser ? <>
              <a href="/auth/Login">Login</a>
              <a href="/auth/Register">Sign Up</a></> :
              <>
                {auth.currentUser.uid === "4rplVi6gQfW4oZSvnXGf1D4z05x2" ? <a href="/dashboard/home">Admin</a> : null}
                <a href="" onClick={() => auth.signOut}>Sign out</a>
              </>}
          </div>
        </div>
        <Navbar />
      </div>

      <div style={{ width: '100%' }}>
        <div className="Productpagecontainer" style={{ margin: '0 auto', maxWidth: '1200px', minHeight: '100vh' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>

            {/*Filter and Search Section*/}
            <div>
              {/*Filter Section*/}
              <Row gutter={[16, 16]}>
                <Col lg={12} xs={24}>
                  <CheckBox />
                </Col>
                <Col lg={12} xs={24}>
                  <RadioBox />
                </Col>
              </Row>

              {/*Search Section*/}
              <div
                className="SearchProdductPage"
                style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem auto' }}
              >
                <SearchFeature />
              </div>
            </div>


          </div>

         
          
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {/*Car Listings*/}
        <div style={{ flex: 1, minWidth: 'calc(100% - 800px)' }}>
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
            <div>
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
            marginRight:'-100px'
          }}
        >
          <div style={{ position: 'relative' }}> {/* Add this wrapper */}
            <button
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
                  maxWidth: '600px',
                  marginTop: '-9rem',
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
          >
            <option value="Select-A-TestCar">-- Select a car --</option>
            {listings.map((listing, index) => (
              <option key={index} value={listing.make + " " + listing.model}>{listing.make + " " + listing.model}</option>
            ))}
          </select>
          <br />
          <label htmlFor="time" className="testDriveLabel">
            Time:
          </label>
          <select
            id="time"
            className='pleasebeblack'
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
          >

            <option value="">-- Select a time slot --</option>
            <option value="9:00am">9:00am</option>
            <option value="10:00am">10:00am</option>
            <option value="11:00am">11:00am</option>
            <option   value="12:00pm ">12:00pm </option>
            <option value="1:00pm  ">1:00pm </option>
           <option value="2:00pm ">2:00pm </option>
            <option value="3:00pm ">3:00pm </option>
           <option value="4:00pm ">4:00pm </option>
          </select>
          <br />
          <label htmlFor="date" className="testDriveLabel">
          Date:
        </label>
        <DatePicker
          className='pleasebeblack'
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={new Date(minDate)}
          maxDate={new Date(maxDateFormatted)}
          filterDate={(date) => date.getDay() !== 0}
          required
        />
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
          </div> {/* Close the wrapper */}
        </div>
      </div>

      </div>

      </div>
      <Footer />
    </>
  );
}

export default ProductsPage;
