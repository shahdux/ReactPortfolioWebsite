import React, { Component } from 'react';
import "./Works.css"
import Navbar from '../components/Navbar';
import imgtitle from "../assets/workss.svg"
import SmallMenuTab from '../components/SmallMenuTab';
import gradientbg from "../assets/gradient.svg"
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
             

        
        
        
        
        
        </>
      );
}
 
export default Works;