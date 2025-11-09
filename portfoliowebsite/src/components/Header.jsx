import React, { Component } from 'react';
import "./Header.css"
import Button from './Button';
import downloadicon from '../assets/download.svg';

const Header = () => {
    return ( 
       <>
       <div className='heroSection'>
           <h6 class="heroText">HI, I am</h6>
 <div class="forbuttons">
           <Button iconimg={downloadicon}
           buttonTextTitle="Download CV"
           />
           
        </div>

       </div>
       
       
       
       
       </>
     );
}
 
export default Header;