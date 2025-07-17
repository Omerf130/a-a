import "./Footer.scss";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#about">אודות</a>
        <a href="#">תחומי התמחות</a>
        <a href="#">מאמרים</a>
        <a onClick={() => {navigate("/accessability")}}>הצהרת נגישות</a>
        <a onClick={() => {navigate("/privacy")}}>הצהרת פרטיות</a>
      </div>
      <div className="footer-icons">
        <FaWhatsapp/>
        <CiFacebook/>
        <BsInstagram/>
        <FaTwitter/>
      </div>
      
      <div className="footer-bottom">
        <span>מדיניות פרטיות ותנאי שימוש</span>
      </div>
    </footer>
  );
};

export default Footer;
