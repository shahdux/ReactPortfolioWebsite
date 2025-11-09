import React, { Component } from 'react';
import "./FeaturedCard.css";
import domty from "../assets/domtymockup.svg"
import redbg from "../assets/redbg.svg"

const FeaturedCard = (props) => {
    return ( 
        <div className="project1">
            <img src={redbg} alt="domtybg" className='projectBg'/>
            <img src={domty} alt="domtyimg" />
        <div className="projectDesDiv">
            <h4 className="projectTitle">{props.projectTitlename}</h4>
            <p className="projectDescription">{props.projectDescription}</p>
           
        </div>
    </div>
     );
}
 
export default FeaturedCard;