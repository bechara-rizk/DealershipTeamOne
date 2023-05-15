import React from 'react';
import { MdNotificationsNone } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { auth } from '../../firebase';
import { useRouter } from 'next/router';



const DashboardNavbar = () => {
  const router = useRouter();
  return (
    <div className="dashNav">
      {/* <div className="search">
        <FiSearch className='nav-icon' />
      </div> */}

      
      {/* <div className="notification">
        <div className="indicator"></div>
        <BiMessageRoundedDetail className='nav-icon' />
      </div> */}
       

      <div className="user">
        <span>Admin </span>
        <span>   </span>
       <img src={"https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"} alt="avatar" />
      </div>

      <button onClick={async() => { //style this button, make it anything except for a link or a element
        await auth.signOut()
        router.push('/home/homescreen')
      }} className="signout">
      <span>Sign out</span>
      </button>
    </div>
  )
}

export default DashboardNavbar

