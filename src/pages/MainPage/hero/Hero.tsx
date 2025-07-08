import "./Hero.scss";
import videoSrc from "../../../assets/video/91744-636709154_small.mp4";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="content">
        <div className="hero-content">
          <p className="hero-title">'אטיאס אשכנזי ושות</p>
          <p className="hero-subtitle">מחלקת מקרקעין | מחלקת בתים משותפים | מחלקת נזיקין</p>
        </div>
        <button className="hero-btn">צור קשר!</button>
      </div>
      <video autoPlay muted loop>
        <source src={videoSrc} />
      </video>
    </div>
  );
};

export default Hero;
