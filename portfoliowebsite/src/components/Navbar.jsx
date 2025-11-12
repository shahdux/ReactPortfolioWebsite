import React, { Component } from 'react';
import "./Navbar.css"
import NavLinkTitle from './NavLinkTitle';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className='navbar'>
           <Link to="/"> 
            <img src={logo} alt="" className='logo'/></Link> 
              <div className="forlinks">
                <NavLinkTitle NavlinkTitle="Services"/>
                <Link to="/works" className="no-underline"><NavLinkTitle NavlinkTitle="Works"/></Link> 
                                <NavLinkTitle NavlinkTitle="Blog"/>
                <NavLinkTitle NavlinkTitle="About Us"/>
                <NavLinkTitle NavlinkTitle="Contact Us"/>

       
        
        

    </div>
        </div>
     );
}
 
export default Navbar;