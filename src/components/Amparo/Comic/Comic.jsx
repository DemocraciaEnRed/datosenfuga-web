import React from "react";
import { comic } from "../../../assets/amparo";
import "./Comic.scss";

const Comic = () => {
  // const comicSlides1 = [comic.comic1]
  return (
    <>
      <h2 className="comic__titles">
        Presentamos un amparo para proteger nuestros datos presonales y nuestra
        democracia
      </h2>
      <div className='scrollable'>
        <img src={comic.d1} alt="image1" />
        <div className="swipe">Desliza <i className="arrow"></i></div>
      </div>
      <div className="comic__image">
        <img src={comic.d2} alt="La emergencia sanitaria en nuestro país terminó oficialmente el 31/12/22. Ahhh, pero la DA 431/2020 sigue todavía vigente." className="desktop-img" />
        <img src={comic.m2} alt="La emergencia sanitaria en nuestro país terminó oficialmente el 31/12/22. Ahhh, pero la DA 431/2020 sigue todavía vigente." className="mobile-img" />
      </div>
      <h2 className="comic__titles">
        ¿Y qué es lo que puede pasar mientras siga vigente?
      </h2>
      <div className="comic__imagesContainer">
        <img src={comic.d3} alt="Pueden rechazar tu solicitud a un crédito del gobierno porque saben cuáles son tus ingresos." />
        <img id="image4" src={comic.d4} alt="Pueden descartar tu solicitud a un trabajo estatal porque saben que tenés una enfermedad crónica." />
        <img src={comic.d5} alt="Pueden enviarte publicidad de un candidato oficialista según la zona en la que vivís, porque tienen los datos de tu DNI." />
      </div>
      <div className="comic__image">
        <img src={comic.d6} alt="La DA 431/2020 atenta directamente contra la Ley de Protección de Datos Personales que estipula que tienen que pedir tu consentimiento para hacer uso de tus datos." className="desktop-img" />
        <img src={comic.m6} alt="La DA 431/2020 atenta directamente contra la Ley de Protección de Datos Personales que estipula que tienen que pedir tu consentimiento para hacer uso de tus datos." className="mobile-img" />
      </div>
      <h2 className="comic__titles">
        Pero, además, el uso de datos personales también amenaza la democracia y
        tiene grandes antecedentes…
      </h2>
      <div className="scrollable extra__padding">
        <img src={comic.d78} alt="Cambridge Analytica usó los datos de 87 millones de usuarios de Facebook para favorecer la campaña de Trump." />
        <div className="swipe">Desliza <i className="arrow"></i></div>
      </div>
      <div className="scrollable extra__padding">
        <img src={comic.d9} alt="image9" />
        <div className="swipe">Desliza <i className="arrow"></i></div>
      </div>
    </>
  );
};

export default Comic;
