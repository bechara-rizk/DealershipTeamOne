import React, { useState, useEffect } from 'react';
import SearchFeature from '../../components/SearchFeature';
import { Col, Card, Row, Input, Button, Form, Modal } from 'antd';
import DashboardNavbar from '@/components/DashboardNavbar';
import Sidebar from '@/components/Sidebars';
import { firestore, storage } from '../../../firebaseConfig';
import { collection, query, where, getDocs, doc, updateDoc, addDoc, deleteDoc } from "firebase/firestore";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { PushpinOutlined } from '@ant-design/icons';
import { FaPlusCircle } from 'react-icons/fa';
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { FaTrash } from 'react-icons/fa';


const { Meta } = Card;

const fetchCollectionData = async () => {
  const db = firestore;
  const colRef = collection(db, "listings");
  const q = query(colRef, where("sold", "==", false));
  const querySnapshot = await getDocs(q);
  const documents = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return documents;
};

const fetchStorageData = async () => {
  const listRef = ref(storage, 'images/');
  const itemReferences = [];
  const res = await listAll(listRef);
  res.items.forEach((itemRef) => {
    itemReferences.push(itemRef);
  });

  const images = {};
  for (const itemRef of itemReferences) {
    const url = await getDownloadURL(itemRef);
    images[itemRef.name.slice(0, -4)] = url;
  }
  return images;
};


function ProductsPage() {
  const [listings, setListings] = useState(null);
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editedCar, setEditedCar] = useState(null);
  const [editedCarData, setEditedCarData] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');



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

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };
  const handleEdit = (car) => {
    setEditMode(true);
    setEditedCar(car);
    setEditedCarData(car);

  };

  const handleSold = async (car) => {
    try {
      let db = firestore
      const colCarRef = collection(db, "listings")
      const carRef = doc(colCarRef, car.VIN);
      const colSaleRef = collection(db, "sales")
      await updateDoc(carRef, { sold: true });
      await addDoc(colSaleRef, {
        carInfo: {
          VIN: car.VIN,
          make: car.make,
          model: car.model,
          mileage: car.mileage,
          year: car.year,
          color: car.color
        },
        price: car.price,
        date: new Date()
      })
      console.log("Car marked as sold!");

      const newCollectionData = await fetchCollectionData();
      setListings(newCollectionData);

      const newStorageData = await fetchStorageData();
      setImages(newStorageData);
    } catch (error) {
      console.error("Error marking car as sold:", error);
    }
  };


  const handleEditSubmit = async (updatedCarData) => {
    if (!editedCarData || !editedCarData.id) {
      return;
    }
    if (selectedFile) {
      const str = storage
      const imageRef = ref(str, 'images/' + editedCar.VIN + selectedFile.name.slice(-4));
      await uploadBytes(imageRef, selectedFile)
    }

    const carRef = doc(firestore, "listings", editedCarData.id);
    delete updatedCarData.picture
    await updateDoc(carRef, updatedCarData);


    const newCollectionData = await fetchCollectionData();
    setListings(newCollectionData);

    const newStorageData = await fetchStorageData();
    setImages(newStorageData);

    setEditMode(false);
  };

  const handleDelete = async (carId) => {
    try {
      const carRef = doc(firestore, "listings", carId);
      await deleteDoc(carRef);
      console.log("Car deleted successfully!");

    } catch (error) {
      console.error("Error deleting car:", error);

    }
    const newCollectionData = await fetchCollectionData();
    setListings(newCollectionData);

    const newStorageData = await fetchStorageData();
    setImages(newStorageData);

    setEditMode(false);
  };




  if (loading) {
    return <div>Loading...</div>;
  }

  const renderCards = listings
    .filter((product) => {
      if (searchTerm === '') {
        return true;
      }
      return (
        product.make.toLowerCase().includes(searchTerm) ||
        product.model.toLowerCase().includes(searchTerm)
      );
    })
    .map((product, index) => {
      return (
        <Col lg={6} md={8} xs={24} key={index}>
          <Card

            hoverable={true}
            className='card'
            cover={
              <img
                src={images[product.VIN]}
                alt=""
                style={{ width: '100%', maxHeight: 'auto', maxWidth: '500px', minHeight: "250px", objectFit: 'contain' }}
              />
            }
          >
            <img
              src="/images/sold-out.png"
              alt="Icon"
              style={{ width: '8vh', height: '8vh', position: 'absolute', top: 0, left: 0 }}
              onClick={() => handleSold(product)}
            />
            <h3 style={{ margin: 0, marginBottom: 8 }}>

              {product.make}
              <FontAwesomeIcon
                color="#454545"
                icon={faPen}
                className="edit-icon"
                style={{ marginLeft: '10px', color: 'black', cursor: 'pointer' }}
                onClick={() => handleEdit(product)}
              />
            </h3>
            <p style={{ margin: 0, color: '#8C8C8C' }}>Model: {product.model}</p>
            <p style={{ margin: 0, color: '#8C8C8C' }}>Price: {product.price}$</p>
            {typeof product.mileage === 'undefined' ? (
              <p style={{ margin: 0, color: '#8C8C8C' }}>Mileage: undefined</p>
            ) : (
              <p style={{ margin: 0, color: '#8C8C8C' }}>Mileage: {product.mileage}</p>
            )}
            <p style={{ margin: 0, color: '#8C8C8C' }}>Year: {product.year}</p>
            <p style={{ margin: 0, color: '#8C8C8C' }}>Color: {product.color}</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '8vh' }}>

              <FaTrash size={24} color="#454545" onClick={() => handleDelete(product.id)} />
            </div>

          </Card>
        </Col>
      );
    });

  const editModal = (
    <Modal
      title="Edit Car"
      open={editMode}
      onCancel={() => setEditMode(false)}
      footer={null}
      width="450px"
      height="80%"
    >
      <div className="form-container">
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}

          layout="horizontal"
          initialValues={editedCar}
          onFinish={handleEditSubmit}
        >
          <Form.Item label="Make" name="make" style={{ marginBottom: '16px' }}>
            <Input />
          </Form.Item>
          <Form.Item label="Model" name="model">
            <Input />
          </Form.Item>
          <Form.Item label="Price" name="price">
            <Input />
          </Form.Item>
          <Form.Item label="Mileage" name="mileage">
            <Input />
          </Form.Item>
          <Form.Item label="Year" name="year">
            <Input />
          </Form.Item>
          <Form.Item label="Color" name="color">
            <Input />
          </Form.Item>
          <Form.Item label="Picture" name="picture" style={{ marginBottom: '16px' }}>
            <Upload
              beforeUpload={file => {
                setSelectedFile(file);
                return false;
              }}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
            <Button type="primary" htmlType="submit" className='editcarButton'>
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );



  return (
    <>
      <DashboardNavbar />
      <Sidebar />
      <div className="Dashboardproducts">handleEditSubmit
        <div className="headercontainer" style={{ textAlign: 'center' }}></div>

        <div style={{ width: '100%' }}>
          <div
            className="Productpagecontainer"
            style={{ margin: '0 auto', maxWidth: '1400px', minHeight: '100vh' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              {/*Filter and Search Section*/}
              <div>
                {/*Filter Section*/}

                {/*Search Section*/}
                <div
                  className="SearchProdductPage"
                  style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem auto' }}
                >
                  <SearchFeature onSearch={handleSearch} />

                  <a href="/dashboard/AddCarForm" className="add-car-button">
                    <FaPlusCircle className="icon" />
                    <span className="text">Add Car</span>
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {/* Car Listings */}
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
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                      <Row gutter={[16, 16]}>{renderCards}</Row>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {editMode && editModal}
      </div>
    </>
  );
}

export default ProductsPage;


