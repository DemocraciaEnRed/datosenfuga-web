import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">
        <li>
          <a href="#proyecto">Proyecto</a>
        </li>
        <li>
          <a href="#paper">Paper</a>
        </li>
        <li>
          <a href="#casos">ABC</a>
        </li>
        <li>
          <Link to="/casos">Casos</Link>
        </li>
        <li>
          <a href="#casos">Exhibición</a>
        </li>
        <li>
          <a href="#organizaciones">Quiénes somos</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;