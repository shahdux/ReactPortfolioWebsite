import React, { Component } from 'react';
import "./Home.css";
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import SectionSubtitle from '../components/SectionSubtitle';
import FeaturedCard from '../components/FeaturedCard';
const Home = () => {
    return ( 
        <>
        <Navbar/>
        <Header/>

        <div className='featuredprojectsSection'>
            <div class="titlewSub">

            <SectionTitle sectiontitlename="Featured Projects"/>
            <SectionSubtitle sectionsubtitlename="Projects that best capture my approach to creating meaningful user experiences."/>
            </div>
            <div className='for3projects'>
                <FeaturedCard
                projectTitlename="Domty Rebranding"
                projectDescription="A rebranding of the well-known Egyptian company Domty, featuring interactive components and stunning visuals, and a modern and intuitive interface"
                />
            </div>

        </div>
        
        </>
     );
}
 
export default Home;
