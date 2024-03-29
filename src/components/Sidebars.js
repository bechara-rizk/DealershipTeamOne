import React from 'react';
import Link from 'next/link';
import { MdOutlineDashboard } from 'react-icons/md';
import { HiOutlineHome } from 'react-icons/hi';
import { FiBarChart2 } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import { IoReceiptOutline } from 'react-icons/io5';
import { FaCar } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebarWrapper">
      <div className="sidebarContainer">
        <div className="logo">
          <MdOutlineDashboard className="logo-icon" />
          <span>Luxe Motors</span>
        </div>

        <div className="menu">
  <Link href="/dashboard/home" className="item">
    <HiOutlineHome className="menu-icon" />
    <span className="menu-text">Home</span>
  </Link>
  <Link href="/home/homescreen" className="item">
  <FontAwesomeIcon icon={faUser} className="user-icon" />
    <span className="menu-text">Test as user</span>
  </Link>
  <Link href="/dashboard/carlistingsDashboard" className="item">
    <FaCar className="car-icon" />
    <span className="menu-text">Car List</span>
  </Link>

  <Link href="/dashboard/CustomerInfo" className="item">
  <FaUser className="user-icon" />
    <span className="menu-text">Customer Info</span>
  </Link>

  <Link href="/dashboard/SalesInfoPage" className="item2">
    <IoReceiptOutline className="orders-icon" />
    <span className="menu-text">Sales Information</span>
  </Link>
 <div>
  <Link href="/dashboard/CarScheduleAcceptance" className="item2">
    <FaCalendarAlt className="TestSchedule-icon" />
    <span className="menu-text">Test Schedule</span>
  </Link>
  </div>


</div>

        </div>

       
      </div>
   
  );
};

export default Sidebar;
