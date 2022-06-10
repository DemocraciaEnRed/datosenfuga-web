import React from 'react'
import './Organizaciones.scss'
import { logos } from '../../../constants'

const Organizaciones = () => {
  return (
    <>
      <div id='organizaciones' className='app__organizaciones'>
        <div className='app__organizaciones-logos'>
          <a href='https://odia.legal/' target='_blank' rel='noreferrer'><img src={logos.odia} alt='Logo O.D.I.A' id='odia' /></a>
          <a href='https://democraciaenred.org/' target='_blank' rel='noreferrer'><img src={logos.der} alt='Logo Democracia en Red' id='der' /></a>
          <a href='https://www.vialibre.org.ar/' target='_blank' rel='noreferrer'><img src={logos.vialibre} alt='Logo Fundación Vía Libre' id='fvl' /></a>
          <a href='https://indela.fund/' target='_blank' rel='noreferrer'><img src={logos.indela} alt='Logo Indela' id='indela' /></a>
        </div>
      </div>
    </>
  )
}

export default Organizaciones