import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";
const NotFound = () => {
  useEffect(() => {
    let nav = document.querySelector(".app__navbar");
    const hideNav = (e) => {
      nav.classList.toggle("hide");
    };
    hideNav();
    return () => {
      hideNav();
    };
  });

  return (
    <div className="notFound">
      <h2 className="notFound__message">página no encontrada</h2>
      <Link to="/" className="notFound__return">
        Volver al proyecto
      </Link>
    </div>
  );
};

export default NotFound;