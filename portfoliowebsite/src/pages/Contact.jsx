import React, { Component } from 'react';
import "./Contact.css"
import Navbar from '../components/Navbar';
import FilledButton from '../components/FilledButton';
import locimg from "../assets/loc.svg";
import mailicon from "../assets/mail.svg"
import behance from "../assets/behance.svg";
import linkedin from "../assets/link.svg";
import numbericon from "../assets/phone.svg";
import SectionTitle from '../components/SectionTitle';
import FAQs from '../components/FAQs';
import SubscriptionSection from '../components/SubscriptionSection';
import Footer from '../components/Footer';

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
<div className='imagewdiv padding200'>
    <SectionTitle  sectiontitlename="Frequently Asked Questions"/>
                <div className='forvalueCards alignstart'>
                   <FAQs question="How do you start your design process?"
                   answer="I start by identifying what the problem is, next I start to ideate and come up with solutions that would be the most suitable for the specific case. I then start to create wireframes in order to visualize how the design will look like , gather feedback, and start designing the final output. "/>
                                 <FAQs question="Are you open to full-time opportunities??"
                   answer="Yes Im open to any opportunities that would help me build more connections and create something that has a real impact on people."/>
                                 <FAQs question="Can you code your designs too?"
                   answer="Yes, I use HTML and CSS as well as the basics of JavaScript.  "/>              <FAQs question="What tools do you use when designing?"
                   answer="I mainly use Figma for UI design, prototyping, and design systems.
For illustrations and icons, I use Adobe Illustrator."/>              <FAQs question="How long does a project usually take?"
                   answer="It depends on the project size.
A simple landing page may take a few days, while a full app design with research and prototyping may take a few weeks."/>              <FAQs question="Can you collaborate with developers?"
                   answer="Of course. I prepare assets, organize components, document interactions, and work closely with developers to ensure smooth handoff and accurate implementation."/>
                </div>


</div>
<SubscriptionSection/>
<Footer/>
        
        </>
     );
}
 
export default Contact;