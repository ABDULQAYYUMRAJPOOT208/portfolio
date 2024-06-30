import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
// import SkillLine from "./components/SkillLine";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="all-app">
        <Navbar />
        <Hero />
        <Loader />
        <Skills />
        <Projects />
        <h1 className="text-2xl  font-bold underline">Hello world!</h1>
        <Footer />
      </div>
    </>
  );
}

export default App;
