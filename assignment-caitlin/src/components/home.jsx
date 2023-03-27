import '../css/home.css'
import { Parallax, Background } from "react-parallax";
import Road from "../assets/road.jpg";

function Home(){
return(
    <div>
        <div className="home-container">
            <div className="home-text">
                <p>This first page provides an example of the scrolling background parallax that makes it appear as though the image is shifting as the user scrolls down the page.</p>
                <p>In reality, as we scroll the parts of the image that we see are shifting to display a new section of the image.</p>
                <p>This is one of the more basic examples of how parallax can and has been used on many modern websites.</p>
                <br></br>
            </div> 
            
        </div>
        <Parallax bgImage={Road} strength={650}>
            <div style={{height: 700, width: "cover", margin: "auto"}}></div>
        </Parallax>
        <div className="bottom-section" style={{height: 400}}></div>
    </div>
)

}

export default Home;