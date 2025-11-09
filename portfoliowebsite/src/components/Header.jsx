import React, { Component } from 'react';
import "./Header.css"
import Strokebutton from './Strokebutton';
import downloadicon from '../assets/download.svg';
import arrow from '../assets/bluearrow.svg';
import FilledButton from './FilledButton';
import displayCards from '../assets/hero2.svg';



const Header = () => {
    return ( 
       <>
       <div className='heroSection'>
           <h6 className="heroText">HI, I am</h6>
          <h1 className="titles">Shahd Mohammad, a UI/UX Designer &  Front-End Developer. I design experiences that connect empathy with creativity. </h1>

      
    
 <div class="forbuttons">
           <Strokebutton iconimg={downloadicon}
           buttonTextTitle="Download CV"
           />
            <FilledButton
           buttonTextTitle="View my work"
            
           iconimg={arrow}
           />
           
        </div>
    <img src={displayCards} alt="" class="hero2" />

       </div>
       
       
       
       
       </>
     );
}
 
export default Header;