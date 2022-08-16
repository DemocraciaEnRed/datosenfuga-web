import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import mobileMenuIcon from "../../assets/iconos/burgerMenu.svg"
import closeMenuIcon from "../../assets/iconos/closeMenu.svg"

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="app__navbar" id="navbar">
      <ul className="app__navbar-links">
        <li>
          <HashLink to="/">Proyecto</HashLink>
        </li>
        <li>
          <HashLink to="/#paper">Paper</HashLink>
        </li>
        <li>
          <HashLink to="/#ABC">ABC</HashLink>
        </li>
        <li>
          <Link to="/casos">Casos</Link>
        </li>
        <li>
          <Link to="/muestra">Muestra</Link>
        </li>
        <li>
          <HashLink to="/#organizaciones">Quiénes somos</HashLink>
        </li>
        <li>
          <HashLink to="/#entrevistas">Entrevistas</HashLink>
        </li>
      </ul>
      {/* menu mobile */}
      <div className="app__navbar-mobile">
        <img src={mobileMenuIcon} alt="" className="menu-icon" onClick={() => setShowMenu(true)} />

        {showMenu && (
          <div className="app__navbar-mobile_overlay slide-bottom">
            <img src={closeMenuIcon} alt="" className="menu-icon" onClick={() => setShowMenu(false)} />
            <ul className="app__navbar-mobile-links" onClick={() => setShowMenu(false)}>
              <li>
                <HashLink to="/">Proyecto</HashLink>
              </li>
              <li>
                <HashLink to="/#paper">Paper</HashLink>
              </li>
              <li>
                <HashLink to="/#ABC">ABC</HashLink>
              </li>
              <li>
                <Link to="/casos">Casos</Link>
              </li>
              <li>
                <Link to="/muestra">Muestra</Link>
              </li>
              <li>
                <HashLink to="/#organizaciones">Quiénes somos</HashLink>
              </li>
              <li>
                <HashLink to="/#entrevistas">Entrevistas</HashLink>
              </li>
            </ul>
          </div>  
        )}

      </div>
    </nav>
  );
};

export default Navbar;