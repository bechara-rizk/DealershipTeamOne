import React from "react";
import Link from "next/link";
import UserProfile from "./UserProfile";

const Navbar = () => {
return (
  <><div className='navbar'>
    <ul>
      <li><a class="active" href="/home/homescreen">Home</a></li>
      <li><a href="/home/ProductsPage">Products</a></li>
      <li><a href="/home/contactUs">Contact</a></li>
      <li><a href="/home/aboutUs">About</a></li>
    </ul>
    <div className="profile">
      <UserProfile />
    </div>
  </div></>
);
};

export default Navbar;
