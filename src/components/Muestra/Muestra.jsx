import React from 'react'
import './Muestra.scss'
import { logos } from '../../constants'
import Sticky from './Sticky/Sticky'
import Faq from './Faq/Faq'

const Muestra = () => {
  return (
    <div className="app__muestra">
      <div className="app__muestra-header">
        <div className="app__muestra-header_textos">
          <span className="title-convocatorias">CONVOCAMOS ARTISTAS</span> <br />
          <span>PARA POP-UP EN AGOSTO</span>
          <p>Te invitamos a inscribirte como artista o participante</p>
        </div>
        <div className="app__muestra-header_lista">
          <ul>
            <li><img src={logos.convocatoria} alt="Convocatoria"></img> <p>Convocatoria Cerrada</p></li>
            <li><img src={logos.publicacion} alt="Publicación"></img> <p className='app__muestra-header_lista_obras'>Próximamente anunciaremos las obras seleccionadas.</p> </li>
            <li><img src={logos.evento} alt="Evento"></img> <p>Evento: <b>19 y 20 de Agosto 2022</b></p> </li>
          </ul>
        </div>
      </div>
      <Sticky />
      <div className="app__muestra-contenido">
        <p id="sobreLaMuestra" className="contenido__title">SOBRE LA MUESTRA</p>
        <p className="contenido__text">
          Vivimos rodeados de datos: los utilizamos, los producimos y se los entregamos a un sin fín de aplicaciones y plataformas aún sin darnos cuenta pero sabiendo que el resultado de todo ese conjunto de datos servirá para que nos envíen publicidades cada vez más precisas y específicas sobre nuestros intereses. Pero ¿qué sucede cuando nuestros datos son gestionados por plataformas del Estado? ¿Sabemos qué tan seguros se encuentran nuestros datos personales?
          <br /> <br />
          Esta experiencia multidisciplinaria invita a observar el vínculo inevitable entre infraestructuras, sistemas de información, plataformas y datos personales a través de una serie de preguntas: ¿quiénes tienen acceso a nuestros datos? ¿cómo funcionan los sistemas de protección de estos sistemas? ¿es posible desde la ciudadanía contribuir a la protección de estos sistemas bajo un marco legal que no penalice a quienes detectan y reportan vulnerabilidades?
          <br /> <br />
          Datos en Fuga invita a artistas, investigadores, activistas y tecnólogos de Argentina a participar de la exhibición con obras que propongan miradas, metáforas y acciones en relación a estos interrogantes.
        </p>

        <div className="spacer_muestra">
          <img src={logos.spacer} alt="" />
        </div>

        <p id="postulaTuObra" className="contenido__title">POSTULÁ TU OBRA</p>
        <p className="contenido__convocatoria">
          <b>La convocatoria esta cerrada</b><br/>
          <b className="contenido__convocatoria--small">
            ¡Muchas gracias por tu interés y participación!</b>
        </p>
        <p className="contenido__text">La inscripción de obras se encuentra cerrada, próximamente podrás conocer las obras seleccionadas y mas información sobre ellas!
        </p>
        {/* spacer
        <div className="spacer_muestra">
          <img src={logos.spacer} alt="" /> 
        </div>
        
        <p id="eventoInscripciones" className="contenido__title">EVENTO</p>
        <p className="contenido__subtitle">
          <b>El evento será desde el día xx de julio hasta el xxx de julio.</b>
        </p>
        <p className="contenido__text">
          ¡Te invitamos a que te inscribas para asistir al evento! <br /> <br />
          La <b>inscripcion</b> para asistir <b>no es obligatoria</b> podes presentarte al evento sin inscripcion previa, pero <b>nos ayuda a preparar las instalaciones sabiendo la cantidad de participantes</b>. Puedes incribirte aunque luego no puedas asistir o no estes seguro. 
        </p>

        <button className='muestra_button'>
          <a href="https://forms.gle/2TC4MJHvryLK4BDw7" target="_blank" rel="noopener noreferrer">Anotate</a>
        </button> */}
      </div>
      <Faq />
    </div>
  )
}

export default Muestra