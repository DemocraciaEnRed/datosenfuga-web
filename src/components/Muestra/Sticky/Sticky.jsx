import './Sticky.scss'
import { Link } from 'react-router-dom';
const Sticky = () => {
  return (
    <div className="app__muestra__sticky">
        <ul>
          <li><Link to='/muestra/#sobreLaMuestra'>Sobre la muestra</Link></li>
          <li><Link to='/muestra/#eventoObras'>Obras seleccionadas</Link></li>
          {/* <li><a href='#eventoInscripciones'>Evento - inscripción</a></li> */}
          <li><Link to='/muestra/#reviviLaMuestra'>Reviví la muestra</Link></li>
        </ul>
      </div>
  )
}

export default Sticky