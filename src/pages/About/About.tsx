import React from 'react';
import { useParams } from 'react-router-dom';
import { ABOUT_CONSTS } from '../../const/Const';
import "./About.scss"

const About = () => {
  const { id } = useParams();
  const index = parseInt(id || '0');
  const aboutData = ABOUT_CONSTS[index];

  if (!aboutData) {
    return <div>לא נמצא מידע על מזהה זה.</div>;
  }

  return (
    <div className="about-container">
      <h1>{aboutData.title}</h1>
      <h2>{aboutData.subtitle}</h2>
      <img src={aboutData.img.src} alt={aboutData.img.alt} />
      <div className="about-content">
        {aboutData.content.map((section, idx) => (
          <div key={idx} className="about-section">
            <h3>{section.header}</h3>
            <p>{section.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;