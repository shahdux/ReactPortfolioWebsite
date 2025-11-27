import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Works from './pages/Works';
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
const RoutingApp = () => {
    return ( 
        <BrowserRouter>
        <Routes>
  <Route path='/' element={<Home />} />
    <Route path='/works' element={<Works />} />
     {/* <Route path='/projectdetails' element={<ProjectDetails />} /> */}
      <Route path='/works/:key' element={<ProjectDetails />} /> 
            <Route path='/about' element={<About />} /> 
                        <Route path='/contact' element={<Contact />} /> 
                                                <Route path='/blogs' element={<Blog />} /> 
                                                                                                <Route path='/blogs/:key' element={<BlogDetails />} /> 





        </Routes>
        
    
        </BrowserRouter>
     );
}
 
export default RoutingApp;