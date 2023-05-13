import Link from 'next/link';
import React from 'react';
import Sidebar from '@/components/Sidebars';
import CarSchedulePage from '@/components/CarScheduling';
import DashboardNavbar from '@/components/DashboardNavbar';

export default function adminCharts() {
  return (
    <div className="side-content">
    <Sidebar/>
       <DashboardNavbar/>
        <CarSchedulePage/>
      
 </div>
  );
}
