import React, { Component } from 'react';
import "./About.css"
import Navbar from '../components/Navbar';
import SectionTitle from './../components/SectionTitle';
import arrowdecor from '../assets/curvedecor.svg';
import aboutimages from '../assets/aboutimg.png';
import ValueCard from '../components/ValueCard';
import number1 from '../assets/one.svg';


const About = () => {
    return ( 
        <>
        <Navbar/>
        <div className='imagewdiv'>
            <img src={arrowdecor} alt="three lines textdecor" className='marginleft'/>
        <SectionTitle sectiontitlename="About Me"/>
        <p className='aboutBg'>
            I’m a very passionate UX/UI Designer who creates interfaces that are both visually attractive and user centered. I create designs through mobile Apps, websites, graphics and more. Im always determined to come up with solutions that would best benefit my target users. This dedication helps me go an extra mile in order to achieve best possible UX solutions.
        </p>
<img src={aboutimages} alt="project mockups" className='imgwidth'/>
      
           
            
        </div>
<div className='imagewdiv'>
            <SectionTitle sectiontitlename="Core Values"/>
            <div className='forvalueCards'>
                <ValueCard
                numberimg={number1}
                 valuetitle="Emapthy-Driven Design"
                valuedes="Understanding the needs, emotions, and challenges of users to create a more meaningful and relevant experience."/>

            </div>



</div>
        
        
        </>
     );
}
 
export default About;