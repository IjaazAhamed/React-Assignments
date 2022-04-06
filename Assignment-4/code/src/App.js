import React from 'react';

import './App.css'
import LandingPage from './LandingPage/landing_page.js';
import PostView from './PostView/post_view.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Routes>
        <Route path='*' element={<PostView/>}/>
        <Route path='/landpage' element={<LandingPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;