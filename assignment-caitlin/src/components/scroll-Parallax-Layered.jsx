import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import BackgroundLayer from '../assets/cloudy-sky.png';
import '../css/layered.css';
import LayerTwo from "../assets/nimbus-cloud.png";
import LayerThree from "../assets/planking-cloud.png";
import LayerFour from "../assets/rising-cloud.png";
import BalloonOne from "../assets/red-balloon.png";
import BalloonTwo from "../assets/white-balloon.png";
import BalloonThree from "../assets/retro-purple.png";
import BalloonFour from "../assets/retro-balloon.png";
import BalloonFive from "../assets/sweater-balloon.png";

function ScrollParallaxLayers(){
    return(
        <div>
            <div className="layeredContainer">
                <div className="layeredText">
                    <p>This is arguably one of the more difficult versions of parallax to generate as you need to control the speed and order in which the layers appear.</p>
                    <p>Layered parallax requires the selection of a background image that serves as the base, with other png images, those that have transparent backgrounds to be layered on top of the image in a certain order with different speeds set</p>
                </div>
            </div>
            {/**Within react-spring/parallax each layer has a pages, offset, speed, factor, and style attribute
             * Offset: The position of the layer on the page. Background is 0 as you want it to be fully on the page
             * Speed: Rate the layers move based on scroll
             * Factor: Size of the layer compared to the page
             * Style: contains the image style components
            */}
            
                <Parallax pages={1.5} className="parallaxContainer">
                    <ParallaxLayer 
                        offset={0}
                        speed={0.5}
                        factor={2}
                        style={{
                            backgroundImage: `url(${BackgroundLayer}`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',}}
                            >
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={0.9}
                        speed={1.3}
                        factor={1}
                        style={{
                            backgroundImage: `url(${LayerFour})`,
                            backgroundSize: 'cover',
                            height: 'fit',
                            backgroundPosition: 'center',
                            imagePosition: 'bottom',
                            filter: 'opacity(85%)',
                            margin: 'auto'
                    }}>
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={0.3}
                        speed={3}
                        factor={0.3}
                        style={{
                            backgroundImage: `url(${BalloonTwo})`,
                            backgroundSize: "8%",
                            backgroundPosition: "70%"
                        }}
                    ></ParallaxLayer>
                    <ParallaxLayer
                        offset={0}
                        speed={2.8}
                        factor={1}
                        style={{
                            backgroundImage: `url(${LayerTwo})`,
                            backgroundSize: '60%',
                            filter: 'opacity(95%)',
                            backgroundPosition: 'right'
                        }}>
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={0.3}
                        speed={2}
                        factor={1}
                        style={{
                            backgroundImage: `url(${LayerThree})`,
                            backgroundPosition: 'left',
                            backgroundSize: '40%',
                            filter: 'opacity(97%)',
                            margin: 'auto'
                    }}>  </ParallaxLayer>
                    <ParallaxLayer
                        offset={0}
                        speed={3.3}
                        factor={1}
                        style={{
                            backgroundImage: `url(${BalloonFour})`,
                            backgroundSize: '30%',
                            backgroundPosition: "30%"
                    }}
                    ></ParallaxLayer>
                    
                    <ParallaxLayer
                        offset={0.97}
                        speed={2}
                        factor={1}
                        style={{
                            backgroundImage: `url(${BalloonThree})`,
                            backgroundSize: "35%",
                            backgroundPosition: "bottom right"
                        }}
                    >
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={0.1}
                        speed={0.5}
                        factor={1}
                        style={{
                            backgroundImage: `url(${BalloonOne})`,
                            backgroundSize: "20%",
                            backgroundPosition: "5%"
                    }}
                    ></ParallaxLayer>
                    <ParallaxLayer
                        offset={0}
                        speed={2.6}
                        factor={1}
                        style={{
                            backgroundImage: `url(${BalloonFive})`,
                            backgroundSize: '20%',
                            backgroundPosition: ' top right'
                    }}
                    ></ParallaxLayer>
                    <ParallaxLayer
                        offset={0.9999999}
                        speed={1.9}
                        factor={0.9}
                        style={{
                            backgroundImage: `url(${LayerThree}`,
                            backgroundSize: '60%',
                            imagePosition:'top'
                        }}
                    >
                    </ParallaxLayer>
                </Parallax>
            
        </div>
    )
}

export default ScrollParallaxLayers;