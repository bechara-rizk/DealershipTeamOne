import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import { auth } from '../../../firebase';
import Link from 'next/link';


export default function Home() {
  return (
    <>
    <div className='homeContainer'>
      <div className='authButtons'>
        <img src='/images/logo.jpg' alt='logo' className='homepageLogo'/>
        <div class="dropdown">
          <button class="dropbtn">{!auth.currentUser ? "Login" : "Sign Out"} <i className="arrowLogin down"></i>
          <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            { !auth.currentUser ? <>
            <a href="/auth/Login">Login</a>
            <a href="/auth/Register">Sign Up</a>
                <a href="/auth/Login">Adminstrator login </a> </>:
            <>
                  {auth.currentUser.uid === "4rplVi6gQfW4oZSvnXGf1D4z05x2" ? <a href="/dashboard/home">Admin</a>:null}
            <a href="" onClick={() => auth.signOut}>Sign out</a>
                </>}
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



