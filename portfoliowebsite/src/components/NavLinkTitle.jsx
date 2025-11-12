import React, { Component } from 'react';
import "./NavLinkTitle.css"
const NavLinkTitle = (props) => {
    return ( 
        <p className='navLink' style={{ color: props.linkcolor }}>{props.NavlinkTitle}</p>
     );
}
 
export default NavLinkTitle;