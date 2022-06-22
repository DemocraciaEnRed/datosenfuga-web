import React from 'react'
import './Muestra.scss'
import { logos }  from '../../constants'
import Sticky from './Sticky/Sticky'
import Faq from './Faq/Faq'

const Muestra = () => {
  return (
    <div className="app__muestra">
      {/* Header naranja */}
      <div className="app__muestra-header">
        <div className="app__muestra-header_textos">
          <span id="title-convocatorias">CONVOCAMOS ARTISTAS</span> <br />
          <span>PARA POP-UP AGOSTO</span>
          <p>Te invitamos a inscribirte como artista o participante</p>
        </div>
        <div className="app__muestra-header_lista">
          <ul>
            <li><img src={logos.convocatoria} alt="Convocatoria"></img>Convocatoria Abierta</li>
            <li><img src={logos.postulaciones} alt="Postulaciones"></img>Postulaciones: <b>22/06/2022</b> al<b> 10/07/2022</b></li>
            <li><img src={logos.publicacion} alt="Publicación"></img>Publicación de obras: <b>22/07/2022</b></li>
            <li><img src={logos.evento} alt="Evento"></img>Evento: <b>19 y 20 de Agosto 2022</b></li>
          </ul>
        </div>
      </div>
      <Sticky/>
      {/* Información de la muestra */}
      <div className="app__muestra-contenido">
        <p id="sobreLaMuestra" className="contenido__title">SOBRE LA MUESTRA</p>
        <p className="contenido__text">
          Vivimos rodeados de datos: los utilizamos, los producimos y se los entregamos a un sin fín de aplicaciones y plataformas aún sin darnos cuenta pero sabiendo que el resultado de todo ese conjunto de datos servirá para que nos envíen publicidades cada vez más precisas y específicas sobre nuestros intereses. Pero ¿qué sucede cuando nuestros datos son gestionados por plataformas del Estado? ¿Sabemos qué tan seguros se encuentran nuestros datos personales?
          <br /> <br />
          Esta experiencia multidisciplinaria invita a observar el vínculo inevitable entre infraestructuras, sistemas de información, plataformas y datos personales a través de una serie de preguntas: ¿quiénes tienen acceso a nuestros datos? ¿cómo funcionan los sistemas de protección de estos sistemas? ¿es posible desde la ciudadanía contribuir a la protección de estos sistemas bajo un marco legal que no penalice a quienes detectan y reportan vulnerabilidades? 
          <br /> <br />
          Datos en Fuga invita a artistas, investigadores, activistas y tecnólogos de Argentina a participar de la exhibición con obras que propongan miradas, metáforas y acciones en relación a estos interrogantes. 
        </p>
        
        {/* spacer */}
        <div className="spacer_muestra">
          <img src={logos.spacer} alt="" />
        </div>
        
        <p id="postulaTuObra"className="contenido__title">POSTULÁ TU OBRA</p>
        <p className="contenido__text">
          Datos en Fuga recibe postulaciones de obras en todos los formatos y medios, siendo algunos ejemplos: 
          <br /> <br />
          <b>Instalaciones, objetos digitales, sitios web, visualizaciones de datos, apps, acciones o performance.</b>
          <br /> <br />
          Las obras postuladas deberán estar producidas al momento de la aplicación, no se aceptarán proyectos o trabajos en proceso, y les artistas seleccionados contarán con honorarios por su participación, siendo la organización quien cubre los gastos de traslado, montaje, seguros y desmontaje.
        </p>
        <button className='muestra_button'>
          <a href="https://forms.gle/CNvzabMjvgZ3TWeDA" target="_blank" rel="noopener noreferrer">Inscribí tu obra</a>
        </button>
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
      <Faq/>
    </div>
  )
}

export default Muestra