import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Works from './pages/Works';
const RoutingApp = () => {
    return ( 
        <BrowserRouter>
        <Routes>
  <Route path='/' element={<Home />} />
    <Route path='/works' element={<Works />} />

        </Routes>
        
    
        </BrowserRouter>
     );
}
 
export default RoutingApp;