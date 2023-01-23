import ActividadesSelector from "./ActividadesSelector/ActividadesSelector"
import Organizaciones from "../landing/Organizaciones/Organizaciones"
import Actividad from "./Actividad/Actividad"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import './Actividades.scss'

const Actividades = () => {

  const [panel, setPanel] = useState(0)
  const [activity, setActivity] = useState(0)
  const navigate = useNavigate()

  let { id } = useParams();

  useEffect(() => {
    if (id && id <= 2 && id >= 0) {
      let activityID = Number(id)
      setActivity(activityID)
    } else if (id === undefined) { }
    else {
      navigate("/notFound");
    }
  }, [id, navigate]);
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