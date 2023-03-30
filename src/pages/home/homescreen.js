import Navbar from '@/components/Navbar'
import Image from 'next/image';
import car from '../../images/pic.jpeg'
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container'>
      <div className='authButtons'>
        <Link href="/auth/LogIn"><button>Log in</button></Link>
        <Link href="/auth/SignUp"><button>Sign Up</button></Link>
      </div>
      <Navbar/>
      <Image src={car}/>
    </div>
  )
}
