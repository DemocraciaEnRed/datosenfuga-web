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
                <a className="header__report-button" href="http://" type="button" target="_blank" rel="noopener noreferrer">¿Cómo reportar seguro?</a>
            </header>
            <section className='reportes__info'>
                <p className="reportes__info__desc">El sitio desarrollado por <b>Fundación Via Libre</b> con un sistema basado en <b>GlobalLeaks</b>, permite informar de forma anónima y protegida sobre <b>fallas en sistemas informáticos</b> que afecten los derechos de las personas. Podés reportarlas acá para que sean reparadas.</p>
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
                <a className="reportes__report-button" href="http://" type="button" target="_blank" rel="noopener noreferrer">REPORTÁ</a>
            </section>
            <Proteger/>
            <Faq />
            
        </main>
    )
}

export default Reportes