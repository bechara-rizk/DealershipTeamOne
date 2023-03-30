import Navbar from '@/components/Navbar'
import Image from 'next/image';
import car from '../../images/pic.jpeg'
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
      <button type="button" name="button">Button</button>
      
   
    </div>
  )
}



