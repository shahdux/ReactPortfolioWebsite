

import React, { useEffect, useState } from 'react';
import {supabase} from '../Supabase';
import "./Blog.css"
import Navbar from '../components/Navbar';
import Blogimg from '../assets/blogimg.svg';
import blogimg1 from '../assets/blogimg1.svg';
import blogimg2 from '../assets/blogimg2.svg';

import {Helmet} from "react-helmet";


import BlogCard from '../components/BlogCard';
import SubscriptionSection from '../components/SubscriptionSection';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Blog = () => {

    const [loading, setLoading] = useState(true);
            const [blogs, setBlogs] = useState("");
      
            useEffect(()=>{
                  async function callGetAPI3(){
                        const res = await supabase.from("Blogs").select("*");
                        setBlogs(res.data);
                        // console.log(res);
                        setLoading(false);
                  }
                  callGetAPI3();
            },[]);
            if (loading) return <p>Loading...</p>;

    return ( 
        <>
          <Helmet>
                <title>Blog</title>
                <meta name="description" content="Explore case studies, design insights, and personal thoughts on UX/UI, creativity, and digital experiences." />
                  <link rel="icon" type="image/png" href="/smalllogo.png" sizes="16x16" />    
            </Helmet>
        
        <Navbar/>
      <img class="heads" src={Blogimg} alt='blog title image'/>
            <div class="forallcards2">
                 {
           blogs.map((blog)=>{
             return    <BlogCard
             blogsimg={blog.Image}
             blogtitle={blog.Title}
             blogdes={blog.description}
             />
            })
          }
                          {/* <Link to="/blogs/blog1"  style={{ textDecoration: 'none'}} className='df'>
                {console.log(blogs[0].Title)}
                <BlogCard blogtitle={blogs[0].Title}
                blogdes="How a UX UI app helped mothers why struggle with remembering the ingredients when deciding to prep for a meal at home."
                blogsimg={blogimg1}/>
                </Link>
                                          <Link to="/blogs/blog2"  style={{ textDecoration: 'none'}} className='df df2'>

                   <BlogCard blogtitle="Top Qualities of a Professional UI Designer in Egypt"
                blogdes="There are some important qualities every UI designer in Egypt should have. Plently of UI designers in Egypt have a unique way in producing there work."
                blogsimg={blogimg2}/> </Link> */}
            </div>

        <SubscriptionSection/>
        <Footer/>
       
    
        
        </>
     );
}
 
export default Blog;