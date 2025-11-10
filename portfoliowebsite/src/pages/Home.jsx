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
import arrowdiv from "../assets/arrowdiv.svg"



const Home = () => {
    return ( 
        <>
        <Navbar/>
        <Header/>

        <div className='featuredprojectsSection'>
            <div class="titlewSub">

            <SectionTitle sectiontitlename="Featured Projects"/>
            <SectionSubtitle sectionsubtitlename="Projects that best capture my approach to creating meaningful user experiences."/>
                    <img src={arrowdiv} alt="" class="animate"/>

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
        
        </>
     );
}
 
export default Home;
