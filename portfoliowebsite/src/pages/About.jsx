import React, { Component } from 'react';
import "./About.css"
import Navbar from '../components/Navbar';
import SectionTitle from './../components/SectionTitle';
import arrowdecor from '../assets/curvedecor.svg';
import aboutimages from '../assets/aboutimg.png';
import ValueCard from '../components/ValueCard';
import number1 from '../assets/one.svg';
import number2 from '../assets/two.svg';
import number3 from '../assets/thre.svg';
import number4 from '../assets/four.svg';
import number5 from '../assets/five.svg';
import number6 from '../assets/six.svg';
import software1 from '../assets/figma.svg';
import software2 from '../assets/ai.svg';
import software3 from '../assets/ps.svg';
import software4 from '../assets/vs.svg';




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
                 <ValueCard
                numberimg={number2}
                 valuetitle="Striving for Excellence"
                valuedes="Continuously push boundaries to deliver high-quality results, fostering innovation and growth in every project."/>
 <ValueCard
                numberimg={number3}
                 valuetitle="Fostering Creativity"
                valuedes="Cultivate an inspiring environment where individuals feel encouraged to explore new ideas and take creative risks."/>
 <ValueCard
                numberimg={number4}
                 valuetitle="Empowering Learning"
                valuedes="Provide accessible guidance to help users learn at their own pace, boosting confidence and mastery over time."/>
 <ValueCard
                numberimg={number5}
                 valuetitle="Inclusion and Accessibility"
                valuedes="Design for inclusivity, ensuring that all users, regardless of ability, can engage fully with the product or service."/>
 <ValueCard
                numberimg={number6}
                 valuetitle="Transparent Communication"
                valuedes="Foster open, honest, and clear dialogue to build trust and ensure all users are aligned."/>


            </div>



</div>
<div className='elevatediv'>
    <p className='elevatetext'>I Can help elevate your work today!</p>
  
</div>
        <div className='imagewdiv'>
               <SectionTitle sectiontitlename="Tools I use"/>
               <div className='forvalueCards'>
                <img src={software1} alt="figma icon" />
                <img src={software3} alt="illustrater icon" />
                                <img src={software2} alt="photoshop icon" />
                <img src={software4} alt="vs code icon" />

               </div>
        </div>

        
        </>
     );
}
 
export default About;