import PhotosCarrousel from "./PhotosCarrousel";
import "./Evento.scss";
const Evento = () => {
  return (
    <div className="app__muestra__evento">
      <p id="reviviLaMuestra" className="eventoHeader">REVIVÍ LA MUESTRA</p>
      <div>
        <p className="subtitle">Galería de fotos</p>
        <PhotosCarrousel />
      </div>
      <div className="eventoVideo">
        <p className="subtitle">Resumen audiovisual</p>
        <iframe
          src="https://www.youtube.com/embed/qhXRmnzs2SY"
          title="Muestra #DatosEnFuga"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Evento;
