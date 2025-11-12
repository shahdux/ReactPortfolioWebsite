import React, { Component } from 'react';
import "./Works.css"
import Navbar from '../components/Navbar';
import imgtitle from "../assets/workss.svg"
import SmallMenuTab from '../components/SmallMenuTab';
import gradientbg from "../assets/gradient.svg"
import ProjectCard from '../components/ProjectCard';
import projectimg from "../assets/gizaimg.svg"
const Works = () => {
    return (
        <>
        <Navbar/>
        
              <img className="heads" src={imgtitle}/>
              <div className="topics">
             <SmallMenuTab menutabtitle="UX/UI"/>
             <SmallMenuTab menutabtitle="Graphic Design"/>
              <SmallMenuTab menutabtitle="Motion Graphics"/>
                            <SmallMenuTab menutabtitle="Coding"/>
              <SmallMenuTab menutabtitle="3D"/>

                            



              </div>

               <img src={gradientbg} alt="gradientbg" className="workbg"/>
    {/* <div className="forallcards">

    </div> */}
             

        <div className='forallcards'>
            <div className='textwcards'>
                <ProjectCard projectName2="Giza Zoo Website"
                projectimgbg={projectimg}
                projectDes2="A rebranding of the popular Gizo Zoo in Egypt, showcasing the innovation and newest updates....[+]"/>
                 {/* <ProjectCard projectName2="Giza Zoo Website"
                projectDes2="A rebranding of the popular Gizo Zoo in Egypt, showcasing the innovation and newest updates....[+]"/> */}
            </div>
        </div>
        
        
        
        
        </>
      );
}
 
export default Works;