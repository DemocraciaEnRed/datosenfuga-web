import React from "react";
import "./CasosVideo.scss";
import { dataVideo } from "./dataVideo";
const CasosVideo = ({ id }) => {
  let caso = dataVideo.find((c) => c.id === id);
  if (!caso) {
    return null;
  } else {
    const { video } = caso;
    // <iframe width="1280" height="720" src="https://www.youtube.com/embed/mVNzL0l5U3k" title="Voto electrónico  ¿Avance tecnológico? | Joaquin Sorianello | TEDxBariloche" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    return (
      <div className="casos__video">
        <h2>Exposición del caso</h2>
        <iframe src={video.src} title={video.title} allow={video.allow} frameBorder="0" allowFullScreen="true"></iframe>
      </div>
    );
  }
};

export default CasosVideo;
