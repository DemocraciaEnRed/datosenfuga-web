import './PanelTabs.scss'

const PanelTabs = ({data}) => {
  return (
    <div className='paneltabs__container'>
    <div className="paneltabs__buttonsContainer">
        {data.map( tabs => {
            return(
            <button key={tabs.id + tabs.name}>{tabs.name}</button>)
            }
        )}
    </div>
    </div>
  )
}

export default PanelTabs