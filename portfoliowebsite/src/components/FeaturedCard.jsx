import React, { Component } from 'react';
import "./FeaturedCard.css";
import TextButton from './TextButton';
import buttonArrow from "../assets/whitearrow.svg";
import { Link } from 'react-router-dom';




const FeaturedCard = (props) => {
    return ( 
        <div className="project1">
            <img src={props.projectbgimg} alt="domtybg" className='projectBg'/>
            <img src={props.projectimg} alt="domtyimg" />
        <div className="projectDesDiv">
            <h4 className="projectTitle">{props.projectTitlename}</h4>
            <p className="projectDescription">{props.projectDescription}</p>
            <Link to={props.path}  className='textdecnone'>
            <TextButton
            textColor="white"
            
            textbuttontitle="View project"
            iconimage={buttonArrow}
            />
            </Link>
           
        </div>
    </div>
     );
}
 
export default FeaturedCard;