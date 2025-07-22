import "./Nav.scss";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useState } from "react";
import logo from "../../assets/pics/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import NavMobile from "./NavMobile/NavMobile";

const navLinks = [
  { href: "/aboutCompany", label: "אודות", isDropdownExist: false },
  { href: "#aboutMe", label: "תחומי התמחות",isDropdownExist: true },
  { href: "#articles", label: "מאמרים",isDropdownExist: false },
  { href: "#contact", label: "צור קשר",isDropdownExist: false },
];

const Nav = () => {
  const isMobile = useWindowWidth(640);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  

const handleDropdownToggle = (label: string) => {
  setOpenDropdown((prev) => (prev === label ? null : label));
};
const renderLinks = (className = "") =>
  navLinks.map(({ href, label, isDropdownExist }) => (
    <div key={href} className={`nav-link-wrapper ${className}`}>
      <a
        href={isDropdownExist ? undefined : href}
        onClick={(e) => {
          if (isDropdownExist) {
            e.preventDefault();
            handleDropdownToggle(label);
          }
        }}
      >
        {label}
      </a>

      {isDropdownExist && (
        <div
          className={`dropdown-content ${
            openDropdown === label ? "visible" : ""
          }`}
        >
          <a href="#" onClick={() => navigate("/about/1")}>עורך דין צביקה אשכנזי'</a>
          <a href="#" onClick={() => navigate("/about/2")}>עורכת דין אירה אטיאס</a>
        </div>
      )}
    </div>
  ));

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`nav-container ${isHome ? " homepage": ""}`}>
      <div className={isMobile ? "nav-wrapper-mobile" : "nav-wrapper"}>
        <div className="logo" onClick={handleLogoClick}>
          <img src={logo} alt="" />
        </div>
        {isMobile && isHome ? (
          <NavMobile links={navLinks} handleLogoClick={handleLogoClick}/>
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
