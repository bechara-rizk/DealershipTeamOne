import React, { useState, useEffect } from 'react';
import SearchFeature from '../../components/SearchFeature';
import { Col, Card, Row, Select } from 'antd';
import RadioBox from '../../components/RadioBox';
import CheckBox from '../../components/CheckBox';
import DashboardNavbar from '@/components/DashboardNavbar';
import Sidebar from '@/components/Sidebars';
import { firestore, storage } from '../../../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { PushpinOutlined } from '@ant-design/icons';

const { Meta } = Card;

const fetchCollectionData = async () => {
  let db = firestore
  let colRef = collection(db, "listings")
  let q = query(colRef, where("sold", "==", false))
  const querySnapshot = await getDocs(q);
  const documents = querySnapshot.docs.map((doc) => doc.data());
  return documents;
};

const fetchStorageData = async () => {
  const listRef = ref(storage, 'images/');
  let itemReferences = [];
  let res = await listAll(listRef);
  res.items.forEach((itemRef) => {
    itemReferences.push(itemRef)
  });

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

  useEffect(() => {
    const fetchData = async () => {
      const collectionData = await fetchCollectionData();
      const storageData = await fetchStorageData();

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
            <a href={`/product/${product.id}`} style={{display:'flex'}}>
              
              <img
                src={images[product.VIN]}
                alt=""
                style={{ width: 'auto', maxHeight: '150px', 'margin':'1px auto 0px auto'}}
              />
            </a>
          }
        >
          <h3 style={{margin:0, 'margin-bottom':8}}>
                {product.make}
                <FontAwesomeIcon icon={faPen} className="edit-icon" style={{ marginLeft: '10px' }} />
              </h3>
              <p style={{margin:0, color:'#8C8C8C'}}>Model: {product.model}</p>
          <p style={{margin:0, color:'#8C8C8C'}}>Price: {product.price}</p>
          <p style={{margin:0, color:'#8C8C8C'}}>Mileage: {product.mileage}</p>
          <p style={{margin:0, color:'#8C8C8C'}}>Year: {product.year}</p>
          <p style={{margin:0, color:'#8C8C8C'}}>Color: {product.color}</p>
        </Card>
      </Col>
    );
  });

  return (
    <>
    <DashboardNavbar />
    <Sidebar />
    <div className='Dashboardproducts'>
      <div className="headercontainer" style={{ textAlign: 'center' }}>
        
       
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
            </div>
          </div> 
        </div>
      </div>
      </div>
    </>
  );
}

export default ProductsPage;

