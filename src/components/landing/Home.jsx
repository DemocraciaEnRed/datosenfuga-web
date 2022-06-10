import Carrousel from "./Carrousel/Carrousel";
import Paper from "./paper/Paper";
import Videos from "./videos/Videos";
import Organizaciones from "./Organizaciones/Organizaciones";

const Home = () => {
  return (
    <>
      <Carrousel />
      <Paper />
      <Videos />
      <Organizaciones />
    </>
  );
};

export default Home;