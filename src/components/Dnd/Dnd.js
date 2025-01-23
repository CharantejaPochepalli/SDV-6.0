import React from "react";
import Timer from './Timer';
import "./Dnd.css";  
import Photos from "./Photos";
import EventTimeline from "./EventTimeline";
import Button from './Button';
import Carousel from './Carousel';

export const Dnd = () => {
  const targetDate = '2025-01-26T09:00:00'; 

  return (
    <div className="home-container">
      <section className="carousel">
        <Carousel />
      </section>
      
      <section className="dnd">
        <h1>drag n drift 6.0</h1>
        <div className="dnd-data">
          <p>
          Welcome to DRAG N DRIFT, the ultimate test of speed, control, and precision hosted by the SAEINDIA Collegiate Club, 
          NIT Durgapur. This electrifying competition combines the thrill of racing on a high-speed track with the challenge of 
          navigating an intricate maze, pushing both your skills and your bots to their limits.

          </p>
        </div>
        <div>
          <EventTimeline />
        </div>
      </section>

      <section className="button-section">
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdi0pQU4D_4i2UBk1brPG9NL-K5TmA3I276aq8Q5NQUlnm9fw/viewform?usp=sf_link' 
          target="_blank" rel="noreferrer">
          <Button />
        </a>
      </section>

      <section className='count'>
        <div>
          <h1>"Innovation Unleashed!" Workshop Starts In….</h1>
          <Timer date={targetDate} />
        </div>
      </section>
      
      <section className="about-dnd">
        <h1>About Drag N Drift workshop</h1>
      </section>

      <section className="dnd-gallery-section">
        <Photos />
      </section>

      <section className="gallery-data">
        
      </section>
    </div>  
  );
};

export default Dnd; 
