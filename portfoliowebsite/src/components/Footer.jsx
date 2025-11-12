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
        <footer className="footer">
    <div className="section1">
        <h4 className="contactText">Contact Me</h4>
        <div className="forIcons">
            <Footerlink footericon={locimg}
            footerLink="Cairo, Egypt"/>
              <Footerlink footericon={numbericon}
            footerLink="01149621442"/>
              <Footerlink footericon={mailicon}
            footerLink="shahdmohammadx@gmail.com"/>
           
             
           
        </div>
    </div>
    <div className="section1c">
      <img src={footerlogo} alt="footerlogo" />
        <div className="forIcons2">
         <NavLinkTitle NavlinkTitle="Home"/>
                  <NavLinkTitle NavlinkTitle="| Works"/>
         <NavLinkTitle NavlinkTitle="| About Us"/>
         <NavLinkTitle NavlinkTitle="| Contact Us"/>

           
        </div>
    </div>
    <div className="section1">
        <h4 className="contactText">Get in Touch</h4>
        <div className="forIcons">
            <p className="gitdes">Got a question, some feedback, or just want to connect? Don’t hesitate to reach out! I’d love to hear from you.</p>
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