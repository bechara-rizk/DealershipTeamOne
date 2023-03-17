import React from 'react';
import { MdOutlineDashboard } from "react-icons/md"
import { HiOutlineHome } from "react-icons/hi";
import { menuItems } from '../pages/api/dummy';
import { Link } from "react-router-dom"
import "../styles"
// l
import { FiBarChart2 } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { IoReceiptOutline } from "react-icons/io5";

const Sidebar = () => {
  return (

    <div className="container">
      <div className="logo">
        <MdOutlineDashboard className="logo-icon" />
        <span>Dashboard</span>
      </div>

      <div className="menu">
        <div className="item">
          <HiOutlineHome className="menu-icon"/>
          <h3>Home</h3>
        </div>
      
        <div className="item">
        <FaUser className="customer-icon" />
          <h3>Customers</h3>
        </div>
      
        <div className="item">
        <BiUser className="employee-icon" />
          <h3>Employees</h3>
        </div>
        <div className="item">
        <IoReceiptOutline className="orders-icon" />
          <h3>Orders</h3>
        </div>
        <div className="item">
        <FiBarChart2 className="chart-icon" />
          <h3>Charts</h3>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

