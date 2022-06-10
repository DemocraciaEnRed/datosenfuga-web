import React from 'react'
import './Brief.scss'

const Brief = ({id}) => {
  return (
    <div className="casos__brief">
      <div className="casos__brief-contenedor">
        <div className='casos__brief-title'>
          <p>Joaquín Sorianello</p>
        </div>
        <div className="casos__brief-datos">
          <p>Desarrollador de Software</p>
          <span>Año: 2015</span>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="casos__brief-contenedor">
        <div className="casos__brief-informacion">
          <p className="casos__brief-informacion_title">Caso</p>
          <p className="casos__brief-informacion_subtitle">
            Quiso alertar sobre la facilidad de cometer un fraude informático con el sistema de votación con Boleta Única Electrónica y lo denunciaron penalmente. Botón de Ver más para desglosar más información que aparecería de la siguiente manera:
          </p>
          <br />
          <p className="casos__brief-informacion_text">
            Dos días antes de las elecciones, la división de cibercrimen de la Policía Metropolitana allanó su casa y le secuestró una computadora, cuatro discos rígidos, pendrives y memorias. Lo acusaron de ingresar al sistema de la empresa para “causar daño”, es decir, con intenciones de generar fallas en la transparencia electoral. En 2016, un año después, Sorianello fue sobreseído del proceso judicial porque se determinó que había entrado al sistema, pero no de manera indebida ni causando daño alguno, sino que actuó con la (buena) intención de alertar sobre la facilidad de ejecutar un fraude informático.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Brief