import "./Paper.scss";
import dload from "../../../assets/iconos/iconoDownload.svg";
import pgPaper from "../../../assets/papers/DATOS-EN-FUGA_Panorama-General.pdf";
import rvPaper from "../../../assets/papers/DATOS-EN-FUGA_Reportantes-de-Vulnerabilidades.pdf";

const Paper = () => {
  return (
    <div className="paper" id="paper">
      <h2 className="paper__title">PAPER</h2>
      <div className="paper__content">
        <p className="paper__text">
          <strong>
            Panorama general sobre la seguridad de la información, las
            vulnerabilidades y los incidentes en Argentina
          </strong>
          <br />
          La palabra vulnerabilidad se usa en muchos contextos, ¿qué significa
          cuando hablamos de tecnologías de la información? ¿Qué pasa si no
          atendemos las debilidades de los sistemas en los que operamos todos
          los días? ¿Qué hace el Estado argentino para garantizar sistemas
          seguros y qué hacen otros países? Acá, un panorama actualizado.
        </p>
        <button className="paper__button">
          <img src={dload} alt="download" />
          <a
            onclick="ga('send','event','Download','PDF', this.href]);"
            href={pgPaper}
            target="_blank"
            rel="noreferrer"
            download
          >
            <span>DESCARGA EL PDF</span>
          </a>
        </button>
        <p className="paper__text">
          <strong>
            Reportantes de vulnerabilidades en sistemas digitales ante la ley
            penal argentina
          </strong>
          <br />
          En un mundo rodeado de código digital, ¿cómo responde el Estado
          argentino ante una persona que informa sobre una debilidad en los
          sistemas informáticos? ¿Atiende esa alarma? ¿Le agradece? No, le cae
          con todo el peso del sistema penal. Esto puede cambiar, conocé cómo.
        </p>
        <button className="paper__button">
          <img src={dload} alt="download" />
          <a
            onclick="ga('send','event','Download','PDF', this.href]);"
            href={rvPaper}
            target="_blank"
            rel="noreferrer"
            download
          >
            <span>DESCARGA EL PDF</span>
          </a>
        </button>
        <p className="paper__pdfCopys">*Existen copias físicas disponibles (gratuitas) que pueden ser retiradas por las oficinas de Democracia en Red.</p>
      </div>
    </div>
  );
};

export default Paper;
