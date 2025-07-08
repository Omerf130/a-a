import "./AboutMe.scss";
import pic1 from "../../../assets/pics/pic1.avif";
import pic2 from "../../../assets/pics/pic2.webp";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <div className="about-me-container">
      <h1 className="about-me-title">אודותינו</h1>
      <div className="about-me-subtitle">
      גורם מדיני בכיר ששוהה בוושינגטון אמר כי נתניהו רואה בתשובת חמאס לעסקת החטופים כ"לא", אך גם כ"90-80 אחוז מהדרך שרצינו". היום שאחרי: "מנהיגים בחמאס יוגלו, לא תהיה שם הרשות הפלסטינית, אבל כן פלסטינים. אולי ישראל תהיה במערכת השלטונית לזמן מסוים"
      </div>
      <div className="about-me-cards">
        <div className="card-1">
          <div className="content">
            <h2 className="content-title">מבחינת נתניהו, אחרי הפגישה.</h2>
            <h3 className="content-desc">
            גורם מדיני בכיר ששוהה בוושינגטון אמר כי נתניהו רואה בתשובת חמאס לעסקת
            </h3>
            <button className="btn content-btn" onClick={() => navigate("/about/0")}>Read</button>
          </div>
          <img src={pic1} alt="" />
        </div>
        <div className="card-2">
          <img src={pic2} alt="" />
          <div className="content">
          <h2 className="content-title">מבחינת נתניהו, אחרי הפגישה.</h2>
            <h3 className="content-desc">
            גורם מדיני בכיר ששוהה בוושינגטון אמר כי נתניהו רואה בתשובת חמאס לעסקת
            </h3>
            <button className="btn content-btn" onClick={() => navigate("/about/1")}>Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
