import React from 'react'
import { obras } from "./dataObras";
import './Obras.scss'

const Obras = () => {
  return (
    <div className="app__obras">
      <div className="app__obras-container">
        {
          obras.map(obra => {
            return (
              <>
                <p className="obra__title">{obra.title}</p>
                <p className="obra__autor">{obra.autor}</p>
                <p className="obra__descripcion">{obra.description}</p>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Obras