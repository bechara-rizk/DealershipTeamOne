import Link from 'next/link';
import React from 'react';
import Sidebar from '@/components/Sidebars';
import Charts from '@/components/Charts';
import DashboardNavbar from '@/components/DashboardNavbar';

export default function adminCharts() {
  return (
   <><DashboardNavbar/>
          <Sidebar/>
      <div className="dashboardScreen">
          <Charts/>
        
      </div>
    </>
    
  )
}
