import './Reportes.scss'
import { reportesImg } from '../../assets/reportes'
import squaresData from "./data"
import Faq from "./Faq/Faq"
import Proteger from './Proteger/Proteger'

const Reportes = () => {
    return (
        <main className='reportes'>
            <header className='reportes__header'>
                <div className='header__title'>
                    <img className="header__title-img" src={reportesImg.qant} alt="logo quien avisa no traiciona" />
                    <span className='header__title-globaleaks'>Sistema Basado en <strong>GLOBALEAKS</strong><img src={reportesImg.globaleaks} alt="logo globaleaks" /></span>
                </div>
                <h2 className='header__subtitle'>¿Encontraste una falla de seguridad y temes reportarla?</h2>
                <a className="header__report-button" href="#reportes__squares" type="button">¿Cómo reportar seguro?</a>
            </header>
            <section className='reportes__info'>
                <p className="reportes__info__desc reportes--text-container">El sitio desarrollado por <b>Fundación Via Libre</b> con un sistema basado en <b>GlobalLeaks</b>, permite informar de forma anónima y protegida sobre <b>fallas en sistemas informáticos</b> que afecten los derechos de las personas. Podés reportarlas acá para que sean reparadas.</p>
                <div class="reportes__squares">
                {
                    squaresData.map((square) => {
                        return (
                          <div class="squareInfo" key={square.id}>
                              <img src={square.img} alt="icon" height="69" width="69" />
                              <div class="squareInfo__text">
                                  <p className="squareInfo__title">{square.title}</p>
                                  <p className="squareInfo__description">{square.subtitle}</p>
                              </div>
                          </div>
                        )
                    })
                }
                </div>
                <a className="reportes__report-button" href="https://reportes.vialibre.ngo/" type="button" target="_blank" rel="noopener noreferrer">REPORTÁ</a>
            </section>
            <Proteger/>
            <Faq />
            <section className='reportes__about'>
                <h2 className='reportes__about-title'>Sobre el proyecto</h2>
                <p className='reportes__about-content reportes--text-container'>Desde Fundación Vía Libre, ODIA y Democracia en Red  realizamos todos los esfuerzos técnicos para no conservar datos personales a través de los reportes recibidos. Tal como se puede consultar en la sección “¿Cómo te protegemos?”, la información que envíes es absolutamente anónima para nosotros: la plataforma está diseñada de forma tal que únicamente conserva el contenido presentado en la denuncia y genera en consecuencia un código único para identificarla, sin quedar asociada a quien la realiza. No accedemos a ni conservamos registros que permitan individualizar o identificar a quienes completan el formulario: no empleamos ningún mecanismo para trazar tu conexión ni guardamos registro de las direcciones de red desde las que te hayas conectado o cualquier otro metadato que pueda identificarte. De todas formas, recomendamos como precaución general no incluir información personal y, en lo posible, acceder a través del navegador TOR.</p>
            </section>
            
        </main>
    )
}

export default Reportes