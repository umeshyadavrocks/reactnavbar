import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from "../Images/logo.png";

import './Navbar.css'

export default function Navbar({
    brand,
	village,
	district,
    links
}){

    const [isMenuClosed, setMenuClosed] = useState(true);

    return(
        <div className="nav-container" style={{backgroundColor: "#11F2EE", color: "black"}}>
        <nav>
			<div className='logo'>
				<img className='imglogo' src={logo} alt="logo" />
			</div>
            <div className="nav-brand">
				<p>{brand}</p>
				<p>{village}</p>
				<p>{district}</p>
			</div>
            <div className="nav-hamburguer-icon" onClick={() => setMenuClosed(!isMenuClosed)}>☰</div>
            <div className="nav-links">
                {links.map((node) =>{
                    return(<Link key={node.to} to={node.link} style={{color: "black"}}>{node.text}</Link>);
                })}
            </div> 
        </nav>
        <div className={`overlay-container${isMenuClosed ? "-hidden" : "-show"}`}>
            <div style={{backgroundColor: "11F2EE"}}>
                <div className="overlay-buttonClose" onClick={() => setMenuClosed(!isMenuClosed)}><span>&times;</span></div>
                <div className="overlay-menu-wrapper">
                    <div className="overlay-menu">
                        {links.map((node) =>{
                            return(<Link key={node.to} to={node.to} onClick={() => setMenuClosed(!isMenuClosed)} className="overlay-menu-item" style={{color: "white"}}>{node.text}</Link>);
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

Navbar.defaultProps = {
    brand: 'Vikas Higher Secondary School,',
	village : "Village : Jamu,",
	district : "District : Banda.",
    links:[
        {to: "/", link:"/", text: "Home"},
        {to: "/About", link:"about", text: "About"},
        {to: "/Contact", link:"contact", text: "ContactUs"},
		{to: "/OurPartners", link:"ourpartners", text: "OurPartners"},
		{to: "/Notifications", link:"notifications", text: "Notifications"},
		{to: "/Alumni", link:"alumni", text: "Alumni"}
    ],
}
