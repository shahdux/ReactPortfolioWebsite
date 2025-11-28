import React, { Component } from 'react';
import "./BlogDetails.css"
import SectionTitle from '../components/SectionTitle';
import blogcoverimg1 from "../assets/bigblog1.svg"
import blogcover2 from "../assets/blogcover2.svg"

import Navbar from '../components/Navbar';
import { useParams } from "react-router-dom";
import SubscriptionSection from '../components/SubscriptionSection';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const BlogDetails = () => {
    let allblogs ={
        blog1:{
           
        name: 'How I helped mothers manage their cooking ingredients',
        image: blogcoverimg1,
        toctitle: "Table of content",
  tocNumber1: "Introduction",
        tocNumber2: "Insights & Features",
        tocNumber3: "FAQ",
        tocNumber4: "Conclusion",
        tocNumber5: "Resources",

       
        intro: "Remembering the ingredients at home can sometimes be difficult for most mothers, and it usually causes problems when they decide to cook. This is why I created a mobile app that solves this problem. It was a common struggle that many mothers face, so I wanted to create an app that makes this experience easier.",

        features: "The app contains features that make it easier for mothers to track ingredients. One main feature is a scanner that lets users scan all ingredients they have at home. The app stores these images, tracks the stock, expiration dates, and notifies the user when a product is low. Another feature is an ingredient checklist, helping users remember what they have, and an ingredient alternative generator for missing products.",

        faqQuestion1: "How did you conduct user research?",
        faqAnswer1: "I started by conducting interviews to understand and analyze common problems users face, mainly targeting mothers. After gathering insights, I analyzed competitors and suggested suitable features.",
        
        faqQuestion2: "Who is the target audience?",
        faqAnswer2: "This UX/UI design app is mostly targeted at mothers or anyone interested in meal prepping and cooking.",
        
        faqQuestion3: "What were the design decisions based on?",
        faqAnswer3: "I aimed to make the app intuitive to avoid overwhelming the user. Focus was on hierarchy and navigation so users can navigate sections easily without frustration.",

        conclusion: "This UX/UI app has solved common challenges for users who want to plan meals. By keeping track of ingredients, users can cook confidently without frustration. The app improves the overall experience without information overload.",

        resources: "https://digitalpublicservices.gov.wales/ux-ui-and-interaction-design/ways-improve-your-design-decisions"
    
      
        },
         blog2:{
           
           
        name: 'Top Qualities of a Professional UI Designer in Egypt',
        image: blogcover2,
        toctitle: "Table of content",
  tocNumber1: "Introduction",
        tocNumber2: "What makes my interfaces as a UI designer unique?",
        tocNumber3: "FAQ",
        tocNumber4: "Conclusion",
        tocNumber5: "Resources",

       
        intro: "A proffessional UI designer should always have qualities that makes them unique from everyone else. It is important to understand that what makes a UI designer good at their job is not only making an interface look good but also creating a good experience that makes the user connected to the product.",

        features: "Throughout my designs, I always make sure that it has an attractive overall look, but what I really focus on is to make users satisfied with the overall expeerince, so that they use something that is both visually attractive and functional. You can checkout my projects on my website: shahdmohammad.com",

        faqQuestion1: "What are essential UI skills to master?",
        faqAnswer1: "Some essential UI skills to master include: creativity, in-depth industry insight, aptitude for problem solving, and effective planning abilities.",
        
        faqQuestion2: "Are UI designers in Egypt in high demand?",
        faqAnswer2: "A UI Designer creates visual elements such as buttons, menus, and widgets in order to create an interface such as mobile app, websites ,and more.",
        
        faqQuestion3: "What were the design decisions based on?",
        faqAnswer3: "UI designers in Egypt are high in demand simce technology is advancing day by day, and the ICT sector has greatly expanded, so UI designers are indeed needed in order to create meaningful impacts on businesses.",

        conclusion: "Lastly, Every UI designer has to atleast have any of the previous mentioned skills in order to expand in this field and be able to stand out among others.",

        resources: "https://www.nobledesktop.com/careers/ui-designer/requirements#:~:text=UI%20Designers%20need%20a%20variety,empathy%2C%20and%20problem%2Dsolving."

    
      
        
        },
        
    
      };
       const { key } = useParams();
  const detailsblog = allblogs[key];
    return ( 
        <>
        
          <Helmet>
                <title>Helping Mothers Track Ingredients</title>
                <meta name="description" content="Discover how I designed a mobile app to help mothers manage their cooking ingredients. Learn about key features like ingredient scanning, stock tracking, checklists, and alternatives to simplify meal planning." />
                  <link rel="icon" type="image/png" href="/smalllogo.png" sizes="16x16" />    
            </Helmet>
<Navbar/>
        
        <div class="forall">
    <h1 class="blofTitle">{detailsblog.name}</h1>
        <img src={detailsblog.image} alt="blogimgcover" className='blogimgwidth'/>


    
<div class="toc">
<h2  class="toc2">{detailsblog.toctitle}</h2>
<div className='foralltoc'>


<div className='first5'>

    <div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">{detailsblog.tocNumber1}</h4>
    </div>
    <div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">{detailsblog.tocNumber2}</h4>
    </div><div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">{detailsblog.tocNumber3}</h4>
    </div><div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">{detailsblog.tocNumber4}</h4>
    </div><div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">{detailsblog.tocNumber5}</h4>
    </div>
</div>
{/* <div className='first5'>

    <div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">{detailsblog.tocNumber5}</h4>
    </div>
    <div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">{detailsblog.tocNumber6}</h4>
    </div><div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">{detailsblog.toctitle}</h4>
    </div><div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">{detailsblog.toctitle}</h4>
    </div><div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">{detailsblog.toctitle}</h4>
    </div>
</div> */}
</div>
{/* <h4 onclick="scrollToDiv('featuresDiv')" class="into">2-Insights & Features</h4>
<h4 onclick="scrollToDiv('faqDiv')" class="into">3-FAQs</h4>
<h4 onclick="scrollToDiv('concDiv')" class="into">4-Conclusion</h4>
<h4 onclick="scrollToDiv('resourcesDiv')" class="into">5-Resources</h4> */}
</div>
<div className='forqada'>

<div class="styleDIV" id="introDiv">

    <h2 class="into2">{detailsblog.tocNumber1}</h2>
    <p class="pgfaq">{detailsblog.intro}</p>
</div>
<div class="styleDIV" id="featuresDiv">
    
    <h2 class="into2">{detailsblog.tocNumber2}</h2>
    <p class="pgfaq">{detailsblog.features}</p>
</div>
<div class="styleDIV" id="faqDiv">
    <div className='faqcont'>

    <h2 class="into2 style2">{detailsblog.tocNumber3}</h2>
    <div className='fqcont'>

    <div class="styleDIV">
        <h3 class="into3">{detailsblog.faqQuestion1}</h3>
        <p class="pgfaq">{detailsblog.faqAnswer1}</p>
    </div>
    <div class="styleDIV">
        <h3 class="into3">{detailsblog.faqQuestion2}</h3>
        <p class="pgfaq">{detailsblog.faqAnswer2}</p>
        
    </div>
    <div class="styleDIV">
        <h3 class="into3">{detailsblog.faqQuestion3}</h3>
        <p class="pgfaq">{detailsblog.faqAnswer3}</p>
    </div>
    </div>
    </div>
    
    
    
</div>
<div class="styleDIV"  id="concDiv">
    
    <h2 class="into2">{detailsblog.tocNumber4}</h2>
    <p class="pgfaq">{detailsblog.conclusion}</p>
</div>

<div class="styleDIV"  id="resourcesDiv">
    
    <h2 class="into2">{detailsblog.tocNumber5}</h2>
    <p class="pgfaq">{detailsblog.resources}</p>
</div>
</div>

</div>
<SubscriptionSection/>
<Footer/>
        </>
     );
}
 
export default BlogDetails;