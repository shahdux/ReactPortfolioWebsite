import React, { Component, useEffect, useState } from 'react';
import "./SubscriptionSection.css"
import Strokebutton from './Strokebutton';
import buttonArrow from "../assets/whitearrow.svg"
import { supabase } from '../Supabase';



const SubscriptionSection = () => {
    
        const [loading, setLoading] = useState(true);
                const [sub, setSub] = useState("");
          
                useEffect(()=>{
                      async function callGetAPIs2(){
                            const res = await supabase.from("Subscribtion").select("*");
                            setSub(res.data);
                            // console.log(res);
                            setLoading(false);
                      }
                      callGetAPIs2();
                },[]);
                if (loading) return <p>Loading...</p>;
    return ( 
        <>
        
           {
           sub.map((subs)=>{
             return     <div className="letsWorkdiv">
    <p className="letsTitle">{subs.title}</p>
     <p className="letsDes">{subs.description}</p>
     <div className="for2buttons">
        <input className="inputc" type="text" name="email" placeholder="Your email address"/>
        {/* <input class="inputc" type="text" name="email" placeholder="Your email address"> */}
       <Strokebutton iconimg2={buttonArrow}
           buttonTextTitle="Contact me"
           />
     </div>
</div>
            })
          }
      
        </>
     );
}
 
export default SubscriptionSection;