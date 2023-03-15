import './Sticky.scss'
const Sticky = () => {
  return (
    <div className="app__muestra__sticky">
        <ul>
          <li><a href='#sobreLaMuestra'>Sobre la muestra</a></li>
          <li><a href='#eventoObras'>Obras seleccionadas</a></li>
          {/* <li><a href='#eventoInscripciones'>Evento - inscripción</a></li> */}
          <li><a href='#reviviLaMuestra'>Reviví la muestra</a></li>
        </ul>
      </div>
  )
}

export default Sticky