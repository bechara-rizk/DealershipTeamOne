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

  return (
    <>
      <div className="headercontainer" style={{ textAlign: 'center' }}>
        <DashboardNavbar />
        <Sidebar />
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
    </>
  );
}

export default ProductsPage;

