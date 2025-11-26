import React, { Component } from 'react';
import "./BlogCard.css";
import TextButton from './TextButton';
import bluearrow from "../assets/bluearrow.svg"

const BlogCard = (props) => {
    return ( 
        <>
        
        <div class="blogcard">
                       <div class="forblogpg">
                           <p class="blogTitle">{props.blogtitle}</p>
                           <p class="blogdes">{props.blogdes}</p>
                            <TextButton 
                            textbuttontitle="View More"
                            textColor="#2D39B8"
                            iconimage={bluearrow}/>
                       </div>
                       <img src={props.blogsimg} class="w35"/>
                     </div>
        
        
        
        
        </>
     );
}
 
export default BlogCard;