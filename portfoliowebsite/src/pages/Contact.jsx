import React, { Component, useEffect, useState } from 'react';
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
import { Helmet } from 'react-helmet';
import { supabase } from '../Supabase';

const Contact = () => {
    
    const [title,setTitle] = useState("");
    const [Email,setEmail] = useState("");
    const [msg,setMsg] = useState("");
    async function sendMsg(){
        const res = await supabase.from("contact").insert({"first_name":title,"email":Email,"message":msg});
    }
    const [loading, setLoading] = useState(true);
             const [faqs, setFaqs] = useState("");
       
             useEffect(()=>{
                   async function callGetAPI3(){
                         const res = await supabase.from("FAQS").select("*");
                         setFaqs(res.data);
                         // console.log(res);
                         setLoading(false);
                   }
                   callGetAPI3();
             },[]);
             if (loading) return <p>Loading...</p>;

    return ( 
        
        <>
        
           <Helmet>
                <title>Contact Me | Shahd Mohammad</title>
                <meta name="description" content="Get in touch with Shahd Mohammad, UX/UI designer. Reach out for collaborations, inquiries, or to discuss design projects and creative opportunities." />
                  <link rel="icon" type="image/png" href="/smalllogo.png" sizes="16x16" />    
            </Helmet>
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
            <input onChange={(i)=>{setTitle(i.target.value)}} class="nameinput" type="text" name="" id="" placeholder="First Name"/>
                        <input class="nameinput" type="text" name="" id="" placeholder="First Name"/>

        </div>
        <input onChange={(i)=>{setEmail(i.target.value)}} class="nameinput longerwidth" type="text" name="" id="" placeholder="Email"/>
        <input onChange={(i)=>{setMsg(i.target.value)}} class="nameinput p2" type="text" name="" id="" placeholder="Enter your message here.."/>
       <div onClick={sendMsg} className='submitButton'>
        <p className='subButton'>Submit</p>
       </div>

    </div>
</div>
</div>
 {/* <div className='imagewdiv padding200'>
    <SectionTitle  sectiontitlename="Frequently Asked Questions"/>
{
           faqs.map((faq)=>{
             return   <div className='forvalueCards alignstart'>
                   <FAQs question={faq.question_EN}
                   answer={faq.answer_EN}/>
                             
                </div>



            })
          }
          </div> */}
         <div className='imagewdiv padding200'>
  <SectionTitle sectiontitlename="Frequently Asked Questions" />

  <div className='forvalueCards alignstart' style={{ display: 'flex', gap: '20px' }}>
    {/* Left column */}
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {faqs.slice(0, 3).map((faq) => (
        <FAQs key={faq.id} question={faq.question_EN} answer={faq.answer_EN} />
      ))}
    </div>

    {/* Right column */}
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {faqs.slice(3, 6).map((faq) => (
        <FAQs key={faq.id} question={faq.question_EN} answer={faq.answer_EN} />
      ))}
    </div>
  </div>
</div>
<SubscriptionSection/>
<Footer/>
        
        </>
     );
}
 
export default Contact;