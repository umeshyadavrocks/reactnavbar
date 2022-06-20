import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #11f2ee;
height: 150px;
display: flex;
justify-content: space-between;
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
border-bottom: 10px solid grey;
`;
export const Image = styled.img`
max-width: 100%;
height: auto;
padding: 1.2%;
@media only screen and (max-width: 768px){
	{  
	 max-width: 20%;
	}
`;
export const Name = styled.h3`
max-width: 100%;
font-size: 2vw;
line-height: 0.7cm;
@media only screen and (max-width: 768px){
	{  
	  font-size: 3vw;
	  line-height: 0.5cm;
	}
`;

export const NavLink = styled(Link)`
color: black;
background-color: #eb4034;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
margin-right: 10px;
border-radius: 5px;
margin-bottom: 2px;
&.active {
	color: #000000;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
margin-top: auto;
margin-left: auto;
@media screen and (max-width: 768px) {
	display: none;
}
`;

