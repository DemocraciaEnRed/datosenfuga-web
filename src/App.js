import "./App.scss";
import { useState } from "react";
import Loader from "./components/loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Carrousel from "./components/Carrousel/Carrousel";
import Paper from "./landing/paper/Paper";
import Videos from "./landing/videos/Videos";
import Footer from "./components/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  if (loading) {
    return (
      <div className="App bg-dark">
        <Loader />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar />
        <Carrousel />
        <Paper />
        <Videos />
        <Footer />
      </div>
    );
  }

}

export default App;
