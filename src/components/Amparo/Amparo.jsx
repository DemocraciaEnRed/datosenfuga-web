import React from 'react'
import Seo from '../SEO/Seo'
import { logos } from '../../constants'
import './Amparo.scss'
import Comic from './Comic/Comic'

const Amparo = () => {

    const seoData = {
        title: 'Amparo',
        description: '',
        keywords: ''
    };

    return (
        <>
            <Seo data={seoData} />
            <div className="banner">
                <h1>PRESENTAMOS UN AMPARO</h1>
                <p>DESCRIPCIÓN A DEFINIR</p>
                <div className="banner__buttons">
                  <a href="https://drive.google.com/file/d/1E98MIeIvUPRuz2jz_EODQy4TKd3Xahnw/view" target="_blank" rel="noreferrer"> <button>Amparo  <img src={logos.pdf} alt="pdf logo" /></button></a>
                  <a href="https://drive.google.com/file/d/1kw6bYhov5m9-YloW4B5_d8OiasdJzIwO/view" target="_blank" rel="noreferrer"> <button>Gacetilla  <img src={logos.pdf} alt="pdf logo" /></button></a>
                </div>
            </div>
            <section className='container comic'>
                <Comic />
            </section>
        </>
    )
}


export default Amparo