import './Footer.scss'
import { logos } from '../../constants'

const Footer = () => {
  return (
    <>
      <div id='organizaciones' className='app__organizaciones'>
        <div className='app__organizaciones-logos'>
          <img src={logos.odia} alt='Logo O.D.I.A' />
          <img src={logos.der} alt='Logo Democracia en Red' />
          <img src={logos.vialibre} alt='Logo Fundación Vía Libre' />
          <img src={logos.indela} alt='Logo Indela' />
        </div>
      </div>
      <footer className='app__footer'>
        <div className='app__footer-logo'>
          <img src={logos.byDer} alt='Logo Democracia en Red' />
        </div>
        <div className='app__footer-redes'>
          <a href='https://twitter.com/fundacionder' target='_blank' rel='noreferrer'><img src={logos.twitter} alt='Icono Twitter' /></a>
          <a href='https://www.instagram.com/democraciaenred/' target='_blank' rel='noreferrer'><img src={logos.instagram} alt='Icono Instagram' /></a>
          <a href='https://www.youtube.com/channel/UCm5n0zxmfWN0pMuMPxk7psw/featured' target='_blank' rel='noreferrer'><img src={logos.youtube} alt='Icono Youtube' /></a>
          <a href='mailto:contacto@democraciaenred.org' target='_blank' rel='noreferrer' className='correo'>contacto@democraciaenred.org</a>
        </div>
        <div className='app__footer-email'>
          <a href='mailto:contacto@democraciaenred.org' target='_blank' rel='noreferrer'>contacto@democraciaenred.org</a>
        </div>
      </footer>
    </>
  )
}

export default Footer