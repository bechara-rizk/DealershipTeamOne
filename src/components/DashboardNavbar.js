import React from 'react';
import { MdNotificationsNone } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { BiMessageRoundedDetail } from 'react-icons/bi';


const DashboardNavbar = () => {
  return (
    <div className="dashNav">
      <div className="search">
        <FiSearch className='nav-icon' />
      </div>

      <div className="notification">
        <div className="indicator"></div>
        <BiMessageRoundedDetail className='nav-icon' />
      </div>

      <div className="notification">
        <div className="indicator"></div>
        <MdNotificationsNone className='nav-icon' />
      </div>

      <div className="user">
        <span>Admin Name</span>
       <img src={"https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"} alt="avatar" />
      </div>
    </div>
  )
}

export default DashboardNavbar