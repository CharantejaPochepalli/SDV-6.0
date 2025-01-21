import React, { useEffect, useState } from "react";
import "./Photos.css";

const Photos = () => {
    return (
        <div className="photo-container">
          <img src="/dnd5.jpg" alt="Centered" className="center-photo" />
          <video src="/dnd8.mp4"  autoPlay loop muted alt="Top Left" className="corner-photo top-left" />
          <video src="/dnd9.mp4"  autoPlay loop muted  alt="Top Right" className="corner-photo top-right" />
          <video src="/dnd11.mp4" autoPlay loop muted  alt="Bottom Left" className="corner-photo bottom-left" />
          <video src="/dnd12.mp4"  autoPlay loop muted alt="Bottom Right" className="corner-photo bottom-right" />
        </div>
      );

};

export default Photos;
