import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./landing/Home";
import Casos from "./Casos/Casos";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casos" element={<Casos />} />
        <Route path="/casos/:id" element={<Casos />} />
        <Route path="/muestra" />
        <Route path="*" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;