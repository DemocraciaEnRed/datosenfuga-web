import ActividadesSelector from "./ActividadesSelector/ActividadesSelector"
import Organizaciones from "../landing/Organizaciones/Organizaciones"
import Actividad from "./Actividad/Actividad"
import { useState, useEffect} from "react"
import { useParams } from 'react-router-dom'
import './Actividades.scss'

const Actividades = () => {
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
        <ActividadesSelector activity={activity} setActivity={setActivity}/>
        <Actividad activity={activity}/>
      </div>  
        <Organizaciones />
    </>
  )
}

export default Actividades