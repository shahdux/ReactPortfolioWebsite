import React, { Component } from 'react';
import "./ProjectCategoryCard.css"
const ProjectCategoryCard = () => {
    return ( 
        <>
        
       
        <div class="card">
            {/* <img src="images/imgone.svg" alt=""> */}
             <div class="forpgdes">
               <h5 class="projectCategoryTitle">UX/UI Projects</h5>
               <p class="nameDes">Crafting intuitive, user-centered interfaces that balance form and function across web and mobile platforms.</p>
                <div class="textButton">
                <p class="viewButton bluetext">View project</p>
                {/* <img src="images/bluearr.svg" alt=""> */}
            </div>
            </div>
        </div> 
        
        
        </>
     );
}
 
export default ProjectCategoryCard;