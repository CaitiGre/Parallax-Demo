import React from "react";
import { Parallax } from "react-parallax";
import "../css/blur.css";
import Sunflowers from "../assets/sunflowers.jpg";

function ScrollParallaxBlur() {
  return (
    <div className="blurContainer">
      <div className="blurText">
        <p>
          Within this version of parallax, the background image is fixed to the
          page but with the added effect of bluring the image that we have chosen on scroll
        </p>
        <br></br>
      </div>
      {/**Here we are creating a parallax blur effect. Essentially we are duplicating the same structure of the previous parallax files but adding a minimum and maximum value for the speed at which the blur takes effect. */}
      <Parallax
        blur={{ min: -25, max: 35 }}
        bgImage={Sunflowers}
        bgImageAlt="Sunflowers"
        strength={150}
      >
        <div style={{ height: 700, width: "cover", margin: "auto" }} />
        {/**Here we are generating a div much like with the other files that sets the height and width of the image that applies the parallax effect specified above. */}
      </Parallax>
      <div className="blurBottom" style={{ height: 400 }}></div>
    </div>
  );
}

export default ScrollParallaxBlur;
