import React, { Component } from 'react';
import "./SmallMenuTab.css";
const SmallMenuTab = (props) => {
    return ( <>
        <p className='menutabtitle' >{props.menutabtitle}</p>
         {/* <p className='bluemenutabtitle' >{props.menutabtitleblue}</p> */}
    </>
     );
}
 
export default SmallMenuTab;