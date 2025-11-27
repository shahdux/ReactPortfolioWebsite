import React, { Component } from 'react';
import "./BlogDetails.css"
import SectionTitle from '../components/SectionTitle';
import blogcoverimg1 from "../assets/bigblog1.svg"
import Navbar from '../components/Navbar';
const BlogDetails = () => {
    // let blogs ={
    //     blog1:{
           
        
    //     description: 'ArtMento helps you with any design-related challenges',
    //     image: mockup2,
    //     rightimg: mockup3,
    //     leftimg: mockup1,
    //     featuretitle1:'Moodboard Generator',
    //         featuredescription1:'Users can upload images as inspos and then AI will create a mood board based on these images.',
    //         featuretitle2:'ART AI ASSISTANCE',
    //         featuredescription2:'Users can ask for assistance with their design projects through using the AI assistant.',
    //         featuretitle3:'FILE SUMMARIZER',
    //         featuredescription3:'Users can upload any files they struggle to understand, and AI will summarize it for them.',
    //         featuretitle4:'FEEDACK PROVIDER',
    //         featuredescription4:'Users can get feedback on their work with the help of ArtMento.',
    
    //     },
        
    
    //   };
    return ( 
        <>
<Navbar/>
        
        <div class="forall">
    <h1 class="blofTitle">How I helped mothers manage their cooking ingredients</h1>
        <img src={blogcoverimg1} alt="blogimgcover" />


    
<div class="toc">
<h2  class="toc2">Table of content</h2>
<div className='foralltoc'>


<div className='first5'>

    <div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">Introduction</h4>
    </div>
    <div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">Introduction</h4>
    </div><div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">Introduction</h4>
    </div><div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">Introduction</h4>
    </div><div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">Introduction</h4>
    </div>
</div>
<div className='first5'>

    <div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">Introduction</h4>
    </div>
    <div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">Introduction</h4>
    </div><div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">Introduction</h4>
    </div><div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">Introduction</h4>
    </div><div className='numberwithcontent'>
<div className='numbercont2'>
    <p className='numbertext'>1</p>
</div>
<h4 onclick="scrollToDiv('introDiv')" class="into">Introduction</h4>
    </div>
</div>
</div>
{/* <h4 onclick="scrollToDiv('featuresDiv')" class="into">2-Insights & Features</h4>
<h4 onclick="scrollToDiv('faqDiv')" class="into">3-FAQs</h4>
<h4 onclick="scrollToDiv('concDiv')" class="into">4-Conclusion</h4>
<h4 onclick="scrollToDiv('resourcesDiv')" class="into">5-Resources</h4> */}
</div>
<div className='forqada'>

<div class="styleDIV" id="introDiv">

    <h2 class="into2">Introduction</h2>
    <p class="pgfaq">Remebering the ingredients at home can somethimes be difiicult for most mothers, and it usually causes problems when they decided to cook. This is why I decided to creat a mobile App that solves this problem. It was a common struggle that I saw that alot of mothers face, so I wanted to simply create an app that make this expeerince easier and help those who struggle with keeping track of their ingredients at home.</p>
</div>
<div class="styleDIV" id="featuresDiv">
    
    <h2 class="into2">Insights & Features</h2>
    <p class="pgfaq">The app containes features that makes it easier for mothers who cook to track their ingredients at home. One of the main features is a scanner that enavles users ti scan all imngrediensrt they have at home. By doing so, the app stores these images and adds it in the app, tracking the amount of stock, expiration date, and notifies the user when the product is about to be out of stock. Another UX feature I included in my design is a an ingredient checklist, which appears after the user selects a speific food. I implemented this featyred based in ux research and makijgn interviews; as a result, majority of those who cook usually forget if they have a specific product available when they decide to cook a meal. By creating this feature, user will always have a checklist when cooking a meal to make sure all the ingreidnet are available. Moreover, another UX feature I added was an ingredient alternative generater that generate an alternative in case there is a missing product. The app also allows the user to choose between two options, either to use this alternative, or users can reorder the missing product through the app. </p>
</div>
<div class="styleDIV" id="faqDiv">
    <div className='faqcont'>

    <h2 class="into2 style2">Frequently Asked Questions</h2>
    <div className='fqcont'>

    <div class="styleDIV">
        <h3 class="into3">How did you conduct user research?</h3>
        <p class="pgfaq">I started by conducting interviews to understand and analyze what common problems users face, and I was mostly targetting mothers as they usually have the most experience in this area. After I gathered my insights, I started to search more on the topics, analyze my competitors, and suggest features that would best be suitable for my targeted users.</p>
    </div>
    <div class="styleDIV">
        <h3 class="into3">Who is the target Audience?</h3>
        <p class="pgfaq">This UX/UI Design App is mostly targeted to mothers or anyone who's interested in meal prepping and cooking.</p>
        
    </div>
    <div class="styleDIV">
        <h3 class="into3">What was the design decisions based on?</h3>
        <p class="pgfaq">I wanted to make the app as intuiative as possiple to avoid overwhelming the user with too much information. To achieve this, I made it as simple as possible, anbd foccussed on the hierarchy and navigation so users are able to navigate through the different app sections easily and without any frustration. </p>
    </div>
    </div>
    </div>
    
    
    
</div>
<div class="styleDIV"  id="concDiv">
    
    <h2 class="into2">Conclusion</h2>
    <p class="pgfaq">Lastly, this UX/UI App has solved common challenges that users face as they want to plan their meals. By keeping track of their ingredients, users will be able to confidintely cook a meal without feeling frustrated or forgetting certain ingredients. This app aims to create an overall better expeerince without overwhelming the user with information overload.</p>
</div>

<div class="styleDIV"  id="resourcesDiv">
    
    <h2 class="into2">Resources</h2>
    <p class="pgfaq">https://digitalpublicservices.gov.wales/ux-ui-and-interaction-design/ways-improve-your-design-decisions</p>
</div>
</div>

</div>
        </>
     );
}
 
export default BlogDetails;