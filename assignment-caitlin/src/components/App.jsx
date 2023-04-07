import "/src/css/App.css";
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import ScrollBlur from "./ScrollBlur";
import ScrollReversed from "./ScrollReversed";
import ScrollLayeredVertical from "./ScrollLayeredVertical";
import ScrollLayeredHorizontal from "./ScrollLayeredHorizontal"
import Home from "./home.jsx";

function App() {
  return (
    <div className="main-container">
      <React.Fragment>
        <header>
          <h1>PARALLAX DEMO</h1>
          <div className="navbar">
            <NavLink to={"/"}>HOME</NavLink>
            <NavLink to={"blur"}>BLUR</NavLink>
            <NavLink to={"reversed"}>REVERSED</NavLink>
            <NavLink to={"layeredVert"}>VERTICAL LAYERED</NavLink>
            <NavLink to={"layeredHori"}>HORIZONTAL LAYERED</NavLink>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="blur" element={<ScrollBlur />} />
            <Route path="reversed" element={<ScrollReversed />} />
            <Route path="layeredVert" element={<ScrollLayeredVertical />} />
            <Route path="layeredHori" element={<ScrollLayeredHorizontal />}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
