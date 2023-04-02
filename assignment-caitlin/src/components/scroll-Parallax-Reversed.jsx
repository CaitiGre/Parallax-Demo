import { Parallax } from "react-parallax";
import BeachScene from "../assets/beach-scene.jpg";
import "../css/reversed.css";

function ScrollParallaxReversed(){
    return(
        <div>
            <div className="reversed-container">
            <div className="reversed-text">
                <p>In this example, the parallax is the same as the first one, just reversed.</p>
                <p>What this does is makes the image move in the same direction of your mouse scroll. The default form of parallax move opposite to your mouse scroll.</p>
                <br></br>
            </div> 
            
        </div>
        <Parallax bgImage={BeachScene} strength={-400}>
            <div style={{height: 700, width: "cover", margin: "auto"}}></div>
        </Parallax>
        <div className="reversed-bottom" style={{height: 400}}></div>
        </div>
    )
}

export default ScrollParallaxReversed;