import React, { Component } from 'react';
import "./Contact.css"
import Navbar from '../components/Navbar';
import FilledButton from '../components/FilledButton';
import locimg from "../assets/loc.svg";
import mailicon from "../assets/mail.svg"
import behance from "../assets/behance.svg";
import linkedin from "../assets/link.svg";
import numbericon from "../assets/phone.svg";

const Contact = () => {
    return ( 
        <>
        <Navbar/>
        <div className="bigcontcont">

<div className="contactForm">
    <div className="contactDetailsdiv">
        <p className="contacttitkle">Let’s Get in Touch</p>
        <div className="iconswtexts">
            <div className="iconwdes">
                <img src={locimg} alt="location icon"/>
                <p className="info">Cairo, Egypt</p>

            </div>
             <div className="iconwdes">
                <img src={numbericon} alt="phone icon"/>
                <p className="info">01149621442</p>

            </div>
             <div class="iconwdes">
                <img src={behance} alt="behnace icon"/>
                <p class="info">shahdmohammad3</p>

            </div>
             <div class="iconwdes">
                <img src={linkedin} alt="linkedin icon"/>
                <p class="info">shahd mohammad</p>

            </div>
             <div class="iconwdes">
                <img src={mailicon} alt="email icon"/>
                <p class="info">shahdmohammadx@gmail.com</p>

            </div>
        </div>

    </div>
    <div class="inputDivholder">
        <div class="twoinputs">
            <input class="nameinput" type="text" name="" id="" placeholder="First Name"/>
                        <input class="nameinput" type="text" name="" id="" placeholder="First Name"/>

        </div>
        <input class="nameinput longerwidth" type="text" name="" id="" placeholder="Email"/>
        <input class="nameinput p2" type="text" name="" id="" placeholder="Enter your message here.."/>
       <div className='submitButton'>
        <p className='subButton'>Submit</p>
       </div>

    </div>
</div>
</div>

        
        </>
     );
}
 
export default Contact;