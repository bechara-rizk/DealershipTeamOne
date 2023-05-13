import React, { useState } from 'react';
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
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebarWrapper ${collapsed ? 'collapsed' : ''}`}>
      <div className={`sidebarContainer ${collapsed ? 'collapsed' : ''}`}>
        <div className="logo">
          <MdOutlineDashboard className="logo-icon" />
          <span>Luxe Motors</span>
        </div>

        <div className="menu">
          <Link passHref href="/home/homescreen">
            <div className="item">
              <HiOutlineHome className="menu-icon" />
              {!collapsed && <h3>Home</h3>}
            </div>
          </Link>


          <Link passHref href="/home/ProductsPage">
            <div className="item">
              <FaCar className="car-icon" />
              {!collapsed && <h3>Car List</h3>}
            </div>
          </Link>


          <Link passHref href="/dashboard/SalesInfoPage">
            <div className="item">
              <IoReceiptOutline className="orders-icon" />
              {!collapsed && <h3>Orders</h3>}
            </div>
          </Link>

          <Link passHref href="/dashboard/CarSchedule">
            <div className="item">
              <FaCalendarAlt className="TestSchedule-icon" />
              {!collapsed && <h3>TestSchedule</h3>}
            </div>
          </Link>

          <Link passHref href="/dashboard/charts">
            <div className="item">
              <FiBarChart2 className="chart-icon" />
              {!collapsed && <h3>Charts</h3>}
            </div>
          </Link>
        </div>

        <div className="toggle" onClick={handleToggle}>
          <div className="toggle-icon"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
