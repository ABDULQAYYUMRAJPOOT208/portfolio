import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
// import SkillLine from "./components/SkillLine";
import Skills from "./components/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Loader />
      <Skills />
      <h1 className="text-2xl  font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
