import React, { useState } from 'react';
import Sidebar from '@/components/Sidebars';
import DashboardNavbar from '@/components/DashboardNavbar';
const testDriveData = [
  { id: 1, carName: 'Car 1', status: 'Pending' },
  { id: 2, carName: 'Car 2', status: 'Pending' },
  { id: 3, carName: 'Car 3', status: 'Pending' },
];

const CarScheduleAcceptance = () => {
  const [testDrives, setTestDrives] = useState(testDriveData);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTestDrives, setFilteredTestDrives] = useState(testDriveData);

  const handleStatusChange = (id, newStatus) => {
    const updatedTestDrives = testDrives.map((drive) => {
      if (drive.id === id) {
        return { ...drive, status: newStatus };
      }
      return drive;
    });

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
    <><Sidebar /><DashboardNavbar />
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
        {filteredTestDrives.map((drive) => (
          <li key={drive.id}>
            {drive.carName} - {drive.status}
            <button
              onClick={() => handleStatusChange(drive.id, 'Scheduled')}
              disabled={drive.status === 'Scheduled'}
              style={{ color: 'white', backgroundColor: '#454545', border: '1px solid #454545' }}
            >
              Set Scheduled
            </button>
            <button
              onClick={() => handleStatusChange(drive.id, 'Cancelled')}
              disabled={drive.status === 'Cancelled'}
              style={{ color: 'white', backgroundColor: '#454545', border: '1px solid #454545' }}
            >
              Set Cancelled
            </button>
            <button
              onClick={() => handleStatusChange(drive.id, 'Complete')}
              disabled={drive.status === 'Complete'}
              style={{ color: 'white', backgroundColor: '#454545', border: '1px solid #454545' }}
            >
              Set Complete
            </button>
          </li>
        ))}
      </ul>
    </div></div></>
  );
};

export default CarScheduleAcceptance;
