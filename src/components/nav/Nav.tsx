import "./Nav.scss";
import useWindowWidth from "../../hooks/useWindowWidth";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/pics/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { href: "#aboutCompany", label: "אודות" },
  { href: "#aboutMe", label: "תחומי התמחות" },
  { href: "#articles", label: "מאמרים" },
  { href: "#contact", label: "צור קשר" },
];

const Nav = () => {
  const isMobile = useWindowWidth(640);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  console.log("isHome", isHome);

  const renderLinks = (className = "") =>
    navLinks.map(({ href, label }) => (
      <a
        key={href}
        href={href}
        onClick={() => setIsOpen(false)}
        className={className}
      >
        {label}
      </a>
    ));

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="nav-container">
      <div className={isMobile ? "nav-wrapper-mobile" : "nav-wrapper"}>
        <div className="logo" onClick={handleLogoClick}>
          <img src={logo} alt="" />
        </div>
        {isMobile && isHome ? (
          <div className="nav">
            <GiHamburgerMenu
              className={`hamburger ${isOpen ? "open" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            />

            <nav className={`nav-list ${isOpen ? "show" : ""}`}>
              <IoMdClose
                className="close-icon"
                onClick={() => setIsOpen(false)}
              />
              <div className="logo" onClick={handleLogoClick}>
                <img src={logo} alt="" />
              </div>
              {renderLinks()}
            </nav>
          </div>
        ) : (
          <>
            {isHome && <nav className="nav-list">{renderLinks()}</nav>}
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
