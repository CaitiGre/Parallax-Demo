import React from "react";
import { Parallax } from "react-parallax";
import '../css/blur.css';
import Sunflowers from "../assets/sunflowers.jpg";


function ScrollParallaxBlur(){

    return(
        <div className="blurContainer">
            <div className="blurText">
                <p>Within this version of parallax, the background image is fixed to the page</p>
                <br></br>
            </div> 
            <Parallax blur={{min: -25, max: 35}} bgImage={Sunflowers} bgImageAlt="Sunflowers" strength={150}>
                <div style={{height: 700, width: "cover", margin: "auto"}} />
            </Parallax>
            <div className="blurBottom" style={{height: 400}}></div>
            
        </div>
        
        
        
    );
}

export default ScrollParallaxBlur;