import Seo from "../SEO/Seo";
import Carrousel from "./Carrousel/Carrousel";
import Paper from "./paper/Paper";
import Videos from "./videos/Videos";
import Organizaciones from "./Organizaciones/Organizaciones";
import Entrevistas from "./Entrevistas/Entrevistas";
import useScrollAfterMount from "../hooks/useScrollAfterMount";

const seoData = {
  keywords: "Hacker, ciberseguridad, Observatorio de Derecho Informático Argentina, Fundación vía libre, ley de datos personales, ley penal argentina, Javier Smaldone, Incidentes, ciberseguridad, filtración de datos"
}



const Home = () => {

  useScrollAfterMount()

  return (
    <>
      <Seo data={seoData} />
      <Carrousel />
      <Paper />
      <Videos />
      <Entrevistas />
      <Organizaciones />
    </>
  );
};

export default Home;