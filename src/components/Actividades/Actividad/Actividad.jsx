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
                <h2>Actividad</h2>
                <p>Hacia un marco...</p>
                <h2>sobre el encuentro</h2>
                <p>es un espacio...</p>
                <PanelTabs data={data.panelTabs} />
                <h2>panel 1: nombre del panel</h2>
                <h2>aca va el video</h2>
            </div>
        )
    }
}

export default Actividad