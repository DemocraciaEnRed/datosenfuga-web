import React from 'react'
import { obras } from "./dataObras";
import './Obras.scss'

const Obras = () => {
  return (
    <div className="app__obras">
      <div className="app__obras-container">
        {
          obras.map(obra => {
            if(obra.autor) {
              return (
                <>
                  <p className="obra__title">{obra.title}</p>
                  <p className="obra__autor"><a href={obra.link} target="_blank" rel="noreferrer">{obra.autor}</a></p>
                  <p className="obra__descripcion">{obra.description}</p>
                </>
              )
            } else {
              return (
                <>
                  <p className="obra__title">{obra.title}</p>
                  <p className="obra__autor">
                    <a href={obra.links?.linkAutor1} target="_blank" rel="noreferrer">{obra.autors?.autor1}</a>, 
                    <a href={obra.links?.linkAutor2} target="_blank" rel="noreferrer"> {obra.autors?.autor2}</a>, 
                    <a href={obra.links?.linkAutor3} target="_blank" rel="noreferrer"> {obra.autors?.autor3}</a>, 
                  </p>
                  <p className="obra__descripcion">{obra.description}</p>
                </>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default Obras