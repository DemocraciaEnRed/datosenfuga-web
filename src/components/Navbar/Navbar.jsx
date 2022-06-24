import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
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
      </ul>
    </nav>
  );
};

export default Navbar;