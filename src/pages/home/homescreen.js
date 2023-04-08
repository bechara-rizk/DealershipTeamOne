import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div className='homeContainer'>
      <div className='authButtons'>
        <span className='authElement'>Login</span>
      </div>
      <Navbar/>
      <div className='homescreenCentered'>
        <h1 className='homeTitle'>A Luxury Car Voyage</h1>
        <div className='discoverHomeButton'>
          <span className='discoverHomeButton'>Discover <i className="arrow right"></i></span>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  )
}



