import { useState, useEffect } from "react"
import './Actividad.scss'
import actividadesData from "../data"
import ActividadVideo from "../ActividadVideo/ActividadVideo"
import PanelTabs from "./PanelTabs/PanelTabs"
import PanelHighlighted from "./PanelHighlighted/PanelHighlighted"
import RecursosButton from "./RecursosButton/ResourcesButton"

const Actividad = ({ activity }) => {
    
    const [panel, setPanel] = useState(0)

    useEffect(() => setPanel(0), [activity]);
    
    if (activity !== 0) {
        const { activities } = actividadesData
        const data = activities.find(act => act.id === activity)
        const panelData = data.panels.find(p => panel === p.id)
        return (
            <div className="actividad__container">
                <div className="actividad__wrapper">
                    <p className="actividad__title">{data.title}</p>
                    <p className="actividad__subtitle">{data.subtitle}</p>
                    <p className="actividad__aboutTitle">{data.aboutTitle}</p>
                    <p className="actividad__aboutText">{data.aboutSubtitle}</p>
                    <PanelTabs data={data.panels} panel={panel} setPanel={setPanel}/>
                    <h2 className="actividad__panelTitle">{panelData.title}</h2>
                    <ActividadVideo data={panelData.videos} />
                    <PanelHighlighted data={panelData.highlighted}/>
                    <h2 className="actividad__resources">Recursos</h2>
                    <RecursosButton data={panelData.resourcesButton} />
                </div>
            </div>
        )
    }
}


export default Actividad