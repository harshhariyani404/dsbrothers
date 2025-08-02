import React from "react";
import Nevbar from "./sections/Nevbar";
import Footer from "./sections/footer";
import HeroSection from "./sections/herosection";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./content/Home";
import About from "./content/About";
import Services from "./content/Services";
import Contact from "./content/Contact";

const App = () => {
  return (
    <>
      <Nevbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
