import React from "react";
import Nav from "./Navbar/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

const App = () => {
 
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </div>
  );
};

export default App;
