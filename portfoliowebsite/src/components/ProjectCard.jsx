import React, { Component } from 'react';
import "./ProjectCard.css";
import folder from "../assets/union.svg";
// import projectimg from "../assets/gizaimg.svg"

const ProjectCard = (props) => {
    return ( 
        <>
         <div className="projectcard1" >
                                <img className="projectimg" src={props.projectimgbg}/>
                                

                    <div className="foldwithtexts">
                    <img className="folder" src={folder}/>
                    <p className="apptitle">{props.projectName2}</p>
                    <p className="appdes">{props.projectDes2}</p>
                </div>
                </div>
        </>
     );
}
 
export default ProjectCard;