import React from "react";
import tmuLogo from "../assets/logos/TMU-rgb.png";

const Education = () => {
  return (
    <div id="education" className="bg-slate-200 py-40 dark:bg-dark-navy">
      <div
        className="education section sm:px-auto row-span-1  text-black sm:container"
      >
        <h1 className="text-3xl font-bold font-mono underline decoration-rose-600 decoration-4 underline-offset-8 dark:text-white">
          / Education
        </h1>
        <br />
        <br />
        <div data-aos="fade-zoom-in"
        data-aos-duration="2000"
        data-aos-offset="250">
            <div className="section-desc flex flex-col sm:flex-row">
          <div className="tmu-logo">
            <img src={tmuLogo} alt="TMU logo" className="sm:h-20" />
          </div>
          <div className="edu-desc ml-3 text-2xl">
            <p className="text-xl font-extrabold text-rose-600 sm:text-lg">
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
        <div className="text-lg mt-4 font-mono text-teal-600 dark:text-teal-300">
          <span className="font-extrabold">COURSES: </span> 
          <span className="dark:text-zinc-400 text-base max-lg:text-xs laptop:text-lg text-black">Data Structures, Algorithms, Operating Systems, Web Systems, Web Applications, Data Science, Information and Web Retrieval </span>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Education;
