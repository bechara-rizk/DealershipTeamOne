import React, { useState, useEffect } from 'react';
import SearchFeature from '@/components/SearchFeature';
import { Col, Card, Row, Select, Input } from 'antd';

import { Modal, Form, InputNumber, Button } from 'antd';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredListings, setFilteredListings] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
const [carSpecs, setCarSpecs] = useState({make: '', model: '', mileage: '', price: ''});
const showModal = () => {
  setIsModalVisible(true);
};

const handleOk = () => {
  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};

const handleFormSubmit = (values) => {
  setCarSpecs(values);
  setIsModalVisible(false);
};

  const mileageToNumber = mileage => {
    if (!mileage) return null;
    if (typeof mileage !== 'string') mileage = mileage.toString();
    const num = Number(mileage.replace(/[^0-9\.-]+/g,""));
    return isNaN(num) ? null : num;
  }
  
    const handleSearch = (term) => {
      setSearchTerm(term.toLowerCase());
    };
     
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate) {
      alert('Please select a date.');
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


  function filterFunc(){
    let price=document.getElementById("priceSelected").value;
    let mileage=document.getElementById("mileageSelected").value;
    let year=document.getElementById("yearSelected").value;
    let make=document.getElementById("makeSelected").value;
    let listings2=listings;
    if (price !== 'all'){
      price = parseInt(price);
      listings2=listings2.filter(Car=>Car.price <= price);
    }
    if (mileage !== 'all'){
      mileage = parseInt(mileage);
      listings2=listings2.filter(Car=>mileageToNumber(Car.mileage) <= mileage);
    }
    if (year !== 'all'){
      listings2=listings2.filter(Car=>Car.year == year);
    }
    if (make !== 'all'){
      listings2=listings2.filter(Car=>Car.make.toLowerCase() == make.toLowerCase());
    }
    setFilteredListings(listings2); // Update state so the component re-renders
  }

  const renderCards = (filteredListings ? filteredListings : listings).filter((product) => {
    if (searchTerm === '') {
      return true;
    }
    return (
      product.make.toLowerCase().includes(searchTerm) ||
      product.model.toLowerCase().includes(searchTerm)
    );
  }).map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24} key={index}>
         <Card
          hoverable={true}
          className='card'
          cover={
            <img
              src={images[product.VIN]}
              alt=""
              style={{ width: '100%',height:"200px", objectFit: 'contain' }}
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
                style={{ display: 'flex', justifyContent: 'flex-end', margin: '2rem auto', marginleft:'1rem'}}
              >
                <SearchFeature onSearch={handleSearch} />

                
              </div>
              <Button style={{backgroundColor:'black'}} type="primary" onClick={showModal}>Can't Find the car you want ?</Button>
              <Modal title="Notify when available" open={isModalVisible} onOk={handleOk} onCancel={handleCancel}  footer={null} width={'350px'}>
  <Form onFinish={handleFormSubmit}>
    <Form.Item label="Make" name="make">
      <Input placeholder="Enter car make" />
    </Form.Item>
    <Form.Item label="Model" name="model">
      <Input placeholder="Enter car model" />
    </Form.Item>
    <Form.Item label="Mileage" name="mileage">
      <InputNumber placeholder="Enter mileage" />
    </Form.Item>
    <Form.Item label="Price" name="price">
      <InputNumber placeholder="Enter price" />
    </Form.Item>
    <Form.Item>
      <Button style={{backgroundColor:'black'}}  type="primary" htmlType="submit">Submit</Button>
    </Form.Item>
  </Form>
</Modal>


            </div>
            <div style={{display:'flex'}}>
              <div style={{margin:'auto'}}>
                <label htmlFor="" style={{color:'#fff','margin-right':'10px'}}>Price:</label>
                <select name="" id="priceSelected" style={{background:"#fff", color:'#000'}} onChange={filterFunc}>
            
                 <option value="all">All</option>
                 <option value="10000">Less than 10k</option>
                 <option value="20000">Less than 20k</option>
                  <option value="30000">Less than 30k</option>
                  <option value="40000">Less than 40k</option>
                  <option value="50000">Less than 50k</option>
                  <option value="60000">Less than 60k</option>
                  <option value="70000">Less than 70k</option>
                  <option value="80000">Less than 80k</option>
                  <option value="90000">Less than 90k</option>
                  <option value="100000">Less than 100k</option>
             </select>

   
                
                <div style={{margin:'10px', display:'inline', color:'#fff'}}>|</div>
                <label htmlFor="" style={{color:'#fff','margin-right':'10px'}}>Mileage:</label>
                <select name="" id="mileageSelected" style={{background:"#fff", color:'#000'}} onChange={filterFunc}>
                  <option value="all">All</option>
              <option value="10000">Less than 10k</option>
                  <option value="20000">Less than 20k</option>
                  <option value="30000">Less than 30k</option>
                  <option value="40000">Less than 40k</option>
                  <option value="50000">Less than 50k</option>
                  <option value="60000">Less than 60k</option>
                  <option value="70000">Less than 70k</option>
                  <option value="80000">Less than 80k</option>
                  <option value="90000">Less than 90k</option>
                  <option value="100000">Less than 100k</option>
                </select>
                <div style={{margin:'10px', display:'inline', color:'#fff'}}>|</div>
                <label htmlFor="" style={{color:'#fff','margin-right':'10px'}}>Year:</label>
                <select name="" id="yearSelected" style={{background:"#fff", color:'#000'}} onChange={filterFunc}>
                  <option value="all">All</option>
                  {       Array.from(new Set(listings.map(product => Number(product.year)))).sort((a, b) => b - a)
    .map((year, index) => {
      return (
        <option key={index} value={year}>{year}</option>
      );
    })
  }
</select>
                <div style={{margin:'10px', display:'inline', color:'#fff'}}>|</div>
                <label htmlFor="" style={{color:'#fff','margin-right':'10px'}}>Make:</label>
                <select name="" id="makeSelected" style={{background:"#fff", color:'#000'}} onChange={filterFunc}>
                  <option value="all">All</option>
                  {    Array.from(new Set(listings.map(product => product.make)))
    .map((make, index) => {
      return (
        <option key={index} value={make}>{make}</option>
      );
         })
              }
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
      </div>

      </div>
</div>

      <Footer />
    </>
  );
}

export default ProductsPage;
