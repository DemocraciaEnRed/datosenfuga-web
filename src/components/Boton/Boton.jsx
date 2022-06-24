import React from 'react'
import './Boton.scss'
import { otherImages } from '../../constants'
import { HashLink } from 'react-router-hash-link'

const Boton = () => {
  return (
    <div className="Boton">
      <HashLink to="#navbar">
        <img src={otherImages.buttonToTop} alt="Botón ir hacia arriba" />
      </HashLink>
    </div>
  )
}

export default Boton