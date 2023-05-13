import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import Link from 'next/link';
import AuthButtons from '@/components/AuthButtonsComp';


export default function Home() {
  return (
    <>
    <div className='homeContainer'>
      <AuthButtons/>
      <Navbar/>
      <div className='homescreenCentered'>
        <h1 className='homeTitle'>A Luxury Car Voyage</h1>
        <Link href="/home/ProductsPage" className='discoverHomeButton' style={{'text-decoration':'none'}}>
          <span className=''>Discover <i className="arrow right"></i></span>
        </Link>
      </div>
    </div>
      <Footer/>
    </>
  )
}



