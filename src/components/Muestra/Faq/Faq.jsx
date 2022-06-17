import "./Faq.scss";
// import { logos } from "../../../constants";
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
    <div className="faq">
      <div className="faq__wrapper">
        <p className="faq__title">Preguntas frecuentes</p>
        <div className="faq__box">
          <button className="faq__accordion" onClick={handleClick}>
            1. ¿Qué tengo que presentar para aplicar?
          </button>
          <div className="faq__panel">
            <p>Lorem ipsum...</p>
          </div>

          <button className="faq__accordion" onClick={handleClick}>
            2. ¿Qué tengo que presentar para aplicar?
          </button>
          <div className="faq__panel">
            <p>Lorem ipsum...</p>
          </div>

          <button className="faq__accordion" onClick={handleClick}>
            3. ¿Hasta cuándo se pueden enviar propuestas?
          </button>
          <div className="faq__panel">
            <p>Lorem ipsum...</p>
          </div>

          <button className="faq__accordion" onClick={handleClick}>
            4. ¿Cómo se realiza la inscripción?
          </button>
          <div className="faq__panel">
            <p>Lorem ipsum...</p>
          </div>

          <button className="faq__accordion" onClick={handleClick}>
            5. ¿Cuál es el cronograma de la convocatoria?
          </button>
          <div className="faq__panel">
            <p>Lorem ipsum...</p>
          </div>
        </div>
        <button className="faq__legal">BASES Y CONDICIONES</button>
        <div className="faq__contact">
          <p className="faq__contact__title">Contacto</p>
          <p>
            Si tenes alguna duda, queres ampliar algún tipo de información, o
            cualquier otro detalle relacionado a la muestra y/o convocatoria,
            escribinos a:
          </p>
          <p>datosenfuga@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
