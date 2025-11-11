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
        
              <img class="heads" src={imgtitle}/>
              <div class="topics">
             <SmallMenuTab menutabtitle="UX/UI"/>
             <SmallMenuTab menutabtitle="Graphic Design"/>
              <SmallMenuTab menutabtitle="Motion Graphics"/>
                            <SmallMenuTab menutabtitle="Coding"/>
              <SmallMenuTab menutabtitle="3D"/>

                            



              </div>

               <img src={gradientbg} alt="gradientbg" class="workbg"/>
    <div class="forallcards">

    </div>
             

        
        
        
        
        
        </>
      );
}
 
export default Works;