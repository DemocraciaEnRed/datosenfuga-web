import './ActividadesSelector.scss';
import actividadesData from '../data.js'
import { Link } from "react-router-dom";


const ActividadesSelector = ({ activity, setPanel }) => {
  return (
    <div className="selector__container">
      <h1 className="selector__title">{actividadesData.mainTitle}</h1>
      <p className="selector__subtitle">{actividadesData.subTitle}</p>
      <div className="selector__selectionCards">
        {actividadesData.activities.map((a) =>
          <Link key={a.id} to={`/encuentros/${a.id}`}>
            <button key={a.id} onClick={() => setPanel(0)} className={`${activity === a.id ? 'active' : ''}`}>
              <p className="selector__cardTitle" >
                {a.title}
              </p>
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default ActividadesSelector