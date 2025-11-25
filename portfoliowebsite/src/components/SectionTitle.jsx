import React, { Component } from 'react';
import "./SectionTitle.css"
const SectionTitle = (props) => {
    return ( 
        <h1 className='sectionTitle'  style={{ color: props.color2 }}>{props.sectiontitlename}</h1>
     );
}
 
export default SectionTitle;