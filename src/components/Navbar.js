import React from "react";
import Link from "next/link";

const Navbar = () => {
return (
  <div className='navbar'>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
  </div>
);
};

export default Navbar;
