import React, { Component } from 'react';
import "./Button.css"
const Button = (props) => {
    return ( 
        <div className='downloadButton'>
            <img src={props.iconimg} alt="" />
            <p className='buttonText'>{props.buttonTextTitle}</p>
        </div>
     );
}
 
export default Button;