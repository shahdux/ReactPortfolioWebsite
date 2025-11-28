import React, { Component } from 'react';
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

    return ( 
        <>
            <Helmet>
                <title>Blog</title>
                <meta name="description" content="jhjkhkh" />
                  <link rel="icon" type="image/png" href="/smalllogo.png" sizes="16x16" />    
            </Helmet>
        
        <Navbar/>
      <img class="heads" src={Blogimg} alt='blog title image'/>
            <div class="forallcards2">
                
                          <Link to="/blogs/blog1"  style={{ textDecoration: 'none'}} className='df'>
                
                <BlogCard blogtitle="How I helped mothers manage their cooking ingredients"
                blogdes="How a UX UI app helped mothers why struggle with remembering the ingredients when deciding to prep for a meal at home."
                blogsimg={blogimg1}/>
                </Link>
                                          <Link to="/blogs/blog2"  style={{ textDecoration: 'none'}} className='df df2'>

                   <BlogCard blogtitle="Top Qualities of a Professional UI Designer in Egypt"
                blogdes="There are some important qualities every UI designer in Egypt should have. Plently of UI designers in Egypt have a unique way in producing there work."
                blogsimg={blogimg2}/> </Link>
            </div>

        <SubscriptionSection/>
        <Footer/>
        
        </>
     );
}
 
export default Blog;