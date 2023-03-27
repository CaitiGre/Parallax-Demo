
import '/src/css/App.css'
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import ScrollParallaxFixed from './scroll-Parallax.jsx'
import ScrollParallaxReversed from './scroll-Parallax-Reversed.jsx'
import ScrollParallaxLayers from './scroll-Parallax-Layered.jsx';
import Home from './home.jsx';


function App() {
//Need to add the routes and links in here.
  return (
    
    <div className="main-container">
      <React.Fragment>
        <header>
          <h1>PARALLAX DEMO</h1>
          <div className="navbar">
            <NavLink to={"/"}>HOME</NavLink>
            <NavLink to={"fixed"}>FIXED</NavLink>
            <NavLink to={"reversed"}>REVERSED</NavLink>
            <NavLink to={"layers"}>LAYERED</NavLink>

          </div>
        </header>
        
        <Routes>
          <Route path="/" element={ <Home />}/>

            <Route path="fixed" element={<ScrollParallaxFixed />}/>
            <Route path="reversed" element={<ScrollParallaxReversed />}/>
            <Route path="layers" element={<ScrollParallaxLayers />}/>
         
        </Routes>
      </React.Fragment>
    </div>
      
  )
}

export default App;
