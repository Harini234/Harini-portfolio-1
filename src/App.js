// src/App.js
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import TEDx_Experience from "./components/TEDx_Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarryBackground from "./components/StarryBackground";
import "./App.css";

function App() {
  return (
    <div className="App">
      <StarryBackground />
      <Header />
      <About />
      <Skills />
      <Projects />
      <TEDx_Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
