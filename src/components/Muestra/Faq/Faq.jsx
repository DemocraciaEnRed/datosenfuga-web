import "./Faq.scss";
// import { faqs } from "./textFaqs"
import basescondiciones from "../../../assets/papers/BasesyCondiciones-DatosEnFuga.pdf"

const Faq = () => {
  const handleClick = (e) => {
    e.stopPropagation();
    let accordion = e.target;
    accordion.classList.toggle("active");
    let panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
  return (
    <div id="faqMuestra" className="faq">
      <div className="faq__wrapper">
        <p className="faq__title">Preguntas frecuentes</p>
        <div className="faq__box">
          <button className="faq__accordion" onClick={handleClick}>
            1. ¿Quiénes se pueden presentar a esta convocatoria?
          </button>
          <div className="faq__panel">
            <p>Pueden presentarse artistas, investigadores, tecnólogos y todos aquellos que desarrollen proyectos en torno a la relación arte, tecnología y sociedad vinculados al eje curatorial de esta exhibición de cualquier parte del territorio argentino sin limitaciones de edad.</p>
          </div>
        </div>

        <div className="faq__box">
          <button className="faq__accordion" onClick={handleClick}>
            2. ¿Qué tengo que presentar para aplicar?
          </button>
          <div className="faq__panel">
            <p>En el <a href="https://forms.gle/y8WvKC7fWnGnc5x19" target="_blank" rel="noreferrer">formulario</a> de aplicación deberás completar con información personal, datos de contacto y la información específica de tu propuesta explicitando la relación con el eje curatorial de la exhibición.</p>
          </div>
        </div>

        <div className="faq__box">
          <button className="faq__accordion" onClick={handleClick}>
            3. ¿Qué proyectos se pueden presentar?
          </button>
          <div className="faq__panel">
            <p>
              Se reciben postulaciones de obras en todos los formatos y medios, siendo algunos ejemplos: instalaciones, objetos digitales, sitios web, visualizaciones de datos, apps, acciones o performances. 
              Las obras postuladas deberán estar producidas al momento de la aplicación. No se aceptarán proyectos o trabajos en proceso. 
            </p>
          </div>
        </div>

        <div className="faq__box">
          <button className="faq__accordion" onClick={handleClick}>
            4. ¿Puedo postular más de una obra?
          </button>
          <div className="faq__panel">
            <p>Sí, podés postular todas las obras que desees ya sean en carácter individual o colectivo, utilizando un formulario para cada una de las obras.</p>
          </div>
        </div>

        <div className="faq__box">
          <button className="faq__accordion" onClick={handleClick}>
            5. ¿Qué información se solicita en la postulación? 
          </button>
          <div className="faq__panel">
            <p>En el formulario de inscripción se solicita: CVs, documentación de la obra (que incluya imágenes o videos de la misma y características técnicas) y una descripción de los requerimientos técnicos, si los hay.</p>
          </div>
        </div>

        <div className="faq__box">
          <button className="faq__accordion" onClick={handleClick}>
            6. ¿Hasta cuándo se pueden enviar propuestas?
          </button>
          <div className="faq__panel">
            <p>Hasta el 10/07/202 de 2022 a las 23:59h (GMT-3)</p>
          </div>
        </div>

        <div className="faq__box">
          <button className="faq__accordion" onClick={handleClick}>
            7. ¿Cómo se realiza la inscripción?
          </button>
          <div className="faq__panel">
            <p>Todas las postulaciones se realizan a través del <a href="https://forms.gle/y8WvKC7fWnGnc5x19" target="_blank" rel="noreferrer">formulario</a>, no se recibirán propuestas por correo ni por ningún otro medio.</p>
          </div>
        </div>

        <div className="faq__box">
          <button className="faq__accordion" onClick={handleClick}>
            8. ¿Cuál es el cronograma de la convocatoria?
          </button>
          <div className="faq__panel">
            <p>Convocatoria: del 22 de junio al 10 de julio de 2022</p>
            <p>Comunicación de seleccionades: 22 de julio de 2022</p>
            <p>Exhibición: 19 y 20 de agosto de 2022</p>
          </div>
        </div>

        <div className="faq__box">
          <button className="faq__accordion" onClick={handleClick}>
            9. ¿Dónde se realizará la muestra?
          </button>
          <div className="faq__panel">
            <p>Aunque el lugar no está confirmado aún, podemos confirmar que será en la Ciudad Autónoma de Buenos Aires.</p>
          </div>
        </div>

        <div className="faq__box">
          <button className="faq__accordion" onClick={handleClick}>
            10. ¿La exposición de la obra será remunerada? 
          </button>
          <div className="faq__panel">
            <p>
              Por la participación en la muestra, recibirán una remuneración económica de <strong>$25.000ARS</strong> en concepto de honorarios de artista (monto total para obras producidas por artistas o colectivos artísticos, a pagar contra factura). Se pagarán el lunes posterior a la muestra, a contra factura. 
              La organización asumirá los gastos de traslado, seguros, montaje y desmontaje de las obras seleccionadas.
            </p>
          </div>
        </div>

        <a id="basesCondiciones" href={basescondiciones} target="_blank" rel="noreferrer" download><button className="faq__legal">BASES Y CONDICIONES</button></a>
        <div id="contactoMuestra" className="faq__contact">
          <p className="faq__contact__title">Contacto</p>
          <p>
            Si tenés alguna duda, querés ampliar algún tipo de información, o
            cualquier otro detalle relacionado a la muestra y/o convocatoria,
            escribinos a:
          </p>
          <p><a href="mailto:datosenfuga@gmail.com">datosenfuga@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
