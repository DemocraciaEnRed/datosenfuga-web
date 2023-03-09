import { Helmet } from 'react-helmet';
import { useLocation } from "react-router-dom";

const Seo = ({ data }) => {

    const location = useLocation();
    const urlBuilder = () => {
        if(location.hash){
            if(location.pathname.length > 1){ return (location.pathname + location.hash); }
            return ('/' + location.hash)
        }else{
            return location.pathname
        }
    }
    let seoTitle = data.title? `${data?.title} | Datos en Fuga` : 'Datos en Fuga | ¿Tu información está segura?'
    let seoDescription = data?.description || 'Queremos que el Estado asegure estándares de ciberseguridad y que  deje de perseguir hackers que realizan denuncias.'
    let seoKeywords = data?.keywords || 'Hacker, ciberseguridad, Observatorio de Derecho Informático Argentina, Fundación vía libre, ley de datos personales, ley penal argentina, Incidentes, ciberseguridad, filtración de datos'
    let seoUrl = urlBuilder()
    
    console.log(seoUrl)
    return (
        <Helmet>
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />
            <meta name="keywords" content={seoKeywords} />

            <meta property="og:url" content={`https://datosenfuga.org/#${seoUrl}`} />
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />

            <meta name="twitter:url" content={`https://datosenfuga.org/#${seoUrl}`} />
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={seoDescription} />
        </Helmet>
    )
}

export default Seo