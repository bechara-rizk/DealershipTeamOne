import React from "react";
import Link from "next/link";
import UserProfile from "./UserProfile";

const Navbar = () => {
return (
  <><div className='navbar'>
    <ul>
      <li><a class="active" href="/home/homescreen">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#about">About</a></li>
    </ul>
    <div className="profile">
      <UserProfile />
    </div>
  </div></>
);
};

export default Navbar;
