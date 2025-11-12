import React, { Component } from 'react';
import "./ProjectDetails.css"
import Navbar from '../components/Navbar';
import mockup1 from "../assets/leftimg.svg";
import mockup2 from "../assets/midimg.svg";
import mockup3 from "../assets/rightimg.svg";
import secgradient from "../assets/detailsgrad.svg";
import circlean from "../assets/animatecirc.svg";
import FeaturesCard from './../components/FeaturesCard';
import n1 from "../assets/n1.svg";
// import n2 from "../assets/n2.svg";
// import n3 from "../assets/n3.svg";
// import n4 from "../assets/n4.svg";




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
        <div className='featuresSection'>

         <div class="forcenteredTitles">
        <p class="featuresTitle">Explore features</p>
<img src={circlean} alt="" class="animatecircle"/>
    </div>
  <div class="imgwpg">
<div class="firstcont">
<FeaturesCard 
numberimg={n1}
featuretitlename="Moodboard Generator"
featuretitledes="Users can easily book tickets for upcoming events, such as concerts, through the app for a experience."
/>

  </div>

</div>



        </div>

        </>
     );
}
 
export default ProjectDetails;