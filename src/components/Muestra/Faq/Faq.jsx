import "./Faq.scss";
import { faqs } from "./textFaqs"
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
        {
          faqs.map(faq => {
            return (
              <div className="faq__box" key={faq.id}>
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
        <a id="basesCondiciones" href="https://drive.google.com/file/d/1_nsZ417zLXd4hYnFPGRruOnvwBWG4Lz0/view?usp=sharing"><button className="faq__legal">BASES Y CONDICIONES</button></a>
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
