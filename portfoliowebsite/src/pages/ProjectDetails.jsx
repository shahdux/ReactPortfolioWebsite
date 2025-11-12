import React, { Component } from 'react';
import "./ProjectDetails.css"
import Navbar from '../components/Navbar';
import mockup1 from "../assets/leftimg.svg";
import mockup2 from "../assets/midimg.svg";
import mockup3 from "../assets/rightimg.svg";
import secgradient from "../assets/detailsgrad.svg"

const ProjectDetails = () => {
    return ( 
        <>
        <Navbar/>
        <div className='mockupHolder22'>

        <div className="mockupText">
<p className="mockTitle">Your all in one</p>
<p className="mockfeature">Moodboard generator
</p>


<p className="mockupdes">ArtMento helps you with any design-related challenges </p>

    </div>
     <div className="for3mockups">
     <img src={mockup1} alt="" className="widthimg"/>
       <div className="spacer"></div>
     <img src={mockup2} alt="" className="fixedimg"/>
     <img src={mockup3} alt="" className="widthimg"/>
    </div>
        </div>
        <img src={secgradient} alt="" className="gradientdetails"/>

        </>
     );
}
 
export default ProjectDetails;