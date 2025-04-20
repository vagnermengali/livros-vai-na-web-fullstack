import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import LivrosDoados from "./pages/LivrosDoados/LivrosDoados";
import QueroDoar from "./pages/QueroDoar/QueroDoar";
import Header from "./components/Header";
import "./styles/globalStyle.scss";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livros-doados" element={<LivrosDoados />} />
          <Route path="/quero-doar" element={<QueroDoar />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
