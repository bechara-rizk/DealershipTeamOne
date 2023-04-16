import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import Link from 'next/link';


export default function Home() {
  return (
    <>
    <div className='homeContainer'>
      <div className='authButtons'>
        <img src='/images/logo.jpg' alt='logo' className='homepageLogo'/>
        <div class="dropdown">
          <button class="dropbtn">Log in <i className="arrowLogin down"></i>
          <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Login</a>
            <a href="#">Sign Up</a>
            <a href="#">Adminstrator login </a>
          </div>
   
        </div>
      </div>
      <Navbar/>
      <div className='homescreenCentered'>
        <h1 className='homeTitle'>A Luxury Car Voyage</h1>
        <div className='discoverHomeButton'>
          <span className=''>Discover <i className="arrow right"></i></span>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  )
}



