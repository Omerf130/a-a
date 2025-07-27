import { useNavigate } from "react-router-dom";
import "./AboutCompany.scss";

const AboutCompany = () => {
  const navigate = useNavigate();
  return (
    <div className="about-me-container" id="aboutCompany">
      <h1 className="about-me-title">
        'אודות המשרד אטיאס אשכנזי ושות
      </h1>
      <div className="about-me-subtitle">
       משרד עורכי הדין אטיאס אשכנזי ושות' - מעניק שירותים משפטיים בתחומי המשפט האזרחי, תוך התמחות מיוחדת בדיני מקרקעין, בתים משותפים - על כלל היבטיהם, נזיקין, צוואות והסכמי ממון. המשרד מספק גם שירותי גישור וניהול סכסוכים משפטיים, בגישה אסטרטגית, יעילה ויצירתית.
      </div>
      <button onClick={() => navigate("/aboutCompany")} className="about-btn">
        קרא עוד
      </button>
    </div>
  );
};

export default AboutCompany;
