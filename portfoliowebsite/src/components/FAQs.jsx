// import React, { Component } from 'react';
// import "./FAQs.css";
// import faqimg from "../assets/faqa.svg"
// const FAQs = (props) => {
//     return ( 
//         <>
        
//          <div className='firstqanda'>
//             <img src={faqimg} alt="faqs arrow" />
//             <div className='qandacont'>

//                         <h4 className='question'>{props.question}</h4>
//                         <p className='answer'>{props.answer}</p>
//             </div>
//                     </div>
//         </>
//      );
// }
 
// export default FAQs;
import React, { useState } from 'react';
import "./FAQs.css";
import faqimg from "../assets/faqa.svg";

const FAQs = (props) => {
    const [open, setOpen] = useState(false);

    return ( 
        <>
            <div className='firstqanda'>
                
                {/* When user clicks the arrow → toggle open */}
                <img 
                    src={faqimg} 
                    alt="faqs arrow" 
                    className={open ? "arrow rotate" : "arrow"}
                    onClick={() => setOpen(!open)}
                />

                <div className='qandacont'>
                    <h4 className='question'>{props.question}</h4>

                    {/* Show answer only when open */}
                    {open && (
                        <p className='answer'>{props.answer}</p>
                    )}
                </div>

            </div>
        </>
    );
}
 
export default FAQs;
