import React from "react";
import acLogo from "../assets/logos/ac-logo-white.png";

const SOCIAL_LINKS = [
  { href: "https://github.com/auschanh",      icon: "fa-brands fa-github",           label: "GitHub" },
  { href: "https://linkedin.com/in/auschanh", icon: "fa-brands fa-linkedin",         label: "LinkedIn" },
  { href: "https://instagram.com/auschanh",   icon: "fa-brands fa-square-instagram", label: "Instagram" },
];

const Footer = () => (
  <footer className="bg-black px-6 lg:px-16 py-6">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

      <div className="flex items-center gap-4">
        <a href="/" aria-label="Home">
          <img src={acLogo} className="h-10 transition-transform hover:scale-110" alt="Austin Chanhsavang" />
        </a>
        <div>
          <p className="text-white font-semibold">Thanks for visiting!</p>
          <p className="text-zinc-500 text-xs mt-0.5">Austin Chanhsavang © 2026 — All rights reserved</p>
        </div>
      </div>

      <nav className="flex items-center gap-5" aria-label="Social links">
        {SOCIAL_LINKS.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-zinc-400 text-xl transition-colors hover:text-teal-green"
          >
            <i className={icon} />
          </a>
        ))}
      </nav>

    </div>
  </footer>
);

export default Footer;
