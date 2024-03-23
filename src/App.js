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
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
        {/* <?php include './sections/about.html';?>

        <?php include './sections/work.html'?>

        <?php include './sections/education.html'?>

        <?php include './sections/projects.html'?>

        <?php include './sections/contact.html'?>

        <?php include './sections/footer.html'?>

        <?php include './sections/modalProjects.html'?>

        <?php include './sections/modalPhotos.html'?> */}
      </div>
    </div>
  );
}

export default App;
