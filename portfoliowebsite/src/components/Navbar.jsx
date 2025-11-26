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
                <Link to="/works" className="no-underline"><NavLinkTitle NavlinkTitle="Works"/></Link> 
                <Link to="/blogs" className="no-underline">
                                <NavLinkTitle NavlinkTitle="Blog"/>
                </Link>
                                <Link to="/about" className="no-underline">
                <NavLinkTitle NavlinkTitle="About Us"/>
                                </Link>
                                                                <Link to="/contact" className="no-underline">

                <NavLinkTitle NavlinkTitle="Contact Us"/></Link>

       
        
        

    </div>
        </div>
     );
}
 
export default Navbar;