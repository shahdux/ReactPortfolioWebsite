import React, { Component } from 'react';
import "./Navbar.css"
import NavLinkTitle from './NavLinkTitle';
import logo from '../assets/logo.svg';
const Navbar = () => {
    return ( 
        <div className='header'>
            <img src={logo} alt="" />
              <div class="forlinks">
                <NavLinkTitle NavlinkTitle="Services"/>
                <NavLinkTitle NavlinkTitle="Works"/>
                                <NavLinkTitle NavlinkTitle="Blog"/>
                <NavLinkTitle NavlinkTitle="About Us"/>
                <NavLinkTitle NavlinkTitle="Contact Us"/>

       
        
        

    </div>
        </div>
     );
}
 
export default Navbar;