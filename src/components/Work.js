import React from "react";
import opsLogo from "../assets/logos/ops-logo.png";
import reactLogo from "../assets/icons/react-3.png";
import typescriptLogo from "../assets/icons/typescript-official-svgrepo-com.svg";
import sqlLogo from "../assets/icons/database.svg";
import sqlLogoBlack from "../assets/icons/database-black.svg";
import sharepointLogo from "../assets/icons/sharepoint.svg";
import powerautomateLogo from "../assets/icons/icons8-microsoft-power-automate-2020.svg";

const Work = () => {
  return (
    <div>
      <div id="work-jump"></div>
      <div className="work bg-slate-100 py-40 dark:bg-dark-navy">
        <div
          id="work"
          className="section sm:px-auto row-span-1 mt-10 justify-items-center px-10 sm:container"
        >
          <h1 className="text-3xl font-bold underline decoration-rose-600 decoration-4 underline-offset-8 dark:text-white">
            Work Experiences
          </h1>
          <br />
          <br />
          <div className="section-desc">
            <div>
              <div
                tabindex="0"
                className="collapse collapse-arrow transform border-2 border-indigo-800 transition-all !duration-300 hover:scale-105 hover:duration-150 dark:border-teal-300 dark:bg-navy"
              >
                <input type="checkbox" className="dark:text-white" />
                <div className="work-header collapse-title flex dark:text-white">
                  <div>
                    <img
                      src={opsLogo}
                      alt="Ontario Public Service Logo"
                      className="w-16 md:w-10"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-extrabold text-rose-600">
                      May 2021 - Aug 2022 (1yrs 4mos)
                    </p>
                    <p className="text-xl font-extrabold dark:text-zinc-300">
                      Ontario Ministry of Children and Community Services |
                      CYSSC
                    </p>
                    <p className="text-base font-extrabold text-indigo-600 dark:text-indigo-400">
                      PROGRAMMER
                    </p>
                  </div>
                </div>
                <div className="job1-desc collapse-content">
                  <p className="mt-3 font-extrabold text-teal-600 dark:text-teal-300">
                    Responsibilities
                  </p>
                  <ul className="job-desc ml-3 list-disc text-base dark:text-zinc-300">
                    <li className="my-2">
                      Created and maintained{" "}
                      <strong className="dark:text-white">SharePoint</strong>{" "}
                      sites based on client tickets and requirements
                    </li>
                    <li className="my-2">
                      Automated tasks with{" "}
                      <strong className="dark:text-white">
                        Power Automate
                      </strong>{" "}
                      to track files, populate lists/tables, email and notify
                      clients
                    </li>
                    <li className="my-2">
                      Utilized{" "}
                      <strong className="dark:text-white">ReactJS</strong> and{" "}
                      <strong className="dark:text-white">
                        SharePoint Framework (SPFx)
                      </strong>{" "}
                      to uniquely customize and develop client{" "}
                      <strong className="dark:text-white">
                        SharePoint site
                      </strong>
                    </li>
                  </ul>
                  <br />
                  <div className="highlights mb-3">
                    <p className="font-xl mt-3 font-extrabold text-teal-600 dark:text-teal-300">
                      Highlights
                    </p>
                    <p className="my-2 text-base dark:text-zinc-300">
                      ▶{" "}
                      <strong className="dark:text-white">
                        Selected as a speaker for CYSSC Learning and Engagement
                        Conference
                      </strong>{" "}
                      among multiple co-op students - spoke about a solo project
                      on building a Sharepoint site and workflow for client,
                      dramatically reducing time to populate, sort and filter
                      data from applicants.
                    </p>
                    <p className="text-base dark:text-zinc-300">
                      ▶ Developed a workflow that{" "}
                      <strong className="dark:text-white">
                        automated ticket requests
                      </strong>{" "}
                      from clients onto team task list, removing manual
                      insertion of data and significantly improving requests to
                      assigned ticket times. The workflow involved automated
                      emailing, assigning priority and inserting into ticket
                      list.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="skills-area"
              className="flex flex-col items-center text-center"
            >
              <div className="skills-icons mt-8 flex max-w-[100vw] justify-between">
                <div
                  data-aos="fade-zoom-in"
                  data-aos-duration="1000"
                  data-aos-offset="250"
                  className="group relative mx-0.5 flex flex-col items-center sm:mx-6"
                >
                  <img
                    src={reactLogo}
                    className="aspect-square h-12 transform overflow-visible object-cover transition-all hover:scale-125 sm:h-16 lg:h-20"
                  />
                  <div className="mt-6 overflow-visible text-center text-xs font-bold text-teal-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-teal-300 sm:text-xl">
                    React
                  </div>
                </div>
                <div
                  data-aos="fade-zoom-in"
                  data-aos-duration="1000"
                  data-aos-offset="250"
                  data-aos-delay="100"
                  className="group relative mx-0.5 flex flex-col items-center sm:mx-6"
                >
                  <img
                    src={typescriptLogo}
                    className="aspect-square h-12 transform overflow-visible object-cover transition-all hover:scale-125 sm:h-16 lg:h-20"
                  />
                  <div className="mt-6 overflow-visible text-center text-xs font-bold text-teal-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-teal-300 sm:text-xl">
                    TypeScript
                  </div>
                </div>
                <div
                  data-aos="fade-zoom-in"
                  data-aos-duration="1000"
                  data-aos-offset="250"
                  data-aos-delay="200"
                  className="group relative mx-0.5 flex flex-col items-center sm:mx-6"
                >
                  <img
                    src={sqlLogo}
                    className="hidden aspect-square h-12 transform overflow-visible object-cover transition-all hover:scale-125 dark:flex sm:h-16 lg:h-20"
                  />
                  <img
                    src={sqlLogoBlack}
                    className="h-12 transform transition-all hover:scale-125 dark:hidden sm:h-16 lg:h-20"
                  />
                  <div className="mt-6 overflow-visible text-center text-xs font-bold text-teal-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-teal-300 sm:text-xl">
                    SQL
                  </div>
                </div>
                <div
                  data-aos="fade-zoom-in"
                  data-aos-duration="1000"
                  data-aos-offset="250"
                  data-aos-delay="300"
                  className="group relative mx-0.5 flex flex-col items-center sm:mx-6"
                >
                  <img
                    src={sharepointLogo}
                    className="aspect-square h-12 transform overflow-visible object-cover transition-all hover:scale-125 sm:h-16 lg:h-20"
                  />
                  <div className="mt-6 overflow-visible text-center text-xs font-bold text-teal-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-teal-300 sm:text-xl">
                    SharePoint
                  </div>
                </div>
                <div
                  data-aos="fade-zoom-in"
                  data-aos-duration="1000"
                  data-aos-offset="250"
                  data-aos-delay="400"
                  className="group relative mx-0.5 flex flex-col items-center sm:mx-6"
                >
                  <img
                    src={powerautomateLogo}
                    className="aspect-square h-12 transform overflow-visible object-cover transition-all hover:scale-125 sm:h-16 lg:h-20"
                  />
                  <div className="mt-6 overflow-visible text-center text-xs font-bold text-teal-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-teal-300 sm:text-xl">
                    <p>Power</p>
                    <p>Automate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div>
            <div
              tabindex="0"
              className="collapse collapse-arrow mt-4 transform border-2 border-indigo-800 transition-all !duration-300 hover:scale-105 hover:duration-150 dark:border-teal-300 dark:bg-navy sm:mt-14"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-bold dark:text-white">
                Other Experiences (Retail)
              </div>
              <div className="collapse-content">
                <div className="starbucks">
                  <p className="text-sm font-extrabold text-rose-600">
                    Oct 2023-Present
                  </p>
                  <p className="text-xl font-extrabold dark:text-zinc-300">
                    Starbucks (Retail)
                  </p>
                  <p className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                    BARISTA
                  </p>
                  <p className="dark:text-zinc-300">
                    Tasks include: daily cleaning of tools, carefully crafting
                    customized drinks, and restocking inventory.
                  </p>
                </div>
                <br />
                <br />
                <div className="longos">
                  <p className="text-sm font-extrabold text-rose-600">
                    Jul 2016 - April 2021 (4yrs 8mos)
                  </p>
                  <p className="text-xl font-extrabold dark:text-zinc-300">
                    Longos Corporation (Retail)
                  </p>
                  <p className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                    DAIRY CLERK
                  </p>
                  <p className="job-desc text-base dark:text-zinc-300">
                    Daily tasks included: solo closing the department on closing
                    days, stocking inventory and assisting customers. A lot of
                    my interpersonal skills were developed here, such as{" "}
                    <span className="font-bold dark:text-white">teamwork</span>,{" "}
                    <span className="font-bold dark:text-white">
                      initiative
                    </span>
                    , and
                    <span className="font-bold dark:text-white">
                      {" "}
                      customer service
                    </span>
                    .
                  </p>
                </div>
                <br />
                <br />
                <div className="shoppers">
                  <p className="text-sm font-extrabold text-rose-600">
                    Nov 2014 - Feb 2015 (4mos)
                  </p>
                  <p className="text-xl font-extrabold dark:text-zinc-300">
                    Shoppers Drug Mart (Retail)
                  </p>
                  <p className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                    ASSISTANT PHARMACIST/CASHIER
                  </p>
                  <p className="dark:text-zinc-300">
                    Stocked inventory of medicines and drugs, filled customer
                    prescriptions with precise instructions (weighing, removing,
                    adding etc) and organized files.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
