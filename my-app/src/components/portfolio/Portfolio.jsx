// src/components/Portfolio.js
import React, { useEffect, useRef } from 'react'; 
import { init } from 'ityped';
import './portfolio.scss';


export default function Portfolio() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: [' '],
    });
  }, []);

 

  return (
    <div className="portfolio" id="portfolio">
      <div className="imgContainer">
        <img src="pics/h6.jpg" alt="" />
        <div className="textOverlay">
          <h1>WELCOME TO OUR FAMILY</h1>
          <h2>AYANNAH MEDICAL CENTER</h2>
          <h3>SERVING YOU AS YOU NEED</h3>
          <h4>
            <span ref={textRef}></span>
          </h4>

          <div className="buttonContainer">
            <button className="customButton" >
              Patient
            </button>
            <button className="customButton" >
              Staff
            </button>
           
            <button className="customButton">Guest</button>
          </div>
        </div>
      </div>

      
    </div>
  );
}
