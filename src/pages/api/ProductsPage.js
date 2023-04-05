
import React from 'react'
import { Col, Card, Row } from 'antd';
import CheckBox from './components/CheckBox';
import RadioBox from './components/RadioBox';
import SearchFeature from './components/SearchFeature';
import cars from './CarDetails'


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
        <div style={{ width: '75%', margin: '3rem auto' }}>
        <div style={{ textAlign: 'center', margin:'0 20px 0'}}>
            <productheader>  Luxe Motors   </productheader>
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
        <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem auto'}}>

            <SearchFeature/>

        </div>


     
            {cars.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <productheader>No post yet...</productheader>
                </div> :
                <div>
                    <Row gutter={[16, 16]}>

                        {renderCards}

                    </Row>


                </div>
            }
            <br /><br />


    </div>
    )
    }

export default ProductsPage;