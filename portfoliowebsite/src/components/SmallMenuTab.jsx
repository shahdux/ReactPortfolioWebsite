import React, { Component } from 'react';
import "./SmallMenuTab.css";
const SmallMenuTab = (props) => {
    return ( <>
        <p className='menutabtitle' style={{ color: props.meucolor }}>{props.menutabtitle}</p>
         {/* <p className='bluemenutabtitle' >{props.menutabtitleblue}</p> */}
    </>
     );
}
 
export default SmallMenuTab;