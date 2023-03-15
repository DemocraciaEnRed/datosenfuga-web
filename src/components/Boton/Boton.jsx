import React from 'react'
import './Boton.scss'
import { otherImages } from '../../constants'
// import { Link } from 'react-router-hash-link'

const Boton = () => {
  return (
    <div className="Boton">
      <a href="#navbar">
        <img src={otherImages.buttonToTop} alt="Botón ir hacia arriba" />
      </a>
    </div>
  )
}

export default Boton