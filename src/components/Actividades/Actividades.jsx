import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import './Actividades.scss'
import ActividadesSelector from "./ActividadesSelector/ActividadesSelector"
import Organizaciones from "../landing/Organizaciones/Organizaciones"
import Actividad from "./Actividad/Actividad"
import Seo from "../SEO/Seo"
import actividadesData from "./data"

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

  const seoData = () => {
    if (activity === 0) {
      const data = {
        title: 'Encuentros',
        description: actividadesData.subTitle,
        keywords: 'debate, presentaciones, seguridad informática, ciberseguridad, justicia'
      }
      return data;
    } else {
      const act = actividadesData.activities.find((a) => a.id === activity)
      const data = {
        title: act.seoTitle,
        description: act.seoDescription,
        keywords: act.keywords
      }
      return data;
    }
  }

  return (
    <>
      <Seo data={seoData()}/>
      <div className="actividades">
        <ActividadesSelector activity={activity} setPanel={setPanel} />
        <Actividad activity={activity} panel={panel} setPanel={setPanel} />
      </div>
      <Organizaciones />
    </>
  )
}

export default Actividades