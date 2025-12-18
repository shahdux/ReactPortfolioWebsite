import React, { Component, useEffect, useState } from 'react';
import "./Header.css"
import Strokebutton from './Strokebutton';
import downloadicon from '../assets/download.svg';
import arrow from '../assets/bluearrow.svg';
import FilledButton from './FilledButton';
import displayCards from '../assets/hero2.svg';
import { supabase } from '../Supabase';



const Header = () => {
    
        const [loading, setLoading] = useState(true);
                const [headers, setHeader] = useState("");
          
                useEffect(()=>{
                      async function callGetAPIs(){
                            const res = await supabase.from("Header").select("*").eq("id", 2);
                            setHeader(res.data);
                            // console.log(res);
                            setLoading(false);
                      }
                      callGetAPIs();
                },[]);
                if (loading) return <p>Loading...</p>;
    
    return ( 
       <>
        {
           headers.map((header)=>{
             return     <div className='heroSection'>
           <h6 className="heroText">{header.title}</h6>
          <h1 className="titles">{header.description}</h1>

      
    
 <div className="forbuttons">
           <Strokebutton iconimg={downloadicon}
           buttonTextTitle="Download CV"
           />
            <FilledButton
           buttonTextTitle="View my work"
            
           iconimg={arrow}
           />
           
        </div>
    <img src={header.image} alt="" className="hero2" />
    

       </div>
                 

           
            })
          }
      
       
       
       
       
       </>
     );
}
 
export default Header;