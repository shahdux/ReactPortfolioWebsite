import React, { Component } from 'react';
import "./SubscriptionSection.css"
import Strokebutton from './Strokebutton';
import buttonArrow from "../assets/whitearrow.svg"



const SubscriptionSection = () => {
    return ( 
        <>
        
        
       <div class="letsWorkdiv">
    <p class="letsTitle">Lets Work Together</p>
     <p class="letsDes">I'm a dedicated UX/UI designer with a passion for crafting user-centered designs. My approach combines creativity and analytical thinking to deliver solutions that resonate with users. Together, we can transform your ideas into engaging and functional experiences. Let’s collaborate to create something truly impactful!</p>
     <div class="for2buttons">
        <input class="inputc" type="text" name="email" placeholder="Your email address"/>
        {/* <input class="inputc" type="text" name="email" placeholder="Your email address"> */}
       <Strokebutton iconimg2={buttonArrow}
           buttonTextTitle="Contact me"
           />
     </div>
</div>
        </>
     );
}
 
export default SubscriptionSection;