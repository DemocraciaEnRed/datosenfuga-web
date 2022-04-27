import './Footer.scss'
import { logos } from '../../constants'

const Footer = () => {
  return (
      <div id='organizaciones' className='app__organizaciones'>
        <div className='app__logos'>
          <img src={logos.odia} alt='Logo O.D.I.A' />
          <img src={logos.der} alt='Logo Democracia en Red' />
          <img src={logos.vialibre} alt='Logo Fundación Vía Libre' />
          <img src={logos.indela} alt='Logo Indela' />
        </div>
        <footer className='app__contacto'>
          <div className='app__contacto-redes'>
            <img src={logos.byDer} alt='Logo Democracia en Red' />
          </div>
          <div className='app__contacto-redes'>
            <a href='https://twitter.com/fundacionder' target='_blank'><img src={logos.twitter} alt='Icono Twitter' /></a>
            <a href='https://www.instagram.com/democraciaenred/' target='_blank'><img src={logos.instagram} alt='Icono Instagram' /></a>
            <a href='https://www.youtube.com/channel/UCm5n0zxmfWN0pMuMPxk7psw/featured' target='_blank'><img src={logos.youtube} alt='Icono Youtube' /></a>
          </div>
          <div className='app__contacto-email'>
            <a href='mailto:contacto@democraciaenred.org' target='_blank'>contacto@democraciaenred.org</a>
          </div>
        </footer>
      </div>
  )
}

export default Footer