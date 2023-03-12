import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavBarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/about" activeStyle>
			About
		</NavLink>
		<NavLink to="/contactUs" activeStyle>
			Contact Us
		</NavLink>
        <NavLink to="/products" activeStyle>
			Products
		</NavLink>
		<NavLink to="/LogInSignUp" activeStyle>
			Login and Sign Up
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
