import React from 'react';
import logo from "../Images/logo.png"
import {
Nav,
NavLink,
Bars,
NavMenu,
Image,
Name,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Image src={logo}></Image>
		<div style={{margin:"auto", marginLeft:"0.5%"}}>
		<Name>VIKAS HIGHER SECONDARY SCHOOL</Name>
		<Name>Village : Jamu,</Name>
		<Name>District : Banda.</Name>
		</div>
		
		<Bars/>
		<NavMenu>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/contact' activeStyle>
			Contact Us
		</NavLink>
		<NavLink to='/ourpartners' activeStyle>
			Our Staff
		</NavLink>
		<NavLink to='/Notifications' activeStyle>
			Notifications
		</NavLink>
		<NavLink to='/Alumni' activeStyle>
			Alumni
		</NavLink>
		</NavMenu>
		
		
	</Nav>
	</>
);
};

export default Navbar;
