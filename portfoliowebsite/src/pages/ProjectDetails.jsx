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
import n2 from "../assets/n2.svg";
import n3 from "../assets/n3.svg";
import n4 from "../assets/n4.svg";
import SectionTitle from '../components/SectionTitle';
import SectionSubtitle from '../components/SectionSubtitle';
import SubscriptionSection from '../components/SubscriptionSection';
import Footer from '../components/Footer';
import CircularText from '../components/CircularText ';
import arrowdivwhite from "../assets/whitearrowspin.svg";
import RotatingText from '../components/RotatingText'
import { useParams } from 'react-router-dom';





const ProjectDetails = () => {


  let works ={
    p1:{
       
    
    description: 'ArtMento helps you with any design-related challenges',
    image: mockup2,
    rightimg: mockup3,
    leftimg: mockup1,
    },
     p2:{
      
   
    description: 'An AR escape room experience...',
    image: {mockup3},
     rightimg: mockup3,
    leftimg: mockup1,
    
    },
  };
  
   const { key } = useParams();
  const details = works[key];

    return ( 

        <>
        <Navbar/>
        <div className='mockupHolder22'>

        <div className="mockupText">
<p className="mockTitle">Your all in one</p>
{/* <p className="mockfeature">Moodboard generator
</p> */}
<RotatingText
  texts={['Moodboard Generator', 'Feedback provider', 'File Summarizer', 'Art Advisor']}
  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
initial={{ y: "100%", opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
exit={{ y: "100%", opacity: 0 }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>


<p className="mockupdes">{details.description}</p>

    </div>
     <div className="for3mockups">
     <img src={details.leftimg} alt="" className="widthimg"/>
       <div className="spacer"></div>
     <img src={details.image} alt="" className="fixedimg"/>
     <img src={details.rightimg} alt="" className="widthimg"/>
    </div>
        </div>
        <img src={secgradient} alt="" className="gradientdetails"/>
        <div className='featuresSection'>

         <div class="forcenteredTitles">
        {/* <p class="featuresTitle">Explore features</p> */}
        <SectionTitle sectiontitlename="Explore features"
        color2="white"/>
                            <img src={arrowdivwhite} alt="" class="animatewhite"/>
        
   <CircularText
  text=" DISCOVER MY WORK * VIEW ALL PROJECTS *"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class2"
  
/>
    </div>
  <div class="imgwpg">
<div class="firstcont">
<FeaturesCard 
numberimg={n1}
featuretitlename="Moodboard Generator"
featuretitledes="Users can easily book tickets for upcoming events, such as concerts, through the app for a experience."
/>
<FeaturesCard 
numberimg={n2}
featuretitlename="FILE SUMMARIZER"
featuretitledes="Users can easily book tickets for upcoming events, such as concerts, through the app for a experience."
/>

  </div>
   <div class="spacer2"></div>
  <div class="firstcont">
<FeaturesCard 
numberimg={n3}
featuretitlename="ART AI ASSISTANCE"
featuretitledes="Users can easily book tickets for upcoming events, such as concerts, through the app for a experience."
/>
<FeaturesCard 
numberimg={n4}
featuretitlename="FEEDACK PROVIDER"
featuretitledes="Users can easily book tickets for upcoming events, such as concerts, through the app for a experience."
/>

  </div>

</div>



        </div>
        <SubscriptionSection/>
        <Footer/>

        </>
     );
}
 
export default ProjectDetails;