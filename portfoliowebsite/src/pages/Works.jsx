import React, { Component, useEffect, useState } from 'react';
import "./Works.css"
import Navbar from '../components/Navbar';
import imgtitle from "../assets/workss.svg"
import SmallMenuTab from '../components/SmallMenuTab';
import gradientbg from "../assets/gradbg.svg"
import ProjectCard from '../components/ProjectCard';
import projectimg from "../assets/gizaimg.svg";
import projectimg2 from "../assets/arwebsite.svg";
import projectimg3 from "../assets/whattoeat.svg";
import projectimg4 from "../assets/event.svg";
import projectimg5 from "../assets/storyweb.svg";
import projectimg6 from "../assets/artmentoimg.svg";
import SubscriptionSection from '../components/SubscriptionSection';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { supabase } from '../Supabase';




const Works = () => {
  const [loading, setLoading] = useState(true);
              const [projects, setprojects] = useState("");
        
              useEffect(()=>{
                    async function callGetAPI3(){
                          const res = await supabase.from("Projects").select("*");
                          setprojects(res.data);
                          // console.log(res);
                          setLoading(false);
                    }
                    callGetAPI3();
              },[]);
              if (loading) return <p>Loading...</p>;
    return (
      
        <>
        
            <Helmet>
                <title>UX/UI & Digital Design Projects</title>
                <meta name="description" content="Explore Shahd Mohammad's portfolio of UX/UI, Graphic Design, Motion Graphics, Coding, and 3D projects. Discover interactive apps, websites, and creative solutions showcasing design thinking and innovation." />
                  <link rel="icon" type="image/png" href="/smalllogo.png" sizes="16x16" />    
            </Helmet>
        <Navbar/>
        
              <img className="heads" src={imgtitle}/>
              <div className="topics">
             <SmallMenuTab menutabtitle="UX/UI"
             meucolor="#1423BA"/>
             <SmallMenuTab menutabtitle="Graphic Design"/>
              <SmallMenuTab menutabtitle="Motion Graphics"/>
                            <SmallMenuTab menutabtitle="Coding"/>
              <SmallMenuTab menutabtitle="3D"/>

                            



              </div>

               <img src={gradientbg} alt="gradientbg" className="workbg"/>
    {/* <div className="forallcards">

    </div> */}


         <div className='forallcards'>
            <div className='textwcards'>       
  {

           projects.map((project)=>{
             return     <ProjectCard projectName2={project.title}
                projectimgbg={project.image_2}
                projectDes2={project.description}/>
                
            })
          }
          </div>
           </div>
        <div className='forallcards'>
            <div className='textwcards'>

          <Link to="/works/p1"  style={{ textDecoration: 'none'}}>
                  <ProjectCard projectName2="Art Mentor App"
                projectimgbg={projectimg6}
                projectDes2="An engaging app that helps designers start with their design thinking such as generate ideas..[+]"/>
                </Link>
                          <Link to="/works/p2"  style={{ textDecoration: 'none'}}>

                <ProjectCard projectName2="AR Website"
                projectimgbg={projectimg2}
                projectDes2="An engaging AR game website that explores different features of the AR game.....[+]"/>
                </Link>
                          <Link to="/works/p3"  style={{ textDecoration: 'none'}}>

                 <ProjectCard projectName2="What to eat App"
                projectimgbg={projectimg3}
                projectDes2="An intuitive cooking app that helps users avoiding loosing their ingredient when prepping for a meal.....[+]"/>
                </Link>
                
            
            </div>
            <div className='textwcards gap5'>
                    <ProjectCard projectName2="Giza Zoo Website"
                projectimgbg={projectimg}
                projectDes2="A rebranding of the popular Gizo Zoo in Egypt, showcasing the....[+]"/>
              
                
                 <ProjectCard projectName2="Event Planner App"
                projectimgbg={projectimg4}
                projectDes2="An intuitive event planner app that simplifies organizing and joining e.....[+]"/>
                  <ProjectCard projectName2="Story Website"
                projectimgbg={projectimg5}
                projectDes2="A 3D interactive story-telling website that immerses users....[+]"/>
            </div>
        </div>
        <SubscriptionSection/>
        <Footer/>
        
        
        
        
        </>
      );
}
 
export default Works;