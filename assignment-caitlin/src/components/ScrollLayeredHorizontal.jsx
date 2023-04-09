import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../css/horizontal.css";
import Sunset from "../assets/horizontal/sunset.jpg";
import Climber from "../assets/horizontal/mountain-climber.png";
import Pine from "../assets/horizontal/pine.png";
import LeftClimber from "../assets/horizontal/left-climber.png";
import RockyMountains from "../assets/horizontal/rocky-mountain.png";
import BirdFlat from "../assets/horizontal/bird-flat.png";
import BirdDiag from "../assets/horizontal/bird-diag.png";
import Victory from "../assets/horizontal/victory.png";
import SunBird from "../assets/horizontal/sun.png"

function ScrollLayeredHorizontal() {
  return (
    <div>
      <div className="horizText">
        <p>Similar to the vertical parallax, the horizontal parallax uses the same package as the vertical parallax with a few extra parameters. </p>
        <p>The effect is achieved in this instance by layering silhouetted images on top of a mountain silhouette background.</p>
      </div>
      {/**This version of parallax is slightly different to the non-layered parallax used before
       * In react-spring/parallax you need to specify the amount of pages that you want the effect to span across
       * We add horizontal="true" to set the direction the parallax spans. The default is horizontal="false"
       */}
      <Parallax className="horizontalPara" pages={1.3} horizontal="true">
        {/**This first layer is the one that is the background image.
         * You need to set the offset from the previous layer, the speed that it moves, the factor (size) and the style within double curly braces.
         * The style contains an image url that was imported above with the name that we set it
         * We set the background size to cover that will stretch the image
         * All subsequent layers are placed on top of this one in the order that we want them to appear
         * The background position can also be set with percentages
         */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={2}
          style={{
            backgroundImage: `url(${Sunset})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <ParallaxLayer 
        offset={0.4}
        speed={1.5}
        factor={1}
        style={{
            backgroundImage: `url(${SunBird})`,
            backgroundPosition: "100% -80%",
            backgroundSize: "40%",
            filter: "opacity(70%)"
            
        }}
        />
        <ParallaxLayer
        offset={0.1}
        speed={0.4}
        factor={2.2}
        style={{
            backgroundImage: `url(${RockyMountains})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "opacity(60%)",
        }}
         />
        <ParallaxLayer
          className="pineTrees"
          offset={0}
          speed={0.2}
          factor={2.2}
          style={{
            backgroundImage: `url(${Pine})`,
            backgroundPosition: "-17% bottom",
            width: "fit",
            backgroundRepeat: "repeat-x",
          }}
        />
        <ParallaxLayer
          offset={0}
          speed={0.6}
          factor={6}
          style={{
            backgroundImage: `url(${LeftClimber})`,
            backgroundSize: "40%",
            backgroundPosition: "-23% 90%",
            margin: "auto",
            width: "cover",
          }}
        />
        <ParallaxLayer
          offset={0.7}
          speed={0.5}
          factor={1}
          style={{
            backgroundImage: `url(${Climber})`,
            backgroundSize: "100%",
            backgroundPosition: "right center",
          }}
        />
        <ParallaxLayer
        offset={0.02}
        speed={2.5}
        factor={0.6}
        style={{
            backgroundImage: `url(${BirdFlat})`,
            backgroundPosition: "-90% -60%",
            backgroundSize: "80%"
        }}
         />
         <ParallaxLayer 
         offset={0.5}
         speed={1.2}
         factor={0.9}
         style={{
            backgroundImage: `url(${Victory})`,
            backgroundPosition: "0% 100%",
            backgroundSize: "40%"
         }}
         />
         <ParallaxLayer 
         offset={0.8}
         speed={3.3}
         factor={0.7}
         style={{
            backgroundImage: `url(${BirdDiag})`,
            backgroundPosition: "90% 30%",
            backgroundSize: "60%"
         }}
         />
         
      </Parallax>
    </div>
  );
}

export default ScrollLayeredHorizontal;
