import React, { Component } from 'react';
import "./SectionTitle.css"
const SectionTitle = (props) => {
    return ( 
        <p className='sectionTitle'  style={{ color: props.color2 }}>{props.sectiontitlename}</p>
     );
}
 
export default SectionTitle;