import Link from 'next/link';
import React, {useEffect} from 'react';
import Sidebar from '@/components/Sidebars';
import DashboardNavbar from '@/components/DashboardNavbar';
import { auth } from "../../../firebaseConfig";
import { useRouter } from 'next/router';

export default function AdminHome() {
  const router = useRouter()
  useEffect(() => {
    const user = auth.currentUser

  //  if (!user || user.uid !== "1TaE0cpIawWbsbKcJ2cij6uUpmi2") {
    //  router.push('/')
    //}
    
  }, [])
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
