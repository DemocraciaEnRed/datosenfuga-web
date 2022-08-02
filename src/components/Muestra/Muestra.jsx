import React from 'react'
import './Muestra.scss'
import { logos }  from '../../constants'
import Sticky from './Sticky/Sticky'
import Faq from './Faq/Faq'
import Obras from './Obras/Obras'

const Muestra = () => {

  // 0 postulaciones no habilitadas, 1 habilitadas, 2 expositor muestras
  let display = 2

  if (display === 1) {
    return (
      <div className="app__muestra">
        {/* Header naranja */}
        <div className="app__muestra-header">
          <div className="app__muestra-header_textos">
            <span className="title-convocatorias">CONVOCAMOS ARTISTAS</span> <br />
            <span>PARA POP-UP EN AGOSTO</span>
            <p>Te invitamos a inscribirte como artista o participante</p>
          </div>
          <div className="app__muestra-header_lista">
            <ul>
              <li><img src={logos.convocatoria} alt="Convocatoria"></img> <p>Convocatoria abierta</p></li>
              <li><img src={logos.postulaciones} alt="Postulaciones"></img><p>Postulaciones: <b>22/06/2022</b> al<b> 10/07/2022</b></p></li>
              <li><img src={logos.prorroga} alt="Publicación"></img> <p><b className="textShadow">PRÓRROGA POSTULACIONES</b> hasta <b className="textShadow">22/07/2022</b></p> </li>
              <li><img src={logos.publicacion} alt="Publicación"></img> <p>Publicación de obras: <b>22/07/2022</b></p> </li>
              <li><img src={logos.evento} alt="Evento"></img> <p>Evento: <b>19 y 20 de Agosto 2022</b></p> </li>
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
          
          <div className="spacer_muestra">
            <img src={logos.spacer} alt="" />
          </div>
          
          <p id="postulaTuObra" className="contenido__title">POSTULÁ TU OBRA</p>
          <p id="extensionObras-title">PRÓRROGA para POSTULACIÓN de obras hasta 22/07/2022</p>
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

          <div className="spacer_muestra">
            <img src={logos.spacer} alt="" /> 
          </div>
          
          <p id="eventoInscripciones" className="contenido__title">EVENTO</p>
          <p className="contenido__subtitle">
            <b>El evento será desde el día 19 de agosto hasta el 20 de agosto.</b>
          </p>
          <p className="contenido__text">
            ¡Te invitamos a que te inscribas para asistir al evento! <br /> <br />
            La <b>inscripción</b> para asistir <b>no es obligatoria</b>, podés presentarte al evento sin inscripción previa, pero <b>nos ayuda a preparar las instalaciones sabiendo la cantidad de participantes</b>. Puedes inscribirte aunque luego no puedas asistir o no estés seguro. 
          </p>
  
          <button className='muestra_button'>
            <a href="https://forms.gle/2TC4MJHvryLK4BDw7" target="_blank" rel="noopener noreferrer">Anotate</a>
          </button>
        </div>
        <Faq/>
      </div>
    )
  } else if (display === 0) {
    return (
      <div className="app__muestra">
        {/* Header naranja */}
        <div className="app__muestra-header">
          <div className="app__muestra-header_textos">
            <span className="title-convocatorias">CONVOCAMOS ARTISTAS</span> <br />
            <span>PARA POP-UP EN AGOSTO</span>
            <p>Te invitamos a inscribirte como artista o participante</p>
          </div>
          <div className="app__muestra-header_lista">
            <ul>
              <li><img src={logos.convocatoria} alt="Convocatoria"></img> <p>Convocatoria Cerrada</p></li>
              <li><img src={logos.publicacion} alt="Publicación"></img> <p className="textShadow">Próximamente anunciaremos las obras seleccionadas.</p> </li>
              <li><img src={logos.evento} alt="Evento"></img> <p>Evento: <b>19 y 20 de Agosto 2022</b></p> </li>
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
          
          <div className="spacer_muestra">
            <img src={logos.spacer} alt="" />
          </div>
          
          <p id="eventoInscripciones" className="contenido__title">EVENTO</p>
          <p className="contenido__subtitle">
            <b>El evento será desde el día 19 de agosto hasta el 20 de agosto.</b>
          </p>
          <p className="contenido__text">
            ¡Te invitamos a que te inscribas para asistir al evento! <br /> <br />
            La <b>inscripcion</b> para asistir <b>no es obligatoria</b> podes presentarte al evento sin inscripcion previa, pero <b>nos ayuda a preparar las instalaciones sabiendo la cantidad de participantes</b>. Puedes incribirte aunque luego no puedas asistir o no estes seguro. 
          </p>
  
          <button className='muestra_button'>
            <a href="https://forms.gle/2TC4MJHvryLK4BDw7" target="_blank" rel="noopener noreferrer">Anotate</a>
          </button>

          <div className="spacer_muestra">
            <img src={logos.spacer} alt="" /> 
          </div> 

          <p id="postulaTuObra"className="contenido__title">POSTULÁ TU OBRA</p>
          <div className="app__muestra-obra-cerrada">
            <p className="title__cerrada">
              La convocatoria esta cerrada <br />
              ¡Muchas gracias por tu interés y participación!
            </p>
            <p className="contenido__text">
              La inscripción de obras se encuentra cerrada, próximamente podrás conocer las obras seleccionadas y más información sobre ellas.
            </p>
          </div>
        </div>
        <Faq/>
      </div>
    )
  } else if (display === 2) {
    return (
      <div className="app__muestra">
        {/* Header naranja */}
        <div className="app__muestra-header">
          <div className="app__muestra-header_textos">
            <span className="title-convocatorias">CONVOCAMOS ARTISTAS</span> <br />
            <span>PARA POP-UP EN AGOSTO</span>
            <p>Te invitamos a inscribirte y asistir a la muestra</p>
          </div>
          <div className="app__muestra-header_lista">
            <ul>
              <li><img src={logos.convocatoria} alt="Convocatoria"></img> <p>Convocatoria Cerrada</p></li>
              <li><img src={logos.publicacion} alt="Publicación"></img> <p className="textShadow">Obras seleccionadas</p> </li>
              <li><img src={logos.evento} alt="Evento"></img> <p>Evento: <b>19 y 20 de Agosto 2022</b></p> </li>
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
          
          <div className="spacer_muestra">
            <img src={logos.spacer} alt="" />
          </div>
          
          <p id="eventoInscripciones" className="contenido__title">EVENTO</p>
          <br />
          <p className="contenido__subtitle-obras">El evento será los días 19 y 20 de Agosto</p>
          <br />
          <p className="contenido__subtitle-obras">Detalles del evento</p>
          <p className="contenido__text">
            Emplazado en <a href="https://g.page/multiespaciokorova?share" target="_blank" rel="noreferrer" >Multiespacio Korova</a>, Paraguay 4667, Buenos Aires
            <br />
            <br />
            <li><b>Día 1</b>: 18:30hs a 02hs</li>
            <li><b>Día 2</b>: 18:30hs a 02hs</li>
            <br />
            ¡Te invitamos a que te inscribas para asistir al evento! <br /> <br />
            La <b>inscripcion</b> para asistir <b>no es obligatoria</b> podes presentarte al evento sin inscripcion previa, pero <b>nos ayuda a preparar las instalaciones sabiendo la cantidad de participantes</b>. Puedes incribirte aunque luego no puedas asistir o no estes seguro. 
          </p>
  
          <button className='muestra_button'>
            <a href="https://forms.gle/2TC4MJHvryLK4BDw7" target="_blank" rel="noopener noreferrer">Anotate</a>
          </button>

          <div className="spacer_muestra">
            <img src={logos.spacer} alt="" /> 
          </div>

          <p id="eventoObras" className="contenido__title">OBRAS</p>
          <p className="contenido__text">
            ¡Estas son las obras seleccionadas!<br /><br />Si presentaste la obra, ya te hemos contactado. En caso de no haber sido contactado aun te pedimos que nos escribas.
          </p>
          <Obras />
        </div>
        <Faq/>
      </div>
    )
  }
}

export default Muestra