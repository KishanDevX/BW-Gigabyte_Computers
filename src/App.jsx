import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Products from "./sections/Products";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Products />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
