// import React, { useEffect, useState } from 'react';
// import {supabase} from '../Supabase';

// const TestApi = () => {
//     const [projects, setProjects] = useState([]);
//         useEffect(()=>{
//            async function callGetAPI(){
//             const res = supabase.from("Projects").select("*");

//                 console.log(res);
//             }
//             callGetAPI();

//         },[]);
        

//     return ( 
//         <>
//         {Projects[0].title}
    
        
//         </>
//      );
// }
 
// export default TestApi;