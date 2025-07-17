import "./Nav.scss";
import useWindowWidth from "../../hooks/useWindowWidth";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/pics/logo.png";

const navLinks = [
  { href: "#about", label: "אודות" },
  { href: "#specialties", label: "תחומי התמחות" },
  { href: "#articles", label: "מאמרים" },
  { href: "#contact", label: "צור קשר" },
];

const Nav = () => {
  const isMobile = useWindowWidth(640);
  const [isOpen, setIsOpen] = useState(false);

  const renderLinks = (className = "") =>
    navLinks.map(({ href, label }) => (
      <a key={href} href={href} className={className}>
        {label}
      </a>
    ));

  return (
    <div className="nav-container">
      <div className={isMobile ? "nav-wrapper-mobile" : "nav-wrapper"}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        {isMobile ? (
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
              {renderLinks()}
            </nav>
          </div>
        ) : (
          <nav className="nav-list">{renderLinks()}</nav>
        )}
      </div>
    </div>
  );
};

export default Nav;
