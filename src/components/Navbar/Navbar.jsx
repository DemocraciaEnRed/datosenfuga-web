import React, { useState } from "react";
import "./Navbar.scss";
import NavLinks from "./NavLinks";
import mobileMenuIcon from "../../assets/iconos/burgerMenu.svg"
import closeMenuIcon from "../../assets/iconos/closeMenu.svg"

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="app__navbar" id="navbar">
      <ul className="app__navbar-links">
        <NavLinks />
      </ul>
      {/* menu mobile */}
      <div className="app__navbar-mobile">
        <img src={mobileMenuIcon} alt="" className="menu-icon" onClick={() => setShowMenu(true)} />

        {showMenu && (
          <div className="app__navbar-mobile_overlay slide-bottom">
            <img src={closeMenuIcon} alt="" className="menu-icon" onClick={() => setShowMenu(false)} />
            <ul className="app__navbar-mobile-links" onClick={() => setShowMenu(false)}>
              <NavLinks />
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;