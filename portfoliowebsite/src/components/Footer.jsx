import React, { Component } from 'react';
import "./Footer.css";
import Footerlink from './Footerlink';
import locimg from "../assets/loc.svg";
import numbericon from "../assets/phone.svg";
import mailicon from "../assets/mail.svg"
import footerlogo from "../assets/biglogo.svg";
import behance from "../assets/behance.svg";
import linkedin from "../assets/link.svg";
import NavLinkTitle from './NavLinkTitle';








const Footer = () => {
    return ( 
        <>
        <footer class="footer">
    <div class="section1">
        <h4 class="contactText">Contact Me</h4>
        <div class="forIcons">
            <Footerlink footericon={locimg}
            footerLink="Cairo, Egypt"/>
              <Footerlink footericon={numbericon}
            footerLink="01149621442"/>
              <Footerlink footericon={mailicon}
            footerLink="shahdmohammadx@gmail.com"/>
           
             
           
        </div>
    </div>
    <div class="section1c">
      <img src={footerlogo} alt="footerlogo" />
        <div class="forIcons2">
         <NavLinkTitle NavlinkTitle="Home"/>
                  <NavLinkTitle NavlinkTitle="| Works"/>
         <NavLinkTitle NavlinkTitle="| About Us"/>
         <NavLinkTitle NavlinkTitle="| Contact Us"/>

           
        </div>
    </div>
    <div class="section1">
        <h4 class="contactText">Get in Touch</h4>
        <div class="forIcons">
            <p class="gitdes">Got a question, some feedback, or just want to connect? Don’t hesitate to reach out! I’d love to hear from you.</p>
              <Footerlink footericon={behance}
            footerLink="shahdmohammad3"/>
             <Footerlink footericon={linkedin}
            footerLink="shahd mohammad"/>
             
        </div>
    </div>
</footer>
        </>
     );
}
 
export default Footer;