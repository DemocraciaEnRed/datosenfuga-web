import './Sticky.scss'
import { HashLink } from "react-router-hash-link";
const Sticky = () => {
  return (
    <div className="app__muestra__sticky">
        <ul>
          <li><HashLink to='/muestra/#sobreLaMuestra'>Sobre la muestra</HashLink></li>
          <li><HashLink to='/muestra/#postulaTuObra'>Postulá tu obra</HashLink></li>
          {/* <li><a href='#eventoInscripciones'>Evento - inscripción</a></li> */}
          <li><HashLink to='/muestra/#faqMuestra'>Preguntas frecuentes</HashLink></li>
          <li><HashLink to='/muestra/#basesCondiciones'>Bases y condiciones</HashLink></li>
          <li><HashLink to='/muestra/#contactoMuestra'>Contacto</HashLink></li>
        </ul>
      </div>
  )
}

export default Sticky