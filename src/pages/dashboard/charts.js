import Link from 'next/link';
import React from 'react';
import Sidebar from '@/components/Sidebars';
import Charts from '@/components/Charts';

export default function adminHome() {
  return (
    <div>
        <Sidebar></Sidebar>
        <Charts></Charts>
    </div>
    
  )
}
