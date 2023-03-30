import Link from 'next/link';
import React from 'react';
import Sidebar from '@/components/Sidebars';
import DashboardNavbar from '@/components/DashboardNavbar';

export default function adminHome() {
  return (
    <div className="dashboardScreen">
        <Sidebar/>
        <DashboardNavbar/>
    </div>
  )
}
