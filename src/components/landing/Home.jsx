import Carrousel from "./Carrousel/Carrousel";
import Paper from "./paper/Paper";
import Videos from "./videos/Videos";
import Muestra from "./Muestra/Muestra";
import Organizaciones from "./Organizaciones/Organizaciones";

const Home = () => {
  return (
    <>
      <Carrousel />
      <Paper />
      <Muestra />
      <Videos />
      <Organizaciones />
    </>
  );
};

export default Home;