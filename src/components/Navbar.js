import React from "react";
import Link from "next/link";

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
  <Link href="/auth/LogIn"><button>Log in </button></Link>
  <Link href="/auth/SignUp"><button>Sign Up</button></Link>

</ul>
);
};

export default Navbar;
