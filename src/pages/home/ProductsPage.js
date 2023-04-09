
import React from 'react'
import SearchFeature from '../../components/SearchFeature';
import { Col, Card, Row } from 'antd';
import RadioBox from '../../components/RadioBox';
import CheckBox from '../../components/CheckBox';
import cars from './CarDetails';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'

const { Meta } = Card;
function  ProductsPage(){
    
    const renderCards = cars.map((product, index) =>  { //once we have resolved the method of fetching the data then we can map the array of
        //Cars to (products,index) and we can use the variables presented to us 

        return <Col lg={6} md={8} xs={24}>
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
})
      

    return(
        <div className="Productpagecontainer" style={{ width: '75%', margin: '3rem auto' }}>
        <div className="headercontainer" style={{ textAlign: 'center', margin:'0 50px 0'}}>
        <div className='authButtons'>
        <img src='/images/logo.jpg' alt='logo' className='homepageLogo'/>
        {/* <span className='authElement'>Login</span> */}
        <div class="dropdown">
          <button class="dropbtnProdPage">Log in <i className="arrowLogin down"></i>
          <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content-ProdPage">
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
          <a href="#">Adminstrator login </a>
    </div>
  </div>
  </div>
  <Navbar/>
          
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
        <div className="SearchProdductPage" style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem auto'}}>

            <SearchFeature/>

        </div>


     
            {cars.length === 0 ?
                <div className="CarListings"  style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <productheader>No post yet...</productheader>
                </div> :
                <div>
                    <Row gutter={[16, 16]}>

                        {renderCards}

                    </Row>

                    <Footer/>
                </div>
            }
            <br /><br />


    </div>
    )
    }

export default ProductsPage;