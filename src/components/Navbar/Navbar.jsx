import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">
        <li>
          <Link to="/">Proyecto</Link>
        </li>
        <li>
          <a href="/#paper">Paper</a>
        </li>
        <li>
          <a href="/#ABC">ABC</a>
        </li>
        <li>
          <Link to="/casos">Casos</Link>
        </li>
        <li>
          {/* <Link to="/muestra">Muestra</Link> */}
        </li>
        <li>
          <a href="/#organizaciones">Quiénes somos</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;