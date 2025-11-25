import React, { Component } from 'react';
import "./ValueCard.css";
const ValueCard = (props) => {
    return (  
        <>
        <div className='valueCard'>

        <img src={props.numberimg} alt="numbers" className='numberimg'/>
        <h4 className='valueTitle'>{props.valuetitle}</h4>
        <p className='valuedescription'>{props.valuedes}</p>
        </div>
        
        
        
        </>
    );
}
 
export default ValueCard;