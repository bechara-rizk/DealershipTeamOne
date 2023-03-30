import Navbar from '@/components/Navbar'
import Image from 'next/image';
import car from '../../images/pic.jpeg'
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container'>
      <Navbar/>
      <button type="button" name="button">Button</button>
      <div className='authButtons'>
        <Link href="/auth/LogIn"><button>Log in</button></Link>
        <Link href="/auth/Register"><button>Sign Up</button></Link>
      </div>
   
    </div>
  )
}



