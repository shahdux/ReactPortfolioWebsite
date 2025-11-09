import React, { Component } from 'react';
import "./NavLinkTitle.css"
const NavLinkTitle = (props) => {
    return ( 
        <p className='navLink'>{props.NavlinkTitle}</p>
     );
}
 
export default NavLinkTitle;