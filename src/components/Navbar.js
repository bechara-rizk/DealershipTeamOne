import React from "react";


const Navbar = () => {
return (
	/*<div className='navbar'>
    <a href="/home/homescreen">Home</a>
    <a href="/home/products">Listings</a>
    <a href="/home/about">About Us</a>
    <a href="/home/contactUs">Contact Us</a>
  </div> */
  <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
);
};

export default Navbar;
