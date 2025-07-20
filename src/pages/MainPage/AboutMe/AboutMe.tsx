import "./AboutMe.scss";
import pic1 from "../../../assets/pics/pic1.avif";
import pic2 from "../../../assets/pics/pic2.webp";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <div id="aboutMe" className="about-me-container">
      <div className="about-me-cards">
        <div className="card-1">
          <img src={pic1} alt="" />
          <div className="content">
            <h2 className="content-title">עורך דין צביקה אשכנזי</h2>
            <p className="content-desc">
              מקרקעין ובתים משותפים, עורך דין צביקה אשכנזי - מומחה לדיני מקרקעין
              ובתים משותפים, עם ניסיון ייחודי כעוזר המשפטי של המפקחת על רישום
              מקרקעין וכמייצג בפני המפקחת על רישום מקרקעין. בוגר הפקולטה למשפטים
              מאוניברסיטת חיפה המשלב ניסיון רב שנים בתחומים רבים, הבנה משפטית
              עמוקה, ראייה עסקית רחבה וחשיבה יצירתית
            </p>
            <button
              className="btn content-btn"
              onClick={() => navigate("/about/0")}
            >
              Read
            </button>
          </div>
        </div>
        <div className="card-2">
          <img src={pic2} alt="" />
          <div className="content">
            <h2 className="content-title">עורכת דין אירה אטיאס</h2>
            <p className="content-desc">
              נזיקין וביטוח, עורכת דין אטיאס בעלת ניסיון עשיר בניהול תביעות
              נזיקין, תאונות דרכים, נזקי גוף ורשלנות רפואית. מאמינה בליווי אישי,
              עיקש ומדויק - עד להשגת הפיצוי המירבי שמגיע לכם.
            </p>
            <button
              className="btn content-btn"
              onClick={() => navigate("/about/1")}
            >
              Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
