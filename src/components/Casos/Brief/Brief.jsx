import React from 'react'
import './Brief.scss'
import { casos } from "../data";

const Brief = ({ id }) => {

  let caso = casos.find((c) => c.id === id)
  let content = Object.values(caso.content)

  return (
    <div className="casos__brief">
      <div className="casos__brief-contenedor">
        <div className="casos__brief-datos">
          <div className="casos__brief-titlewrapper">
            <p className="casos__brief-title">{caso.name}</p>
            <p>{caso.occupation}</p>
          </div>
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
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Brief