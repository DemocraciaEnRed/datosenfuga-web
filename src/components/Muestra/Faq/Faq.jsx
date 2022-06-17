import "./Faq.scss";
import { faqs } from "./textFaqs"
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
        {
          faqs.map(faq => {
            return (
              <div className="faq__box">
                <button className="faq__accordion" onClick={handleClick}>
                  {faq.title}
                </button>
                <div className="faq__panel">
                  <p>{faq.text}</p>
                </div>
              </div>
            )
          })
        }
        <button className="faq__legal">BASES Y CONDICIONES</button>
        <div className="faq__contact">
          <p className="faq__contact__title">Contacto</p>
          <p>
            Si tenes alguna duda, queres ampliar algún tipo de información, o
            cualquier otro detalle relacionado a la muestra y/o convocatoria,
            escribinos a:
          </p>
          <p><a href="mailto:adatosenfuga@gmail.com">adatosenfuga@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
