import React from 'react'
import "./ResourcesButton.scss"

const RecursosButton = ({ data }) => {
  return (
    <div className='resourcesButton'>
      <div className='resourcesButton__container'>
        {
          data.map((d) => {
            return (
              <a href={d.url} target="_blank" rel="noopener noreferrer">
                <button className='button' key={d.id} style={{background: `linear-gradient(90deg, ${d.color} 2%, #FFF 0)` }}>
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

export default RecursosButton