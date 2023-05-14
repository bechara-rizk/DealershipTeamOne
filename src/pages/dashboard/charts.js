import Link from 'next/link';
import React from 'react';
import Sidebar from '@/components/Sidebars';
import Charts from '@/components/Charts';
import DashboardNavbar from '@/components/DashboardNavbar';

export default function adminCharts() {
  return (
 
      <div className="dashboardScreen">
          <Charts/>
          <DashboardNavbar/>
          <Sidebar/>
      </div>
    
    
  )
}
