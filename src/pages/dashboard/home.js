import Link from 'next/link';
import React from 'react';
import Sidebar from '@/components/Sidebars';

export default function adminHome() {
  return (
    <div className="dashboardScreen">
        <Sidebar></Sidebar>
    </div>
  )
}
