import './PanelHighlighted.scss'
import PanelTimeline from "./PanelTimeline/PanelTimeline"

const PanelHighlighted = ({ data }) => {
  if (data.length > 0) {
    return (
      <div className="panel-highlighted">
        <h3 className='panel-highlighted__title'>CONTENIDOS DESTACADOS</h3>
        <PanelTimeline data={data} />
      </div>
    )
  }

}

export default PanelHighlighted