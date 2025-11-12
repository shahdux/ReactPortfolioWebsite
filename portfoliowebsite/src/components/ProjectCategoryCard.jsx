import React, { Component } from 'react';
import "./ProjectCategoryCard.css";
import TextButton from './TextButton';
import bluearrow from "../assets/bluearrow.svg"

const ProjectCategoryCard = (props) => {
    return ( 
        <>
        
       
        <div className="cardone">
            <img src={props.projectcategoryimg} alt="projectimg" className='imgwidth' />
             <div className="forpgdes">
               <h5 className="projectCategoryTitle">{props.projecttitle}</h5>
               <p className="nameDes">{props.projectdescription}</p>
                 <TextButton textbuttontitle="View project" textColor="#1F266D"
        iconimage={bluearrow}
        />
            </div>
        </div> 
        
        
        </>
     );
}
 
export default ProjectCategoryCard;