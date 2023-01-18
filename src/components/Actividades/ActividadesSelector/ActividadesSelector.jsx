import './ActividadesSelector.scss';
import actividadesData from '../data.js'
import { Link } from "react-router-dom";

const ActividadesSelector = ({activity, setActivity}) => {
  return (
    <div className="selector__container">
      <h1 className="selector__title">{actividadesData.mainTitle}</h1>
      <p className="selector__subtitle">{actividadesData.subTitle}</p>
      <div className="selector__selectionCards">
        {actividadesData.activities.map((a) =>
        <button onClick={() => setActivity(a.id)} key={a.id} className={`${activity === a.id && 'active'}`}>
          <p className="selector__cardTitle" >
            {a.title}
          </p>
        </button>
        )}
      </div>
    </div>
  )
}

export default ActividadesSelector