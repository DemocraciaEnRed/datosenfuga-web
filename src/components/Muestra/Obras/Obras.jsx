import React from 'react'
import { obras } from "./dataObras";
import './Obras.scss'

const Obras = ({display}) => {
  return (
    <div className="app__obras">
      <div className="app__obras-container">
        {
          obras.map(obra => {
            if(obra.autor) {
              return (
                <div key={obra.autor+'-'+obra.title}>
                  <p className="obra__title">{obra.title}</p>
                  <p className="obra__autor"><a href={obra.link} target="_blank" rel="noreferrer">{obra.autor}</a></p>
                  {display === 3 ? <img src={obra.img} alt={obra.title} /> : '' }
                  <p className="obra__descripcion">{obra.description}</p>
                </div>
              )
            } else {
              return (
                <div key={obra.autors.autor1+'-'+obra.title}>
                  <p className="obra__title">{obra.title}</p>
                  <p className="obra__autor">
                    <a href={obra.links?.linkAutor1} target="_blank" rel="noreferrer">{obra.autors?.autor1}</a>, 
                    <a href={obra.links?.linkAutor2} target="_blank" rel="noreferrer"> {obra.autors?.autor2}</a>, 
                    <a href={obra.links?.linkAutor3} target="_blank" rel="noreferrer"> {obra.autors?.autor3}</a> 
                  </p>
                  <p className="obra__descripcion">{obra.description}</p>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default Obras