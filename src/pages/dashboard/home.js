import Link from 'next/link';
import React from 'react';
import Sidebar from '@/components/Sidebars';
import DashboardNavbar from '@/components/DashboardNavbar';


export default function AdminHome() {
  return (
    <div className="entirePage">
    <div className="dashboardScreen">
      <div className="backgroundImage">
      <div className="overlay">
      <DashboardNavbar />
      <Sidebar />
    
        </div>
    
      </div>
      
    </div>
    </div>
  );
}
