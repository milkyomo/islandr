import React, { useState, useEffect } from "react";

import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";
import img4 from "../images/image4.jpg";
import img5 from "../images/image5.jpg";
import img6 from "../images/image6.jpg";
import img7 from "../images/image7.jpg";
import "./LandingPage.css";

const delay = 15500;
let images = [img1, img2, img3, img4, img5, img6, img7];

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="landingpage-container">
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((image, index) => (
            <img className="slide" key={index} src={image}></img>
          ))}
        </div>

        {/* <div className="slideshowDots">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div> */}
      </div>
      <div className="landing-stuff">
        <h1>Find your inspiration.</h1>
        <p>
          Join the islandr community get inspired for your next Animal Crossing:
          New Horizon's build.
        </p>
        <button>Join the fun!</button>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div>
      <Slideshow />
    </div>
  );
}
