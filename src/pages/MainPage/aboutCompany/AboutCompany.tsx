import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutCompany.scss";

const AboutCompany = () => {
  const navigate = useNavigate();
  return (
    <div className="about-me-container">
      <h1 className="about-me-title" id="aboutCompany">
        אודותינו
      </h1>
      <div className="about-me-subtitle">
        משרד עורכי הדין אטיאס אשכנזי 'ושות' מתמחה במשפט אזרחי עם דגש על דיני
        מקרקעין, בתים משותפים, נזיקין, צוואות והסכמי ממון. אנו מאמינים בפתרונות
        חכמים, יצירתיים ומבבוססי ניסיון - בגובה עיניים ולתוצאות
      </div>
      <button onClick={() => navigate("/aboutCompany")} className="about-btn">
        קרא עוד
      </button>
    </div>
  );
};

export default AboutCompany;
