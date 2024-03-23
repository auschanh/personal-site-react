import React from "react";
import acLogo from "../assets/logos/ac-logo-white.png";

const Footer = () => {
  return (
    <footer className="footer-center block justify-between bg-black p-4 py-2 text-zinc-300 sm:flex sm:py-6">
      <div id="leftDiv"></div>
      <div className="flex">
        <div className="mx-2 sm:mx-6">
          <a href="">
            <img
              src={acLogo}
              className="h-12 transform transition-all hover:scale-110"
            />
          </a>
        </div>
        <div className="grid-flow-col items-center">
          <p className="text-2xl sm:text-3xl">Thanks for visiting!</p>
          <p className="mt-2 text-xs sm:text-sm">
            Austin Chanhsavang © 2024 - All rights reserved
          </p>
        </div>
      </div>
      <nav className="grid-flow-col max-sm:pt-3 md:mr-4 md:place-self-center md:justify-self-end">
        <a
          href="https://github.com/auschanh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icons fa-brands fa-github mx-1 transform transition-all hover:scale-125 hover:text-gray-400 hover:underline hover:decoration-rose-600 hover:decoration-[3px] hover:underline-offset-[6px] dark:hover:text-gray-600"></i>
        </a>
        <a
          href="https://linkedin.com/in/auschanh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icons fa-brands fa-linkedin mx-1 transform transition-all hover:scale-125 hover:text-gray-400 hover:underline hover:decoration-rose-600 hover:decoration-[3px] hover:underline-offset-[6px] dark:hover:text-gray-600"></i>
        </a>
        <a
          href="https://instagram.com/auschanh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icons fa-brands fa-square-instagram mx-1 transform transition-all hover:scale-125 hover:text-gray-400 hover:underline hover:decoration-rose-600 hover:decoration-[3px] hover:underline-offset-[6px] dark:hover:text-gray-600"></i>
        </a>
      </nav>
    </footer>
  );
};
export default Footer;
