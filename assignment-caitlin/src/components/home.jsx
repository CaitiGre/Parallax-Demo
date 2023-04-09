import "../css/home.css";
import { Parallax, Background } from "react-parallax";
import PinkMountains from "../assets/pink-mountains.jpg";

function Home() {
  return (
    <div>
      <div className="homeContainer">
        {/** A container that contains the text that appears above the parallax */}
        <div className="homeText">
          <p>
            This first page provides an example of the scrolling background
            parallax that makes it appear as though the image is shifting as the
            user scrolls down the page.
          </p>
          <p>
            In reality, as we scroll the parts of the image that we see are
            shifting to display a new section of the image.
          </p>
          <p>
            This is one of the more basic examples of how parallax can and has
            been used on many modern websites.
          </p>
          <br></br>
        </div>
      </div>
      {/** Parallax settings. It specifies the background image that was imported above
       * The strength sets the strength of the scroll. Can become laggy if too high
       */}
      <Parallax bgImage={PinkMountains} strength={400}>
        <div style={{ height: 700, width: "cover", margin: "auto" }}></div>
        {/** The above div is necessary to specify the height and width of the parallax image div
         * The margin auto parameter is optional
         * Style tags need to be added within double curly braces.
         */}
      </Parallax>
      <div className="homeBottom" style={{ height: 400 }}></div>
    </div>
  );
}

export default Home;
