import './ActividadesSelector.scss';
import actividadesData from '../data.js'
import { Link } from "react-router-dom";

const ActividadesSelector = ({activity, setActivity}) => {
  return (
    <div className="actividades__container">
      <h1 className="actividades__title">{actividadesData.mainTitle}</h1>
      <p className="actividades__subtitle">{actividadesData.subTitle}</p>
      <div className="actividades__selectionCard">
        {actividadesData.activities.map((a) =>
        <button onClick={() => setActivity(a.id)} key={a.id} className={`${activity === a.id && 'active'}`}>
          <p className="actividades__cardTitle" >
            {a.title}
          </p>
        </button>
        )}
      </div>
    </div>
  )
}

export default ActividadesSelector