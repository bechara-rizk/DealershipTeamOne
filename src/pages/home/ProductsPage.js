import React, { useState } from 'react';
import SearchFeature from '../../components/SearchFeature';
import { Col, Card, Row } from 'antd';
import RadioBox from '../../components/RadioBox';
import CheckBox from '../../components/CheckBox';
import cars from './CarDetails';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TestScheduling from '@/components/testScheduling';

const { Meta } = Card;

function ProductsPage() {
  const [showTestScheduling, setShowTestScheduling] = useState(false);

  const renderCards = cars.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card
            hoverable={true}
            cover={<a href={`/product/${product.id}`} >
                <img src={product.picture} alt="" style={{ width: '100%', maxHeight: '150px' }} />
            </a>}
        >
           <Meta
                title={product.make}
                description={
                `Model: ${product.model}
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

    return(
        <div className="Productpagecontainer" style={{ width: '75%', margin: '0 auto' }}>
        <div className="headercontainer" style={{ textAlign: 'center', margin:'0 50px 0'}}>
        <div className='authButtons'>
        {/* <img src='/images/logo.jpg' alt='logo' className='homepageLogo'/> */}
        {/* <span className='authElement'>Login</span> */}
        <div className="dropdown">
          <button className="dropbtnProdPage">Login <i className="arrowLogin down"></i>
          <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content-ProdPage">
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
          <a href="#">Adminstrator login </a>
    </div>
  </div>
  </div>
  {/* <Navbar/> */}
          
        </div>

      {/*Filter Section*/}
        <Row gutter={[16, 16]}> 
            <Col lg={12} xs={24} >
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
          </div>
         
          
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {/*Car Listings*/}
        <div style={{ flex: 1, minWidth: 'calc(100% - 800px)' }}>
          {cars.length === 0 ? (
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
                <TestScheduling />
              </div>
            )}
          </div> {/* Close the wrapper */}
        </div>
      </div>

                    <Footer/>
                </div>
            }
    </div>
    )
    }

export default ProductsPage;
