import React, { Component } from 'react';
import "./Strokebutton.css"
const Strokebutton = (props) => {
    return ( 
        <div className='downloadButton'>
            <img src={props.iconimg} alt="" className='iconhovered'/>
            <p className='buttonText'>{props.buttonTextTitle}</p>
            <img src={props.iconimg2} alt="" />
        </div>
     );
}
 
export default Strokebutton;