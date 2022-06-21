import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./landing/Home";
import Casos from "./Casos/Casos";
import Muestra from "./Muestra/Muestra";
import NotFound from "./landing/NotFound/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/casos" element={<Casos />} />
        <Route path="/casos/:id" element={<Casos />} />
        <Route path="/muestra" element={<Muestra />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;