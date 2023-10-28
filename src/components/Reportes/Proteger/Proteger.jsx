import React from 'react'
import './Proteger.scss'
import squaresData2 from './data'

const Proteger = () => {
    return (
        <section className='proteger'>
            <h2 className='proteger__title'>¿CÓMO TE PROTEGEMOS?</h2>
            <div class="proteger__items" >
                {squaresData2.map(square => {
                    return (
                        <div className="proteger__items__square" key={"proteger" + square.id}>
                            <img src={square.img} alt="icon" height="69" width="69" />
                            <div class="proteger__items__square-text">
                                <p className="proteger__items__square-title">{square.title}</p>
                                <p className="proteger__items__square-subtitle">{square.subtitle}</p>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <ul className='proteger__detalles reportes--text-container'>
                <li>Aunque no conservemos datos identificatorios, <strong className='proteger__detalles--bold'>se recomienda encarecidamente usar el <a href="https://www.torproject.org/es/" target="_blank" rel="noopener noreferrer">navegador TOR</a> y acceder al sitio a través del URL dot-onion</strong> para mayor anonimato.</li>
                <li><strong className='proteger__detalles--bold'>La información enviada a este sitio es totalmente anónima y no se registra ningún dato que pueda identificarte.</strong></li>
                <li>No conservamos registros de direcciones de red ni otros metadatos de conexión.</li>
                <li>No cumpliremos órdenes para revelar datos identificatorios, ya que no los tenemos.</li>
                <li>Publicamos informes de transparencia sobre las solicitudes u órdenes recibidas.</li>
                <li>Implementamos medidas legales y un "canario" para proteger la privacidad en caso de recibir una orden judicial para registrar datos.</li>
                <li>Se sugiere el uso de una distribución "live" como Tails, que implementa TOR y puede ejecutarse desde un dispositivo USB para mayor seguridad.</li>
            </ul>
        </section>
    )
}

export default Proteger