import React, { Component } from 'react';
import "./Header.css"
import Strokebutton from './Strokebutton';
import downloadicon from '../assets/download.svg';
import arrow from '../assets/bluearrow.svg';


const Header = () => {
    return ( 
       <>
       <div className='heroSection'>
           <h6 class="heroText">HI, I am</h6>
 <div class="forbuttons">
           <Strokebutton iconimg={downloadicon}
           buttonTextTitle="Download CV"
           />
            <Strokebutton iconimg={arrow}
           buttonTextTitle="View my work"
           />
           
        </div>

       </div>
       
       
       
       
       </>
     );
}
 
export default Header;