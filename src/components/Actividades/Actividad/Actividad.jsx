import PanelTabs from "./PanelTabs/PanelTabs"
import actividadesData from "../data"
import { useState } from "react"
import './Actividad.scss'

const Actividad = ({ activity }) => {
    const [panel, setPanel] = useState(0)
    if (activity !== 0) {
        const { activities } = actividadesData
        const data = activities.find(act => act.id === activity)
        return (
            <div className="actividad__container">
                <div className="actividad__wrapper">
                    <p className="actividad__title">Actividad</p>
                    <p className="actividad__subtitle">Hacia un marco...</p>
                    <p className="actividad__aboutTitle">sobre el encuentro</p>
                    <p className="actividad__aboutText">es un espacio...</p>
                    <PanelTabs data={data.panelTabs} panel={panel} setPanel={setPanel}/>
                    <h2>panel 1: nombre del panel</h2>
                    <h2>aca va el video</h2>
                </div>
            </div>
        )
    }
}

export default Actividad