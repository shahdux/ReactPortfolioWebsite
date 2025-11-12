import React, { Component } from 'react';
import "./TextButton.css";
// import buttonArrow from "../assets/whitearrow.svg"
const TextButton = (props) => {
    return ( 
        // <div className='textButton'>
        //     <p className='textclass'>{props.textbuttontitle}</p>
        //     <img src={props.iconimage} alt="icon" />
        // </div>
        <div   className='textButton' style={{color: props.textColor}}>
      <p className='textclass'>{props.textbuttontitle}</p>
                  <img src={props.iconimage} alt="icon" className='bluehover'/>

        </div>
     );
}
 
export default TextButton;