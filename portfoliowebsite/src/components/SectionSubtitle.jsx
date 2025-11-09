import React, { Component } from 'react';
import "./SectionSubtitle.css";
const SectionSubtitle = (props) => {
    return ( 
        <p className='sectionsubtitle'>{props.sectionsubtitlename}</p>
     );
}
 
export default SectionSubtitle;