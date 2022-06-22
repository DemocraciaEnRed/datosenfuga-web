import React from 'react'
import './Brief.scss'
import { casos } from "../data";

const Brief = ({ id }) => {

  let caso = casos.find((c) => c.id === id)
  return (
    <div className="casos__brief">
      <div className="casos__brief-contenedor">
        <div className='casos__brief-title'>
          <p>{caso.name}</p>
        </div>
        <div className="casos__brief-datos">
          <p>{caso.occupation}</p>
          <span>Año: {caso.year}</span>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="casos__brief-contenedor">
        <div className="casos__brief-informacion">
          <p className="casos__brief-informacion_title">Caso</p>
          <p className="casos__brief-informacion_subtitle">
            {caso.subtitle}
          </p>
          <br />
          <p className="casos__brief-informacion_text">
            {caso.content}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Brief