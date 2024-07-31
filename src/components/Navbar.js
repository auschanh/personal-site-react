import React, { useState, useEffect, useRef } from "react";
import logoBlack from "../assets/logos/ac-logo-black.png";
import logoWhite from "../assets/logos/ac-logo-white.png";
import resume from "../assets/Resume2024Word.pdf";
// import { Button } from "@material-tailwind/react";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleBackdropClick = (e) => {
      if (e.target.classList.contains("navbar-backdrop")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("click", handleBackdropClick);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("click", handleBackdropClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed top-0 z-50 flex w-full flex-wrap items-center justify-between bg-white bg-opacity-95 py-2 shadow-lg focus:text-neutral-700 dark:bg-black lg:flex-wrap lg:justify-start lg:py-4">
        <div className="nav-div my-0 flex w-full flex-wrap items-center justify-between px-40 sm:container max-sm:max-w-full max-lg:px-0.5">
          <div className="flex">
            <a href="">
              <img
                src={logoBlack}
                className="ml-1 mr-3 h-12 transform transition-all hover:scale-110 dark:hidden"
              />
            </a>
            <a href="">
              <img
                src={logoWhite}
                className="ml-1 mr-3 hidden h-12 transform transition-all hover:scale-110 dark:block"
              />
            </a>
            <button
              type="button"
              className="mb-2 me-2 rounded-full border border-gray-300 bg-black px-3 py-2.5 text-sm font-medium text-white hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-zinc-300 dark:text-black dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              id="toggleDarkLightModeBtn"
              onClick={toggleDarkMode}
            >
              <i className="fa-regular fa-moon dark:hidden"></i>{" "}
              <span className="dark:hidden"> Dark</span>
              <i className="fa-solid fa-lightbulb !hidden dark:!inline-block"></i>{" "}
              <span className="hidden dark:inline-block"> Light</span>
            </button>
          </div>

          <div className="middle-nav items-center justify-between text-xl font-bold max-md:hidden">
            <ul className="list-style-none flex pl-0 sm:flex-row">
              <li className="mb-4 pr-10 lg:mb-0">
                <a
                  href="#about-jump"
                  className="text-black hover:text-gray-400 hover:underline hover:decoration-rose-600 hover:decoration-2 hover:underline-offset-[6px] dark:text-zinc-300 dark:hover:text-gray-600"
                >
                  About
                </a>
              </li>
              <li className="mb-4 pr-10 lg:mb-0">
                <a
                  href="#work-jump"
                  className="text-black hover:text-gray-400 hover:underline hover:decoration-rose-600 hover:decoration-2 hover:underline-offset-[6px] dark:text-zinc-300 dark:hover:text-gray-600"
                >
                  Work
                </a>
              </li>
              <li className="mb-4 pr-10 lg:mb-0">
                <a
                  href="#projects-jump"
                  className="text-black hover:text-gray-400 hover:underline hover:decoration-rose-600 hover:decoration-2 hover:underline-offset-[6px] dark:text-zinc-300 dark:hover:text-gray-600"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div className="items-center justify-between">
            <ul className="right-nav list-style-none flex pl-0 text-xl sm:flex-row">
              <div>
                <button
                  className="navbar-burger flex items-center p-3 font-extrabold text-black dark:text-white sm:hidden"
                  onClick={(e) => {
                    toggleMenu();
                    e.stopPropagation();
                  }}
                >
                  <svg
                    className="block h-4 w-4 fill-current text-black dark:text-white"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
                </button>
              </div>
              <div className="hidden px-0 sm:flex">
                <li className="mb-4 pr-2 lg:mb-0">
                  <a href={resume} target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-file transform text-black transition-all hover:scale-105 hover:text-gray-400 hover:underline hover:decoration-rose-600 hover:decoration-2 hover:underline-offset-[6px] dark:text-zinc-300 dark:hover:text-gray-600">
                      {" "}
                      <span className="transform font-sans text-sm text-black transition-all hover:scale-105 hover:text-gray-400 dark:text-zinc-300 dark:hover:text-gray-600">
                        RESUME
                      </span>
                    </i>
                  </a>
                </li>
                <li className="mb-4 pr-2 lg:mb-0">
                  <a
                    href="https://github.com/auschanh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-lg fa-github transform text-black transition-all hover:scale-125 hover:text-gray-400 hover:underline hover:decoration-rose-600 hover:decoration-2 hover:underline-offset-[6px] dark:text-zinc-300 dark:hover:text-gray-600"></i>
                  </a>
                </li>
                <li className="mb-4 pr-2 lg:mb-0">
                  <a
                    href="https://linkedin.com/in/auschanh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-lg fa-linkedin transform text-black transition-all hover:scale-125 hover:text-gray-400 hover:underline hover:decoration-rose-600 hover:decoration-2 hover:underline-offset-[6px] dark:text-zinc-300 dark:hover:text-gray-600"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/auschanh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-lg fa-square-instagram transform text-black transition-all hover:scale-125 hover:text-gray-400 hover:underline hover:decoration-rose-600 hover:decoration-2 hover:underline-offset-[6px] dark:text-zinc-300 dark:hover:text-gray-600"></i>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={`navbar-menu relative z-50 ${isMenuOpen ? "" : "hidden"}`}
        ref={menuRef}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25 dark:bg-white"></div>
        <nav className="fixed bottom-0 left-0 top-0 flex max-w-full flex-col overflow-y-auto border-r bg-white px-6 py-6 dark:bg-dark-navy dark:text-zinc-300">
          <div className="mb-8 flex items-center">
            <a
              className="mr-auto text-3xl font-bold leading-none dark:hidden"
              href="#"
            >
              <img
                src={logoBlack}
                className="h-12 transform transition-all hover:scale-110"
              />
            </a>
            <a
              className="mr-auto hidden transform text-3xl font-bold leading-none dark:block"
              href="#"
            >
              <img
                src={logoWhite}
                className="h-12 transform transition-all hover:scale-110"
              />
            </a>
            <button className="navbar-close" onClick={closeMenu}>
              <svg
                className="h-6 w-6 cursor-pointer text-black  hover:text-gray-500 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <ul className="text-black dark:text-zinc-300">
            <li className="mb-1">
              <a
                className="block rounded p-4 text-sm font-semibold hover:bg-blue-50 hover:text-gray-400 focus:decoration-rose-600"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block rounded p-4 text-sm font-semibold hover:bg-blue-50 hover:text-gray-400 focus:decoration-rose-600"
                href="#work"
              >
                Work
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block rounded p-4 text-sm font-semibold hover:bg-blue-50 hover:text-gray-400 focus:decoration-rose-600"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block rounded p-4 text-sm font-semibold hover:bg-blue-50 hover:text-gray-400 focus:decoration-rose-600"
                href="#contact"
              >
                Contact
              </a>
            </li>
            <br />
            <br />
            <li className="mb-1">
              <a
                className="block rounded p-4 text-sm font-semibold hover:bg-blue-50 hover:text-gray-400 hover:decoration-rose-600"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-file  hover:text-gray-400">
                  {" "}
                  <span className="font-sans text-sm text-black dark:text-zinc-300">
                    RESUME
                  </span>
                </i>
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block rounded p-4 text-sm font-semibold hover:bg-blue-50 hover:text-gray-400 hover:decoration-rose-600"
                href="https://github.com/auschanh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-lg fa-github text-black hover:text-gray-400 dark:text-zinc-300"></i>
                {"  "}
                Github
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block rounded p-4 text-sm font-semibold hover:bg-blue-50 hover:text-gray-400 hover:decoration-rose-600"
                href="https://linkedin.com/in/auschanh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-lg fa-linkedin  text-black hover:text-gray-400 dark:text-zinc-300"></i>
                {"  "}
                Linkedin
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block rounded p-4 text-sm font-semibold hover:bg-blue-50 hover:text-gray-400 hover:decoration-rose-600"
                href="https://instagram.com/auschanh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-lg fa-square-instagram text-black hover:text-gray-400 dark:text-zinc-300"></i>
                {"  "}
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
