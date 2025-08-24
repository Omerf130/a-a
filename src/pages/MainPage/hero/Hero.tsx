import { useState } from "react";
import "./Hero.scss";

import video1 from "../../../assets/video/video1.mp4";
import video2 from "../../../assets/video/video2.mp4";
import video3 from "../../../assets/video/video3.mp4";

const videos = [video1, video2, video3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <div className="hero-container">
      <div className="content-wrapper">
        <div className="content">
          <div className="hero-content">
            <p className="hero-title">'אטיאס אשכנזי ושות</p>
            <p className="hero-subtitle">
              מחלקת מקרקעין | מחלקת בתים משותפים | מחלקת נזיקין
            </p>
          </div>
          <a className="hero-btn" href="#contact">
            !שיחת ייעוץ ראשונית ללא התחייבות
          </a>
        </div>
      </div>

      <video
        key={currentIndex}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      >
        <source src={videos[currentIndex]} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="video-overlay"></div>
    </div>
  );
};

export default Hero;
