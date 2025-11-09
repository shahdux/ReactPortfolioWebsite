import React, { Component } from 'react';
import "./SectionTitle.css"
const SectionTitle = (props) => {
    return ( 
        <p className='sectionTitle'>{props.sectiontitlename}</p>
     );
}
 
export default SectionTitle;