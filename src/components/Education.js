import React from "react";
import tmuLogo from "../assets/logos/TMU-rgb.png";

const Education = () => {
  return (
    <div id="education" className="py-40 dark:bg-navy">
      <div
        className="education section row-span-1 sm:container max-sm:px-10"
        data-aos="fade-zoom-in"
        data-aos-duration="1000"
      >
        <h1 className="dark:text-white">Education</h1>
        <br />
        <br />
        <div className="section-desc flex max-sm:flex-col">
          <div className="tmu-logo">
            <img src={tmuLogo} alt="TMU logo" className="sm:h-20" />
          </div>
          <div className="edu-desc ml-3 max-sm:text-2xl">
            <p className="font-extrabold text-rose-600 max-sm:text-lg sm:text-sm">
              Sept 2018 - Apr 2023
            </p>
            <span className="font-bold dark:text-zinc-300">
              Toronto Metropolitan University{" "}
            </span>
            <span id="small-text" className="dark:text-neutral-400">
              (formerly Ryerson University)
            </span>
            <p className="dark:text-neutral-400">
              Bachelor of Computer Science Honours (Co-op)
            </p>
            <p>
              <span className="font-bold dark:text-zinc-300">GPA:</span>{" "}
              <span className="font-bold text-teal-600 dark:text-teal-500">
                3.48
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
