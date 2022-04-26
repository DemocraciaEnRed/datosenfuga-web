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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="paper__button">
                <img src={dload} alt="download" className="paper__img" />
                <span>Descarga el paper del Proyecto</span> 
            </button>
        </div>
    </div>
  );
};

export default Paper;
