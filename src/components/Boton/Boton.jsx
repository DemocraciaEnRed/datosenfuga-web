import React from 'react'
import './Boton.scss'
import { otherImages } from '../../constants'
// import { Link } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

const Boton = () => {
  return (
    <div className="Boton">
      <Link to="#navbar">
        <img src={otherImages.buttonToTop} alt="Botón ir hacia arriba" />
      </Link>
    </div>
  )
}

export default Boton