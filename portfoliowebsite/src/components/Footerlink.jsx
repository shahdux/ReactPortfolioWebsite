import React, { Component } from 'react';
import "./Footerlink.css"
const Footerlink = (props) => {
    return ( 
        <div className='iconwdes'>
            <img src={props.footericon} alt="footericon" />
            <p className='loctext'>{props.footerLink}</p>
        </div>
     );
}
 
export default Footerlink;