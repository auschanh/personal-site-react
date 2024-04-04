import React, { useEffect, useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode !== null ? JSON.parse(savedMode) : true; // on first render, there will be no savedMode in local storage, set darkMode to True
  });

  const toggleDarkMode = () => {
    const darkModeFlag = !darkMode;
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkModeFlag));
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className={`${darkMode && "dark"}`}>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <About />
        <Work />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
