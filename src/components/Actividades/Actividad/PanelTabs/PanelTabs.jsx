import './PanelTabs.scss'

const PanelTabs = ({data, panel, setPanel}) => {
  return (
    <div className='paneltabs__container'>
      <div className="paneltabs__buttonsContainer">
          {data.map( tabs => {
              return(
              <button onClick={()=>{setPanel(tabs.id)}} key={tabs.id + tabs.name} className={panel === tabs.id && 'active'}>{tabs.name}</button>)
              }
          )}
      </div>
    </div>
  )
}

export default PanelTabs