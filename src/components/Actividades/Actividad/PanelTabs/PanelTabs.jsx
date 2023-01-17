const PanelTabs = ({data}) => {
  return (
    <div>
        {data.map( tabs => {
            return(
            <button key={tabs.id + tabs.name}>{tabs.name}</button>)
            }
        )}
    </div>
  )
}

export default PanelTabs