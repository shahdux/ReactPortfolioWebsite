import React, { Component } from 'react';
import "./Works.css"
import Navbar from '../components/Navbar';
import imgtitle from "../assets/workss.svg"
import SmallMenuTab from '../components/SmallMenuTab';
const Works = () => {
    return (
        <>
        <Navbar/>
        
              <img class="heads" src={imgtitle}/>
              <SmallMenuTab menutabtitleblue="UX/UI"/>
             

        
        
        
        
        
        </>
      );
}
 
export default Works;