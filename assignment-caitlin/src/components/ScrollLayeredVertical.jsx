import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import BackgroundLayer from "../assets/vertical/cloudy-sky.png";
import "../css/layered.css";
import LayerTwo from "../assets/vertical/nimbus-cloud.png";
import LayerThree from "../assets/vertical/planking-cloud.png";
import LayerFour from "../assets/vertical/rising-cloud.png";
import BalloonOne from "../assets/vertical/red-balloon.png";
import BalloonTwo from "../assets/vertical/white-balloon.png";
import BalloonThree from "../assets/vertical/retro-purple.png";
import BalloonFour from "../assets/vertical/retro-balloon.png";
import BalloonFive from "../assets/vertical/sweater-balloon.png";

function ScrollParallaxLayers() {
  return (
    <div>
      <div className="layeredContainer">
        <div className="layeredText">
          <p>
            This is arguably one of the more difficult versions of parallax to
            generate as you need to control the speed and order in which the
            layers appear.
          </p>
          <p>
            Layered parallax requires the selection of a background image that
            serves as the base, with other png images, those that have
            transparent backgrounds to be layered on top of the image in a
            certain order with different speeds set
          </p>
        </div>
      </div>
      {/**Within react-spring/parallax each layer has a pages, offset, speed, factor, and style attribute
       * Offset: The position of the layer on the page. Background is 0 as you want it to be fully on the page
       * Speed: Rate the layers move based on scroll
       * Factor: Size of the layer compared to the page
       * Style: contains the image style components
       */}

      <Parallax pages={1.5} className="parallaxContainer">
        {/**Here we have set the amount of pages we want the parallax to span over. In this instance, we have selected 1.5 pages long */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={2}
          style={{
            backgroundImage: `url(${BackgroundLayer})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <ParallaxLayer
          offset={0.9}
          speed={1.3}
          factor={1}
          style={{
            backgroundImage: `url(${LayerFour})`,
            backgroundSize: "cover",
            height: "fit",
            backgroundPosition: "center",
            imagePosition: "bottom",
            filter: "opacity(85%)",
            margin: "auto",
          }}
        />
        <ParallaxLayer
          className="parallaxText"
          offset={0.05}
          speed={1}
          factor={1}
        >
          <h2>PARALLAX LAYERS CAN BE COMPOSED OF ANYTHING</h2>
        </ParallaxLayer>
        {/**Text layers can also be set but they need to be placed between an opening and closing parallaxLayer tag, they cannot be within a self closing tag */}
        <ParallaxLayer
          className="parallaxText3"
          offset={0.99}
          speed={0.1}
          factor={1.2}
          style={{
            paddingTop: "50px",
            backgroundPosition: "bottom",
          }}
        >
          <h2>AMAZING RIGHT?</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.3}
          speed={3}
          factor={0.3}
          style={{
            backgroundImage: `url(${BalloonTwo})`,
            backgroundSize: "8%",
            backgroundPosition: "70%",
          }}
        />
        <ParallaxLayer
          offset={0}
          speed={2.8}
          factor={1}
          style={{
            backgroundImage: `url(${LayerTwo})`,
            backgroundSize: "60%",
            filter: "opacity(95%)",
            backgroundPosition: "right",
          }}
        />
        <ParallaxLayer
          offset={0.3}
          speed={2}
          factor={1}
          style={{
            backgroundImage: `url(${LayerThree})`,
            backgroundPosition: "left",
            backgroundSize: "40%",
            filter: "opacity(97%)",
            margin: "auto",
          }}
        />
        <ParallaxLayer
          offset={0}
          speed={3.3}
          factor={1}
          style={{
            backgroundImage: `url(${BalloonFour})`,
            backgroundSize: "30%",
            backgroundPosition: "30%",
          }}
        />
        <ParallaxLayer
          className="parallaxText2"
          offset={0.6}
          speed={0.6}
          factor={0.9}
          style={{
            backgroundPositionX: "70%",
          }}
        >
          <h2>EVEN BALLOONS OR TEXT</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.97}
          speed={2}
          factor={1}
          style={{
            backgroundImage: `url(${BalloonThree})`,
            backgroundSize: "35%",
            backgroundPosition: "bottom right",
          }}
        />
        <ParallaxLayer
          offset={0.1}
          speed={0.5}
          factor={1}
          style={{
            backgroundImage: `url(${BalloonOne})`,
            backgroundSize: "20%",
            backgroundPosition: "5%",
          }}
        />
        <ParallaxLayer
          offset={0}
          speed={2.6}
          factor={1}
          style={{
            backgroundImage: `url(${BalloonFive})`,
            backgroundSize: "20%",
            backgroundPosition: " top right",
          }}
        />
        <ParallaxLayer
          offset={0.9999999}
          speed={1.9}
          factor={0.9}
          style={{
            backgroundImage: `url(${LayerThree}`,
            backgroundSize: "60%",
            imagePosition: "top",
          }}
        />
      </Parallax>
    </div>
  );
}

export default ScrollParallaxLayers;
