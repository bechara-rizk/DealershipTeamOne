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

const Sidebar = () => {
  return (
    <div className="sidebarWrapper">
      <div className="sidebarContainer">
        <div className="logo">
          <MdOutlineDashboard className="logo-icon" />
          <span>Luxe Motors</span>
        </div>

        <div className="menu">
          <Link href="/home/homescreen" className="item">
            <HiOutlineHome className="menu-icon" />
            <h3>Home</h3>
          </Link>

          <Link href="/dashboard/carlistingsDashboard" className="item">
            <FaCar className="car-icon" />
            <h3>Car List</h3>
          </Link>

          <Link href="/dashboard/SalesInfoPage" className="item">
            <IoReceiptOutline className="orders-icon" />
            <h3>Orders</h3>
          </Link>

          <Link href="/dashboard/CarSchedule" className="item2">
            <FaCalendarAlt className="TestSchedule-icon" />
            <h3>Test Schedule</h3>
          </Link>

          <Link href="/dashboard/charts" className="item">
            <FiBarChart2 className="chart-icon" />
            <h3>Charts</h3>
          </Link>
        </div>

        <div className="toggle">
          <div className="toggle-icon"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
