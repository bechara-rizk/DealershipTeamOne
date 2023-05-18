import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { IoReceiptOutline } from 'react-icons/io5';
import Sidebar from '@/components/Sidebars';
import DashboardNavbar from '@/components/DashboardNavbar';
import { auth, firestore } from "../../../firebaseConfig";
import { collection, query, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { FaSearch } from "react-icons/fa";

function SalesInfoPage() {
  const [salesInfo, setSalesInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    const user = auth.currentUser;

    if (!user || user.uid !== "1TaE0cpIawWbsbKcJ2cij6uUpmi2") {
      router.push('/');
    }
  }, []);

  const getSalesInfo = async () => {
    try {
      const salesCollection = collection(firestore, 'sales');
      const salesSnapshot = await getDocs(salesCollection);
      const data = salesSnapshot.docs.map((doc) => doc.data());
      setSalesInfo(data);
    } catch (error) {
      // Handle error
      console.error('Error fetching sales information:', error);
    }
  };

  useEffect(() => {
    getSalesInfo();
  }, []);


  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredSalesInfo = salesInfo.filter((data) =>
  data.carInfo && data.carInfo.make && data.carInfo.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
  data.carInfo && data.carInfo.model && data.carInfo.model.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
<>
<DashboardNavbar />
<Sidebar />
<div className="sales-info-page">
<h1 className="sales-info-heading">Sales Information</h1>
<div className="search-container">
<input
         className="search-input"
         type="text"
         placeholder="Search..."
         value={searchTerm}
         onChange={handleSearchInputChange}
       />
<FaSearch className="search-icon" />
</div>
<table className="sales-info-table">
<thead>
<tr>
<th>Make</th>
<th>Model</th>
<th>Total Revenue</th>
<th>Date Sold</th>
</tr>
</thead>
<tbody>
{filteredSalesInfo.map((row) => (
<tr key={row.date}>
<td>{row.carInfo.make} {row.carInfo.model}</td>
<td>{row.carInfo.model}</td>
<td>${row.price}</td>
<td>{row.date.toDate().toLocaleDateString()}</td>
</tr>
))}
</tbody>
</table>
<button className="sales-info-button" onClick={getSalesInfo}>
Refresh
</button>
</div>
</>
);
}

export default SalesInfoPage;