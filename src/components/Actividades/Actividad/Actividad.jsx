import { useState, useEffect } from "react"
import PanelTabs from "./PanelTabs/PanelTabs"
import actividadesData from "../data"
import ActividadVideo from "../ActividadVideo/ActividadVideo"
import './Actividad.scss'

const Actividad = ({ activity }) => {
    
    const [panel, setPanel] = useState(0)

    useEffect(() => setPanel(0), [activity]);
    
    if (activity !== 0) {
        const { activities } = actividadesData
        const data = activities.find(act => act.id === activity)
        return (
            <div className="actividad__container">
                <div className="actividad__wrapper">
                    <p className="actividad__title">{data.title}</p>
                    <p className="actividad__subtitle">{data.subtitle}</p>
                    <p className="actividad__aboutTitle">{data.aboutTitle}</p>
                    <p className="actividad__aboutText">{data.aboutSubtitle}</p>
                    <PanelTabs data={data.panelTabs} panel={panel} setPanel={setPanel}/>
                    <h2>panel 1: nombre del panel</h2>
                    <ActividadVideo data={data.activityMembers} />
                </div>
            </div>
        )
    }
}


export default Actividad