import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Hobbies from './pages/Hobbies';
import JSON from './pages/JSON'
 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
 
        <Route path="calculator" element={<Calculator />}> </Route>
        <Route path="/*" element={<Home />}> </Route>
        <Route path="hobbies" element={<Hobbies />}> </Route>
        <Route path="json" element={<JSON />}> </Route>
         
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
);


