import React, { Component } from 'react';
import "./Blog.css"
import Navbar from '../components/Navbar';
import Blogimg from '../assets/blogimg.svg';
import blogimg1 from '../assets/blogimg1.svg';
import bgblur from '../assets/bgblur.png';


import BlogCard from '../components/BlogCard';

const Blog = () => {
    return ( 
        <>
        
        <Navbar/>
      <img class="heads" src={Blogimg} alt='blog title image'/>
            <div class="forallcards2">
                <BlogCard blogtitle="How I helped mothers manage their cooking ingredients"
                blogdes="How a UX UI app helped mothers why struggle with remembering the ingredients when deciding to prep for a meal at home."
                blogsimg={blogimg1}/>
            </div>
            <img src={bgblur} alt="bg blur" className='bgblurstyle' />

        
        
        </>
     );
}
 
export default Blog;