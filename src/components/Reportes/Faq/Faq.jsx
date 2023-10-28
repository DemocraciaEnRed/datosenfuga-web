import "./Faq.scss"

const Faq = () => {
  return (
    <section className="faq">
      <h2 className="faq__title">¿CÓMO Y QUÉ PODES REPORTAR?</h2>
      <p className="faq__description reportes--text-container">
        La Fundación Via Libre se encarga de recibir reportes sobre defectos en aplicaciones empleadas por organizaciones públicas o privadas que afecten derechos de las personas. En particular, cuando se ponen en riesgo sus datos personales. Así, si encontraste una falla en una aplicación que permite que alguien no autorizado extraiga o modifique datos, tuyos o de otras personas, este es el lugar para poder informarlo. También sirve para informar sobre vulnerabilidades potenciales, por ejemplo si encontraste que un sitio está corriendo una versión obsoleta (por "obsoleta" entendemos una versión que ya no recibe soporte ni parches de seguridad) o insegura de software. 
      </p>
      <div className="faq__list">
        <ol className="reportes--text-container">
          <li>Es muy importante que aportes la mayor cantidad de datos posible, en especial indicando los pasos que seguiste para encontrar la falla. </li>
          <li><b>Tomá nota del código de recepción</b>, te servirá para acceder nuevamente a tu reporte y ver qué acciones se han llevado a cabo sobre él, así como para agregar toda información adicional.</li>
          <li>Recordá que solo podemos comunicarte las novedades a través de la página de ese reporte en particular.</li>
        </ol>
      </div>
      <div className="faq__centered">
        <a className="faq__report-button" href="https://reportes.vialibre.ngo/" type="button" target="_blank" rel="noopener noreferrer">HACÉ TU REPORTE ANÓNIMO</a>
      </div>
      <hr className="faq__divider"/>
      <h2 className="faq__title">¿QUÉ HACEMOS CON TUS REPORTES?</h2>
      <p className="faq__description reportes--text-container">La Fundación Via Libre se encarga de recibir reportes anónimos sobre fallas de ciberseguridad. Trabajamos para proteger la identidad de quienes nos informan y tomamos medidas para asegurarnos de que se les dé el seguimiento adecuado. En caso de ser relevante, presentamos los informes a organismos competentes, además de explorar mecanismos de reclamo judiciales. Tu seguridad y confidencialidad son nuestra prioridad.</p>
    </section>
  )
}

export default Faq