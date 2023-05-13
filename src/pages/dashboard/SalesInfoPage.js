import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { IoReceiptOutline } from 'react-icons/io5';
import Sidebar from '@/components/Sidebars';
import DashboardNavbar from '@/components/DashboardNavbar';


function SalesInfoPage() {
  const [salesInfo, setSalesInfo] = useState([]);

  const getSalesInfo = () => {
    // TODO fetch the sales information from the API
    const data = [
      { name: "John Doe", totalRevenue: 5000, soldCar: "Audi", date: "2022-03-21" },
      { name: "Jane Smith", totalRevenue: 10000, soldCar: "BMW", date: "2022-03-22" },
      { name: "Bob Johnson", totalRevenue: 25000, soldCar: "Mercedes Benz", date: "2022-03-23" },
    ];
    setSalesInfo(data);
  };

  useEffect(() => {
    getSalesInfo();
  }, []);

  return (
    <><DashboardNavbar /><Sidebar /><div className="sales-info-page">
      <h1 className="sales-info-heading">Sales Information</h1>
      <table className="sales-info-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Car Sold</th>
            <th>Total Revenue</th>
            <th>Date Sold</th>
          </tr>
        </thead>
        <tbody>
          {salesInfo.map((row) => (
            <tr key={row.date}>
              <td>{row.name}</td>
              <td>{row.soldCar}</td>
              <td>${row.totalRevenue.toLocaleString()}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="sales-info-button" onClick={getSalesInfo}>
        Refresh
      </button>
      <div className="header-container">
        <Link href="http://localhost:3000/dashboard/home" className="item">
          <h6>Back</h6>
        </Link>
      </div>
    </div></>
  );
}

export default SalesInfoPage;
