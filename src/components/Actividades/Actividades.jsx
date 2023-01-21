import ActividadesSelector from "./ActividadesSelector/ActividadesSelector"
import Organizaciones from "../landing/Organizaciones/Organizaciones"
import Actividad from "./Actividad/Actividad"
import { useState, useEffect} from "react"
import { useParams } from 'react-router-dom'
import './Actividades.scss'

const Actividades = () => {
  const [panel, setPanel] = useState(0)

  const [activity, setActivity] = useState(0)
  let { id } = useParams();
  useEffect(() => {
    if (id) {
      let activityID = Number(id)
      setActivity(activityID)
    }
  }, [id]);
  return (
    <>
      <div className="actividades">
        <ActividadesSelector activity={activity} setPanel={setPanel} />
        <Actividad activity={activity} panel={panel} setPanel={setPanel} />
      </div>  
        <Organizaciones />
    </>
  )
}

export default Actividades