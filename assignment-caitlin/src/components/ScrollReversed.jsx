import { Parallax } from "react-parallax";
import BeachScene from "../assets/beach-scene.jpg";
import "../css/reversed.css";

function ScrollParallaxReversed() {
  return (
    <div>
      <div className="reversedContainer">
        <div className="reversedText">
          <p>
            In this example, the parallax is the same as the first one, just
            reversed.
          </p>
          <p>
            What this does is makes the image move in the same direction of your
            mouse scroll. The default form of parallax move opposite to your
            mouse scroll.
          </p>
          <br></br>
        </div>
      </div>
      {/**Here we are setting the image to be the beach scene that we imported and setting the strength to a negative to make the image move in the opposite direction*/}
      <Parallax
        bgImage={BeachScene}
        bgImageAlt="Waves on a beach"
        strength={-400}
      >
        <div style={{ height: 700, width: "cover", margin: "auto" }}></div>
        {/**You then create a div within the parallax tags that set the height and the image will appear on the screen and set the width to cover to ensure the image stretches to fit the page.
         * Margin auto is optional here, it can also be added to the css file if you give the div a className.
         */}
      </Parallax>
      <div className="reversedBottom"></div>
    </div>
  );
}

export default ScrollParallaxReversed;
