import "./Hero.scss";
import videoSrc from "../../../assets/video/91744-636709154_small.mp4";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="content">
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
          consequatur?
        </div>
        <button>Test</button>
      </div>
      <video autoPlay muted loop>
        <source src={videoSrc} />
      </video>
    </div>
  );
};

export default Hero;
