import Carrousel from "./Carrousel/Carrousel";
import Paper from "./paper/Paper";
import Videos from "./videos/Videos";
import Organizaciones from "./Organizaciones/Organizaciones";
import Entrevistas from "./Entrevistas/Entrevistas";

const Home = () => {
  return (
    <>
      <Carrousel />
      <Paper />
      <Videos />
      <Entrevistas />
      <Organizaciones />
    </>
  );
};

export default Home;