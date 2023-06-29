import React from "react";
import { comic } from "../../../assets/amparo";
import "./Comic.scss";

const Comic = () => {
  // const comicSlides1 = [comic.comic1]
  return (
    <>
      <h2 className="comic__titles">
        Presentamos un camparo para proteger nuestros datos presonales y nuestra
        democracia
      </h2>
      <div className='scrollable'>
        <img src={comic.d1} alt="viñetas1y2" />
      </div>
      <div className="comic__image">
        <img src={comic.d2} alt="image2" className="desktop-img" />
        {/* <img src={comic.m2} alt="image2" className="desktop-img" /> */}
      </div>
      <h2 className="comic__titles">
        ¿Y qué es lo que puede pasar mientras siga vigente?
      </h2>
      <div className="comic__imagesContainer">
        <img src={comic.d3} alt="image3" />
        <img src={comic.d4} alt="image4" />
        <img src={comic.d5} alt="image5" />
      </div>
      <div className="comic__image">
        <img src={comic.d6} alt="image6" className="desktop-img" />
      </div>
      <div className="comic__image">
        <img src={comic.m6} alt="image6" className="mobile-img" />
      </div>
      <h2 className="comic__titles">
        Pero, además, el uso de datos personales también amenaza la democracia y
        tiene grandes antecedentes…
      </h2>
    </>
  );
};

export default Comic;
