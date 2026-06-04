import React, { useState, useEffect, useRef } from "react";
import logoBlack from "../assets/logos/ac-logo-black.png";
import logoWhite from "../assets/logos/ac-logo-white.png";
import resume from "../assets/docs/Austin_Chanhsavang_Resume_2026.pdf";
import { Link, useNavigate } from "react-router-dom";
// LightboxGallery removed from Navbar — photos now live at /photos

const NAV_LINKS = [
  { label: "About",    path: "/#about-jump" },
  { label: "Work",     path: "/#work-jump" },
  { label: "Projects", path: "/#projects-jump" },
  { label: "Contact",  path: "/#contact-jump" },
];

const SOCIAL_LINKS = [
  { href: "https://github.com/auschanh",    icon: "fa-brands fa-github",           label: "GitHub" },
  { href: "https://linkedin.com/in/auschanh", icon: "fa-brands fa-linkedin",        label: "LinkedIn" },
  { href: "https://instagram.com/auschanh", icon: "fa-brands fa-square-instagram", label: "Instagram" },
];

const linkClass =
  "text-base font-medium text-black dark:text-white hover:text-teal-600 dark:hover:text-teal-green transition-colors";

const iconClass =
  "text-black dark:text-white hover:text-teal-600 dark:hover:text-teal-green transition-colors";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  const handleNavClick = (path) => {
    setIsMenuOpen(false);
    navigate(path);
    setTimeout(() => {
      const id = path.split("#")[1];
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <>
      {/* ── MAIN NAVBAR ── */}
      <nav className="fixed top-0 z-50 w-full bg-white/95 dark:bg-black shadow-sm backdrop-blur-sm">
        <div className="flex items-center justify-between w-full px-6 lg:px-16 py-3">

          {/* LEFT: Logo + nav links */}
          <div className="flex items-center gap-6 lg:gap-8">
            <a href="/" aria-label="Home">
              <img src={logoBlack} className="h-10 dark:hidden hover:scale-110" alt="Austin Chanhsavang" />
              <img src={logoWhite} className="h-10 hidden dark:block hover:scale-110" alt="Austin Chanhsavang" />
            </a>
            <ul className="hidden md:flex items-center gap-5 lg:gap-7">
              {NAV_LINKS.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    onClick={() => handleNavClick(path)}
                    className={linkClass}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/photos" className={linkClass}>
                  My Photos
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-4 lg:gap-5">

            {/* Resume + socials — desktop only */}
            <div className="hidden md:flex items-center gap-4 lg:gap-5">
              <a href={resume} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Resume
              </a>
              {SOCIAL_LINKS.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <i className={`${icon} text-lg ${iconClass}`} />
                </a>
              ))}
            </div>

            {/* Dark mode toggle — always visible */}
            <button onClick={toggleDarkMode} aria-label="Toggle dark mode" className={`text-lg ${iconClass}`}>
              <i className="fa-regular fa-moon dark:hidden" />
              <i className="fa-solid fa-sun hidden dark:inline text-yellow-400" />
            </button>

            {/* Hamburger — mobile only */}
            <button className={`md:hidden ${iconClass}`} onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>

          </div>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden" ref={menuRef}>
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer panel */}
          <div className="absolute right-0 top-0 h-full w-72 bg-white dark:bg-dark-navy flex flex-col shadow-2xl">

            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
              <a href="/" aria-label="Home">
                <img src={logoBlack} className="h-9 dark:hidden" alt="Austin Chanhsavang" />
                <img src={logoWhite} className="h-9 hidden dark:block" alt="Austin Chanhsavang" />
              </a>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className={iconClass}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Drawer nav links */}
            <nav className="flex-1 overflow-y-auto px-4 py-6">
              <ul className="space-y-1">
                {NAV_LINKS.map(({ label, path }) => (
                  <li key={label}>
                    <Link
                      to={path}
                      onClick={() => handleNavClick(path)}
                      className="block rounded-lg px-4 py-3 text-sm font-medium text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/photos"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    My Photos
                  </Link>
                </li>
                <li>
                  <a
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>

            {/* Drawer footer: social icons */}
            <div className="px-6 py-5 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-5">
              {SOCIAL_LINKS.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <i className={`${icon} text-xl ${iconClass}`} />
                </a>
              ))}
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
