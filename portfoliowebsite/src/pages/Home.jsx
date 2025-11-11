import React, { Component } from 'react';
import "./Home.css";
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import SectionSubtitle from '../components/SectionSubtitle';
import FeaturedCard from '../components/FeaturedCard';
import domty from "../assets/domtymockup.svg"
import redbg from "../assets/redbg.svg";
import purpbg from "../assets/purp.svg"
import art from "../assets/artmento.svg"
import p2bg from "../assets/storybg.svg"
import story from "../assets/lap.svg";
import arrowdiv from "../assets/SPINARRROW.svg";
import CircularText from '../components/CircularText ';
import labmocukup from "../assets/labm.svg";
import TextButton from '../components/TextButton';
import buttonArrow from "../assets/whitearrow.svg"
import ProjectCategoryCard from '../components/ProjectCategoryCard';
import projectimg from "../assets/ux.svg";
import projectimg2 from "../assets/graphic.svg";
import coding from "../assets/coding.svg";
import motion from "../assets/motion.svg";
import BounceCards from '../components/BounceCards'
import SubscriptionSection from '../components/SubscriptionSection';




 





const Home = () => {
  const images = [
  "https://picsum.photos/400/400?grayscale",
  "https://picsum.photos/500/500?grayscale",
  "https://picsum.photos/600/600?grayscale",
  "https://picsum.photos/700/700?grayscale",
  "https://picsum.photos/300/300?grayscale"
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
];
    return ( 
        <>
        <Navbar/>
        <Header/>

        <div className='featuredprojectsSection'>
            <div class="titlewSub">

            <SectionTitle sectiontitlename="Featured Projects"/>
            <SectionSubtitle sectionsubtitlename="Projects that best capture my approach to creating meaningful user experiences."/>
                    <img src={arrowdiv} alt="" class="animate"/>
                    <CircularText
  text=" DISCOVER MY WORK * VIEW ALL PROJECTS *"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
  
/>




            </div>
            <div className='for3projects'>
                <FeaturedCard
                projectTitlename="Domty Rebranding"
                projectbgimg={redbg}
                                projectimg={domty}

                projectDescription="A rebranding of the well-known Egyptian company Domty, featuring interactive components and stunning visuals, and a modern and intuitive interface"
                />
                  <FeaturedCard
                projectTitlename="Art Mentor App"
                  projectbgimg={purpbg}
                                projectimg={art}
                projectDescription="An engaging app that helps designers start with their design thinking process such as generate ideas, create mood board, receive feedback and more."
                />
                  <FeaturedCard
                projectTitlename="Story Website"
                  projectbgimg={p2bg}
                                projectimg={story}
                projectDescription="A 3D interactive story-telling website that immerses users into a captivating experience.  "
                />
                
            </div>

        </div>
        <div class="forvideoplacegolder">
    {/* <img src="images/purpv.svg" alt="" class="imgst"> */}
    <img src={labmocukup} alt="videomockup" class="imgst" />
</div>
       
<div class="categories">

<ProjectCategoryCard
projectcategoryimg={projectimg}
projecttitle="UX/UI Projects"
projectdescription="Crafting intuitive, user-centered interfaces that balance form and function across web and mobile platforms."
/>
<ProjectCategoryCard
projectcategoryimg={projectimg2}
projecttitle="Graphic Design Projects"
projectdescription="Visual storytelling through branding, typography, layouts, and creative visuals for both digital and print."
/>
<ProjectCategoryCard
projectcategoryimg={coding}
projecttitle="Coding Projects"
projectdescription="Interactive experiences and functional prototypes built with clean, scalable code — where design meets development."
/><ProjectCategoryCard
projectcategoryimg={motion}
projecttitle="Motion Graphics Projects"
projectdescription="Animated visuals that bring stories, concepts, and interfaces to life through motion and timing."
/>




</div>

<div className='testimonialsSection'>
  <SectionTitle sectiontitlename="Collaborations & Feedback"/>
 

<BounceCards
  className="custom-bounceCards"
  images={images}
  containerWidth={500}
  containerHeight={250}
  animationDelay={1}
  animationStagger={0.08}
  easeType="elastic.out(1, 0.5)"
  transformStyles={transformStyles}
  enableHover={false}
/>
</div>


<SubscriptionSection/>





        </>
     );
}
 
export default Home;
