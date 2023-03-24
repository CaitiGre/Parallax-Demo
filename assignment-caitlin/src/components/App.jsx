
import '/src/css/App.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollParallaxFixed from './scroll-Parallax.jsx'
import ScrollParallaxReversed from './scroll-Parallax-Reversed.jsx'
import ScrollParallaxLayers from './scroll-Parallax-Layered.jsx';


function App() {
//Need to add the routes and links in here.
  return (
    <div className='main-container'>
      <h1>Welcome to my Parallax Demo</h1>
      <Routes>
        
        <div className='scroll-fixed'>
          <ScrollParallaxFixed />
        </div>

        <div className='scroll-reversed'>
          <ScrollParallaxReversed />
        </div>

        <div className='parallax-layers'>
          <ScrollParallaxLayers />
        </div>
      </Routes>
      
    </div>
  )
}

export default App;
