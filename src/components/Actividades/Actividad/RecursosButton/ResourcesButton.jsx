import React from 'react'
import "./ResourcesButton.scss"

const ResourcesButton = ({ data }) => {

  return (
    <div className={data.length > 1 ? 'resourcesButton' : 'resourcesButton flex-start'}>
      <div className='resourcesButton__container'>
        {
          data.map((d) => {
            return (
              <a href={d.url} target="_blank" rel="noopener noreferrer" key={d.id}>
                <button className='button' style={{background: `linear-gradient(90deg, ${d.color} 2%, #FFF 0)` }}>
                  <p className='button__text'>{d.name}</p>
                </button>
              </a>
            )
          })
        }
      </div>
    </div>
  )
}

export default ResourcesButton