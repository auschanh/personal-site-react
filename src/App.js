import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CallSignsDetails from "./pages/CallSignsDetails";
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
    AOS.init({
      once: true
  });
  }, []);

  function ScrollToTop() {
    const { pathname, hash, key } = useLocation();
  
    useEffect(() => {
      if (hash === "") {
        window.scrollTo(0, 0);
      } else {
        setTimeout(() => {
          const id = hash.replace("#", "");
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 0);
      }
    }, [pathname, hash, key]);
  
    return null;
  }

  return (
    <Router>
        <div id="home">
          <ScrollToTop/>
          <div className={`${darkMode && "dark"}`}>
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <main>
              <Routes>

                <Route path="/" element={
                  <>
                    <About />
                    <Work />
                    <Certifications />
                    <Education />
                    <Projects />
                    <Contact />
                  </>
                } />

                <Route path="/callsigns" element={<CallSignsDetails/>} />

              </Routes>
              
            </main>
            <Footer />
          </div>
        </div>
    </Router>
    
  );
}

export default App;
