import './ActividadesSelector.scss';
import actividadesData from '../data.js'
import { Link } from "react-router-dom";

const ActividadesSelector = () => {
  return (
    <div className="actividades__container">
      <h1 className="actividades__title">{actividadesData.mainTitle}</h1>
      <p className="actividades__subtitle">{actividadesData.subTitle}</p>
      <div className="actividades__selectionCard">
        {/* actividadesSelector.activities.id */}
        {actividadesData.activities.map((a) =>
        <button key={a.id}>
          <p className="actividades__cardTitle">
            {a.title}
          </p>
        </button>
        )}
      </div>
    </div>
  )
}

export default ActividadesSelector