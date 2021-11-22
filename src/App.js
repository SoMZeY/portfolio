import React from "react";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <AboutPage></AboutPage>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
