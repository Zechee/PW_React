import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import PastWork from "./components/PastWork";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />

      <Skills />
      <PastWork></PastWork>
      <Projects />
      
     
      <Education/>
      <Contact />
    </main>
  );
}