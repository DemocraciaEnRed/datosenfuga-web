import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./landing/Home";
import Casos from "./Casos/Casos";
import Muestra from "./Muestra/Muestra";
import Actividades from "./Actividades/Actividades";
import NotFound from "./landing/NotFound/NotFound";
import Amparo from "./Amparo/Amparo";

const AppRouter = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casos" element={<Casos />} />
        <Route path="/casos/:id" element={<Casos />} />
        <Route path="/muestra" element={<Muestra />} />
        <Route path="/encuentros" element={<Actividades />} />
        <Route path="/encuentros/:id" element={<Actividades />} />
        <Route path="/amparo" element={<Amparo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;