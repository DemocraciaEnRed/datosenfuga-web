import PanelTabs from "./PanelTabs/PanelTabs"
import actividadesData from "../data"
import { useState } from "react"
import './Actividad.scss'

const Actividad = ({ activity }) => {
    const [panel, setPanel] = useState(0)
    if (activity !== 0) {
        const { activities } = actividadesData
        const data = activities.find(act => act.id === activity)
        console.log(data.id)
        if(data.id === activity) {
            return (
                <div className="actividad__container">
                    <div className="actividad__wrapper">
                        <p className="actividad__title">{actividadesData.activitieTitle}</p>
                        <p className="actividad__subtitle">{actividadesData.activitieSubtitle}</p>
                        <p className="actividad__aboutTitle">Sobre el encuentro</p>
                        <p className="actividad__aboutText">{actividadesData.activitieInfo}</p>
                        <PanelTabs data={data.panelTabs} panel={panel} setPanel={setPanel}/>
                        <h2 className="actividad__panelName">{data.panelName}</h2>
                    </div>
                </div>
            )
        }
    }
}

export default Actividad