import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebars';
import DashboardNavbar from '@/components/DashboardNavbar';
import { firestore } from '../../../firebaseConfig';
import { collection, query, where, getDocs, doc, getDoc, setDoc } from "firebase/firestore";

class slotDate {
  constructor(s){

  }
}

let users = {}


const getUser = async (id) => {
  if (users[id]) return users[id]
  let db = firestore
  let colRef = collection(db, "users")
  let docRef = doc(colRef, id)
  let snapshot = await getDoc(docRef)
  users[id] = snapshot.data()
  return snapshot.data()
}

const updateStatus = async (dbId, status) => {
  let db = firestore
  let colRef = collection(db, "testDrives")
  let docRef = doc(colRef, dbId)
  await setDoc(docRef, { status: status }, { merge: true });
}

const fetchCollectionData = async () => {
  let db = firestore
  let colRef = collection(db, "testDrives")
  let q = query(colRef,       where("status", "!=", -1))
  const querySnapshot = await getDocs(q);
  const documents = querySnapshot.docs.map((doc) => {
    let res = doc.data()
    res.db = doc._key.path.segments[6]
    return res
  });
  let id = 0
  for (let doc of documents){
    doc.id = ++id
    if (doc.status === 0) doc.status = "Pending"
    else if (doc.status === 1) doc.status = "Scheduled"
    else if (doc.status === 2) doc.status = "Completed"
    doc.user = await getUser(doc.userID)
  }

  documents.sort((a,b) => a.id - b.id)
  return documents;
};

const CarScheduleAcceptance = () => {
  const [testDrives, setTestDrives] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTestDrives, setFilteredTestDrives] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const collectionData = await fetchCollectionData();

      setTestDrives(collectionData);
      setFilteredTestDrives(collectionData)
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleStatusChange = (id, dbID, newStatus) => {
    const updatedTestDrives = testDrives.map((drive) => {
      if (drive.id === id) {
        return { ...drive, status: newStatus };
      }
      return drive;
    });
    let status = 1
    if (newStatus === "Cancelled") status = -1
    else if (newStatus === "Completed") status = 2
    updateStatus(dbID, status)
    setTestDrives(updatedTestDrives);
    setFilteredTestDrives(updatedTestDrives);
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filteredDrives = testDrives.filter((drive) =>
      drive.carName.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredTestDrives(filteredDrives);
  };

  return (
    <>
      <Sidebar />
      <DashboardNavbar />
      <div className='side-content'>
        <div className='TestDriveRequestContainer'>
          <h1>Test Drive Requests</h1>
          <input
            type="text"
            placeholder="Search by car name"
            value={searchQuery}
            onChange={handleSearch}
            style={{ color: 'black' }}
          />
          <ul>
            {filteredTestDrives.map((testDrive) => (
              <li key={testDrive.id}>
                {testDrive.car} - {testDrive.status} - {testDrive.date} - {testDrive.time} - Requested by: {testDrive.user.firstName + " " + testDrive.user.lastName}
                <button
                  onClick={() => handleStatusChange(testDrive.id, testDrive.db, 'Scheduled')}
                  disabled={testDrive.status === 'Scheduled'}
                  style={{ color: 'white', backgroundColor: '#454545', border: '1px solid #454545' }}
                >
                  Set Scheduled
                </button>
                <button
                  onClick={() => handleStatusChange(testDrive.id, testDrive.db, 'Cancelled')}
                  disabled={testDrive.status === 'Cancelled'}
                  style={{ color: 'white', backgroundColor: '#454545', border: '1px solid #454545' }}
                >
                  Set Cancelled
                </button>
                <button
                  onClick={() => handleStatusChange(testDrive.id, testDrive.db, 'Completed')}
                  disabled={testDrive.status === 'Completed'}
                  style={{ color: 'white', backgroundColor: '#454545', border: '1px solid #454545' }}
                >
                  Set Complete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CarScheduleAcceptance;
