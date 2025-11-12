import React, { Component } from 'react';
import "./FeaturesCard.css"
const FeaturesCard = (props) => {
    return ( 
        <>
        <div className="feature1">
    <img src={props.numberimg} alt="numbers"/>
    <p className="featureTitle">{props.featuretitlename}</p>
      <p className="featureDes">{props.featuretitledes}</p>
</div>
        </>
     );
}
 
export default FeaturesCard;