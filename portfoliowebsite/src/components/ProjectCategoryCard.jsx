import React, { Component } from 'react';
import "./ProjectCategoryCard.css";
import TextButton from './TextButton';
import bluearrow from "../assets/bluearrow.svg"

const ProjectCategoryCard = (props) => {
    return ( 
        <>
        
       
        <div class="cardone">
            <img src={props.projectcategoryimg} alt="projectimg" className='imgwidth' />
             <div class="forpgdes">
               <h5 class="projectCategoryTitle">{props.projecttitle}</h5>
               <p class="nameDes">{props.projectdescription}</p>
                 <TextButton textbuttontitle="View project" textColor="#1F266D"
        iconimage={bluearrow}
        />
            </div>
        </div> 
        
        
        </>
     );
}
 
export default ProjectCategoryCard;