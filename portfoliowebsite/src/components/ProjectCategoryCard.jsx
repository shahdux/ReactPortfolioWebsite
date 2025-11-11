import React, { Component } from 'react';
import "./ProjectCategoryCard.css";
import projectimg from "../assets/ux.svg"
import TextButton from './TextButton';
import bluearrow from "../assets/bluearrow.svg"

const ProjectCategoryCard = () => {
    return ( 
        <>
        
       
        <div class="cardone">
            <img src={projectimg} alt="projectimg" />
             <div class="forpgdes">
               <h5 class="projectCategoryTitle">UX/UI Projects</h5>
               <p class="nameDes">Crafting intuitive, user-centered interfaces that balance form and function across web and mobile platforms.</p>
                 <TextButton textbuttontitle="View project" textColor="#1F266D"
        iconimage={bluearrow}
        />
            </div>
        </div> 
        
        
        </>
     );
}
 
export default ProjectCategoryCard;