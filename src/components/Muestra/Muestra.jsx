import "./Muestra.scss";
import { logos } from "../../constants";
import Sticky from "./Sticky/Sticky";
// import Faq from "./Faq/Faq";
import Obras from "./Obras/Obras";
// import Typeform from "../Typeform/Typeform";
import Evento from "./Evento/Evento";
import Seo from "../SEO/Seo";
import useScrollAfterMount from "../hooks/useScrollAfterMount";


const Muestra = () => {

  useScrollAfterMount()

  const seoData = {
    title: 'Arte y Datos',
    description: 'La única muestra de arte sobre el uso de datos.',
    keywords: 'Arte, Experiencia multidisciplinaria, Infraestructuras, Sistemas de información, Plataformas, Datos personales, Acceso a datos, Ciudadanía, Penalización, Reportar vulnerabilidades.'
  };

  return (
    <>
      <Seo data={seoData} />
      <div className="app__muestra">
        {/* Header naranja */}
        <div className="app__muestra-header-obras">
          <div className="app__muestra-header-obras_textos">
            <span className="title-obras">MUESTRA DE ARTE</span> <br />
            <span className="subtitle-obras">#DATOSENFUGA</span>
            <p className="text-obras">
              Un proyecto que reflexiona sobre la privacidad de los datos
              personales, la gobernanza, el valor y el uso de los datos, la
              ciberseguridad y la vida en tiempos de virtualidad.{" "}
            </p>
          </div>
        </div>
        <div className="sticky__wrapper">
          <Sticky />
          <div className="app__muestra-contenido">
            <p id="sobreLaMuestra" className="contenido__title">
              SOBRE LA MUESTRA
            </p>
            <p className="contenido__text">
              Es una experiencia multidisciplinaria que invita a observar el
              vínculo inevitable entre infraestructuras, sistemas de
              información, plataformas y datos personales a través de una serie
              de preguntas: ¿quiénes tienen acceso a nuestros datos? ¿cómo
              funcionan los sistemas de protección de estos sistemas? ¿es
              posible desde la ciudadanía contribuir a la protección de estos
              sistemas bajo un marco legal que no penalice a quienes detectan y
              reportan vulnerabilidades?
              <br />
              <br />
              Datos en Fuga invitó a artistas, investigadores, activistas y
              tecnólogos de Argentina a participar de la exhibición con obras
              que propongan miradas, metáforas y acciones en relación a estos
              interrogantes.
            </p>

            <div className="spacer_muestra">
              <img src={logos.spacer} alt="spacer" />
            </div>

            <p id="eventoObras" className="contenido__title">
              OBRAS
            </p>
            <Obras />
            <div className="spacer_muestra">
              <img src={logos.spacer} alt="spacer" />
            </div>
          </div>
        </div>
        <Evento />
      </div>
    </>
  );
};

export default Muestra;
