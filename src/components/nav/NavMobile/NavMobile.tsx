import  { useState } from "react";
import "./NavMobile.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from "../../../assets/pics/logo.png";

import type { INavLink } from "../../../interfaces/interfaces";
import { useNavigate } from "react-router-dom";

interface NavMobileProps {
  links: INavLink[];
  handleLogoClick: () => void;
}

const NavMobile = ({ links, handleLogoClick }: NavMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const renderLinks = () =>
    links.map(({ href, label, isDropdownExist }) => (
      <div key={label} className="mobile-link">
        <div
          className="mobile-link-main"
          onClick={() =>
            isDropdownExist ? handleDropdownToggle(label) : setIsOpen(false)
          }
        >
          <span>{label}</span>
          {isDropdownExist && (
            <span className="dropdown-toggle">
              {openDropdown === label ? "-" : "+"}
            </span>
          )}
        </div>

        {isDropdownExist && openDropdown === label && (
          <div className="dropdown-items">
            <div className="dropdown-item" onClick={() => navigate("/about/1")}>עורך דין צביקה אשכנזי</div>
            <div className="dropdown-item" onClick={() => navigate("/about/2")}>עורכת דין אירה אטיאס</div>
          </div>
        )}
      </div>
    ));

  return (
    <div className="nav">
      <GiHamburgerMenu
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      />

      <nav className={`nav-list ${isOpen ? "show" : ""}`}>
        <IoMdClose className="close-icon" onClick={() => setIsOpen(false)} />
        <div className="logo" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" />
        </div>
        {renderLinks()}
      </nav>
    </div>
  );
};

export default NavMobile;
