import './Sticky.scss'
import { HashLink } from "react-router-hash-link";
const Sticky = () => {
  return (
    <div className="app__muestra__sticky">
        <ul>
          <li><HashLink to='/muestra/#sobreLaMuestra'>Sobre la muestra</HashLink></li>
          <li><HashLink to='/muestra/#eventoObras'>Obras seleccionadas</HashLink></li>
          {/* <li><a href='#eventoInscripciones'>Evento - inscripción</a></li> */}
          <li><HashLink to='/muestra/#contactoMuestra'>Contacto</HashLink></li>
        </ul>
      </div>
  )
}

export default Sticky