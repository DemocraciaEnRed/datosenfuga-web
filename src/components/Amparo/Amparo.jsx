import React, { useEffect } from 'react'
import Seo from '../SEO/Seo'
import { logos } from '../../constants'
import './Amparo.scss'
import Comic from './Comic/Comic'
import { HashLink } from 'react-router-hash-link'

const Amparo = () => {

    const seoData = {
        title: 'Amparo',
        description: 'Presentamos un amparo contra el Estado para proteger nuestros datos personales en un año de elecciones.',
        keywords: ''
    };

    useEffect(() => {
        const animationsLink = document.createElement("link");
        animationsLink.rel = "stylesheet";
        animationsLink.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
        const head = document.querySelector("head");
        head.appendChild(animationsLink);
    }, [])


    return (
        <>
            <Seo data={seoData} />
            <div className="banner">
                <h1>
                    <span>#CON</span>MIS<span>DATOS</span>NO
                </h1>
                <p className="banner__subtitle"><b>Presentamos un amparo contra el Estado para proteger nuestros datos personales en un año de elecciones.</b></p>
                <p className="banner__description">Si bien más abajo te dejamos el texto del amparo completo, entendemos que es necesario traductor IDIOMA JURÍDICO - ESPAÑOL para leerlo. No tenemos esa IA, así que te explicamos desde la comodidad de un comic porque el incumplimiento de la Ley de Datos Personales puede afectar en tu decisión de voto.</p>
                <HashLink className="banner__link" smooth to="#comic"><button className="principalButton">¿Cómo me afecta?</button></HashLink>
                <div className="banner__buttons">
                    <a href="https://drive.google.com/file/d/1E98MIeIvUPRuz2jz_EODQy4TKd3Xahnw/view" target="_blank" rel="noreferrer"> <button>Amparo  <img src={logos.pdf} alt="pdf logo" /></button></a>
                    <a href="https://drive.google.com/file/d/1kw6bYhov5m9-YloW4B5_d8OiasdJzIwO/view" target="_blank" rel="noreferrer"> <button>Gacetilla  <img src={logos.pdf} alt="pdf logo" /></button></a>
                </div>
            </div>
            <section id="comic" className='container comic'>
                <Comic />
            </section>
        </>
    )
}


export default Amparo