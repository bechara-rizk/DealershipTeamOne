
import React from 'react'
import SearchFeature from '../../components/SearchFeature';
import { Col, Card, Row } from 'antd';
import RadioBox from '../../components/RadioBox';
import CheckBox from '../../components/CheckBox';
import cars from './CarDetails';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const { Meta } = Card;
function  ProductsPage(){
    const renderCards = cars.map((product, index) =>  { //once we have resolved the method of fetching the data then we can map the array of
        //Cars to (products,index) and we can use the variables presented to us 

        return <Col lg={6} md={8} xs={24}>
        <Card
            hoverable={true}
            cover={
                <img
                src={product.picture}
                alt=""
                style={{ width: '100%', maxHeight: '150px' }}
                />
            }
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
    
        <div className= "ProductsPageCont">
        <div className="ProdHead">
        <img src='/images/logo.jpg' alt='logo' className='ProdPLogo'/>
        <Navbar />
        </div>
        <div className="Productcontainer" style={{ width: '60%', margin: '0 auto' }}>
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
  

          
      

      {/*Filter Section*/}
       

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

                    
                </div>
            }
    </div>
    <Footer/>
    </div>
    )
    }

export default ProductsPage;