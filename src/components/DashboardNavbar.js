import React from 'react';
import { MdNotificationsNone } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import Link from 'next/link';


const DashboardNavbar = () => {
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

      <div className="signout">
      <Link href="" className="item">
      <span>Sign out</span>
          </Link>
      </div>
    </div>
  )
}

export default DashboardNavbar

