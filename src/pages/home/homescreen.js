import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='homeContainer'>
      <div className='authButtons'>
        <Link className='authElement' href="/auth/Register">Sign Up</Link>
        <span className='authElement'>|</span>
        <Link className='authElement' href="/auth/Login">Log In</Link>
        <span className='authElement'>|</span>
      </div>

      <Navbar/>
      <h1 className='homeTitle'>LUXE MOTORS</h1>
    </div>
  )
}



