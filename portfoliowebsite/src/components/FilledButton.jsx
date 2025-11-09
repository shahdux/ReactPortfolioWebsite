import React, { Component } from 'react';
import "./FilledButton.css"
const FilledButton = (props) => {
    return ( 
        <div className='filledButton'>
            <p className='filledbuttontext'>{props.buttonTextTitle}</p>
            <img src={props.iconimg} alt="" />
        </div>
     );
}
 
export default FilledButton;