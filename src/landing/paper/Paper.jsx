import "./Paper.scss";
import dload from "../../assets/iconos/iconoDownload.svg";

const Paper = () => {
  return (
    <div className="paper" id="paper">
      <div className="paper__sidelogo">
        <h2 className="paper__title">PAPER</h2>
      </div>
      <div className="paper__content">
        <p className="paper__text">
          <strong>
            Informe sobre la cobertura legal de los reportes de vulnerabilidades
          </strong>
          <br />
          Este informe <strong>analiza</strong> con profundidad la aplicación de
          los <strong>tipos penales argentinos aplicados al reporte de vulnerabilidades</strong> con
           una <strong>propuesta de interpretación 
             de las normas vigentes</strong> que permita entender que el reporte de vulnerabilidades no se
          encuentra dentro de las conductas punibles. Además, se analizan las
          propuestas más salientes de reforma de la legislación actual, y se <strong>esboza una propuesta 
            de reforma propia.</strong> Tambien
          podras encontrar los conceptos relevantes para entender las
          vulnerabilidades informáticas y su reporte y un breve recorrido
          histórico de los hechos y legislaciones más relevantes en materia de
          reporte de vulnerabilidades y legislación vigente y jurisprudencia
          existente en la región.
        </p>
        <button className="paper__button">
          <img src={dload} alt="download"/>
          <span>Descarga el paper del Proyecto</span>
        </button>
      </div>
    </div>
  );
};

export default Paper;
