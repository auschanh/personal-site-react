import React from "react";
import opsLogo from "../assets/logos/ops-logo.png";
import reactLogo from "../assets/icons/react-3.png";
import typescriptLogo from "../assets/icons/typescript-official-svgrepo-com.svg";
import sqlLogo from "../assets/icons/database.svg";
import sqlLogoBlack from "../assets/icons/database-black.svg";
import sharepointLogo from "../assets/icons/sharepoint.svg";
import powerautomateLogo from "../assets/icons/icons8-microsoft-power-automate-2020.svg";
import kafkaWhite from "../assets/icons/Apache Kafka.png";
import kafkaBlack from "../assets/icons/Apache Kafka Black.png";
import javaLogo from "../assets/icons/java.svg";
import dockerLogo from "../assets/icons/docker-icon.svg";
import confluentLogo from "../assets/icons/confluent-logo.png";
import confluentTealLogo from "../assets/icons/confluent-teal.png";
import psyncopateLogo from "../assets/icons/Psyncopate.webp";

const Work = () => {
  return (
    <div>
      <div id="work-jump"></div>
      <div className="work bg-slate-200 py-40 dark:bg-dark-navy">
        <div
          id="work"
          className="section sm:px-auto row-span-1 mt-10 sm:container"
        >
          <h1 className="text-3xl font-bold font-mono text-black underline decoration-rose-600 decoration-4 underline-offset-8 dark:text-white">
           / Work Experiences
          </h1>
          <br />
          <br />
          {/* Experience 1 */}

          <div className="section-desc">
            <div>
              <div
                tabindex="0"
                className="collapse collapse-arrow transform text-black transition-all !duration-300 hover:scale-105 hover:duration-150 dark:bg-navy bg-slate-100"
              >
                <input type="checkbox" className="dark:text-white" />
                <div className="work-header collapse-title flex dark:text-white">
                  <div>
                    <img
                      src={psyncopateLogo}
                      alt="Psyncopate Logo"
                      className="w-16 md:w-10"
                    />
                  </div>
                  <div className="ml-3 flex justify-between w-full">
                    <div>
                      <p className="text-xl font-extrabold text-teal-600 dark:text-teal-300">
                        Psyncopate
                      </p>
                      <p className="text-base font-extrabold text-indigo-600 dark:text-indigo-400">
                        SUPPORT ENGINEER
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-bold font-mono text-black dark:text-zinc-400 max-sm:ml-4">
                        Jan 2025 - Present
                      </p>
                    </div>
                  
                  </div>
                </div>

                <div className="job1-desc collapse-content">
                  {/* <p className="text-base dark:text-zinc-400">TBD...</p>  */}
                  <p className="mt-3 text-lg font-extrabold dark:text-white text-black">
                    Responsibilities
                  </p>
                  <ul className="job-desc ml-3 list-disc text-base laptop:text-lg dark:text-zinc-400">
                    <li className="my-2">
                      Resolved P1/P2 incidents for a low-latency, multi-AZ on-premises{" "}
                      <strong className="text-teal-800 dark:text-teal-500">Kafka</strong>{" "}
                      cluster, conducting root cause analysis (RCA) for broker performance,{" "} 
                      <strong className="text-teal-800 dark:text-teal-500">Zookeeper</strong>{" "}
                      coordination, and security misconfigurations to ensure 99.9% SLA
                    </li>
                    <li className="my-2">
                      Streamlined troubleshooting and knowledge-sharing by documenting{" "}
                      <strong className="text-teal-800 dark:text-teal-500">
                        Kafka Broker/Zookeeper
                      </strong>{" "}
                      configurations, and security protocols for multi-AZ deployments
                    </li>
                    
                  </ul>
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
                    src={kafkaWhite}
                    className="hidden aspect-square h-12 transform overflow-visible object-cover transition-all hover:scale-125 dark:flex sm:h-16 lg:h-20"
                  />
                  <img
                    src={kafkaBlack}
                    className="h-12 transform transition-all hover:scale-125 dark:hidden sm:h-16 lg:h-20"
                  />
                  <div className="mt-6 overflow-visible text-center text-xs font-bold text-teal-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-teal-300 sm:text-xl">
                    <p>Apache</p>
                    <p>Kafka</p>
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
                    src={confluentTealLogo}
                    className="aspect-square h-12 transform overflow-visible object-cover transition-all hover:scale-125 sm:h-16 lg:h-24"
                  />
                  <div className="mt-6 overflow-visible text-center text-xs font-bold text-teal-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-teal-300 sm:text-xl">
                    Confluent
                  </div>
                </div>
                <div
                  data-aos="fade-zoom-in"
                  data-aos-duration="1000"
                  data-aos-offset="250"
                  data-aos-delay="200"
                  className="group relative mx-2 flex flex-col items-center sm:ml-6 sm:mr-10"
                >
                  <img
                    src={javaLogo}
                    className="aspect-square h-12 transform overflow-visible object-cover transition-all hover:scale-125 sm:h-16 lg:h-20"
                  />
                  <div className="mt-8 overflow-visible text-center text-xs font-bold text-teal-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-teal-300 sm:text-xl">
                    Java
                  </div>
                </div>
                <div
                  data-aos="fade-zoom-in"
                  data-aos-duration="1000"
                  data-aos-offset="250"
                  data-aos-delay="300"
                  className="group relative mx-4 flex flex-col items-center sm:mx-6"
                >
                  <img
                    src={dockerLogo}
                    className="aspect-square h-12 transform overflow-visible object-cover transition-all hover:scale-125 sm:h-16 lg:h-20"
                  />
                  <div className="mt-6 overflow-visible text-center text-xs font-bold text-teal-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-teal-300 sm:text-xl">
                    Docker
                  </div>
                </div>
                <div
                  data-aos="fade-zoom-in"
                  data-aos-duration="1000"
                  data-aos-offset="250"
                  data-aos-delay="400"
                  className="group relative mx-4 flex flex-col items-center sm:mx-6"
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
                    KSQL
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <br/>
          <br/>

          {/* Experience 2 */}

          <div className="section-desc">
            <div>
              <div
                tabindex="0"
                className="collapse collapse-arrow transform text-black transition-all !duration-300 hover:scale-105 hover:duration-150 dark:bg-navy bg-slate-100"
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
                  <div className="ml-3 flex justify-between w-full">
                    <div>
                      <p className="text-xl font-extrabold text-teal-600 dark:text-teal-300">
                        Ontario Ministry of Children and Community Services
                      </p>
                      <p className="text-base font-extrabold text-indigo-600 dark:text-indigo-400">
                        SOFTWARE DEVELOPER
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-bold font-mono text-black dark:text-zinc-400">
                        May 2021 - Aug 2022 (1yrs 4mos)
                      </p>
                    </div>
                  
                  </div>
                </div>

                <div className="job1-desc collapse-content">
                  <p className="mt-3 text-lg font-extrabold dark:text-white text-black">
                    Responsibilities
                  </p>
                  <ul className="job-desc ml-3 list-disc text-base laptop:text-lg dark:text-zinc-400">
                    <li className="my-2">
                      Created and maintained{" "}
                      <strong className="text-teal-800 dark:text-teal-500">SharePoint</strong>{" "}
                      sites based on client tickets and requirements
                    </li>
                    <li className="my-2">
                      Automated tasks with{" "}
                      <strong className="text-teal-800 dark:text-teal-500">
                        Power Automate
                      </strong>{" "}
                      to track files, populate lists/tables, email and notify
                      clients
                    </li>
                    <li className="my-2">
                      Utilized{" "}
                      <strong className="text-teal-800 dark:text-teal-500">ReactJS</strong> and{" "}
                      <strong className="text-teal-800 dark:text-teal-500">
                        SharePoint Framework (SPFx)
                      </strong>{" "}
                      to uniquely customize and develop client{" "}
                      <strong className="text-teal-800 dark:text-teal-500">
                        SharePoint site
                      </strong>
                    </li>
                  </ul>
                  <br />
                  <div className="highlights mb-3">
                    <p className="text-lg mt-3 font-extrabold dark:text-white text-black">
                      Highlights
                    </p>
                    <p className="my-2 text-base laptop:text-lg dark:text-zinc-400">
                      ▶{" "}
                      <strong className="text-teal-800 dark:text-teal-500">
                        Selected as a speaker for CYSSC Learning and Engagement
                        Conference
                      </strong>{" "}
                      among multiple co-op students - spoke to over 300+ employees about a solo project
                      on building a Sharepoint site and workflow for client,
                      dramatically reducing time to populate, sort and filter
                      data from applicants.
                    </p>
                    <p className="text-base laptop:text-lg dark:text-zinc-400">
                      ▶ Developed a workflow that{" "}
                      <strong className="text-teal-800 dark:text-teal-500">
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

          {/* OTHER EXPERIENCES */}
          <div>
            <div
              tabindex="0"
              className="collapse collapse-arrow mt-4 transform  transition-all !duration-300 hover:scale-105 hover:duration-150 bg-slate-100 dark:bg-navy sm:mt-14"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-bold text-black dark:text-white">
                Other Experiences (Retail)
              </div>

              <div className="collapse-content text-black">
                <div className="starbucks">
                  <div className="flex justify-between w-full">
                    <div>
                      <p className="text-xl font-extrabold text-teal-600 dark:text-teal-300">
                        Starbucks (Retail)
                      </p>
                      <p className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                        BARISTA
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-extrabold font-mono text-black dark:text-zinc-400">
                        Oct 2023 - Jan 2025 (1yr 3mos)
                      </p>
                    </div>
                  </div>
                  
                  <p className="dark:text-zinc-400 laptop:text-lg">
                    Provided exceptional customer service through customer connections, and by crafting quality hand crafted drinks. 
                    <strong className="text-teal-600 dark:text-teal-300"> Partner of the Quarter (POQ) Winner Q4.</strong>
                  </p>
                </div>
                <br />
                <br />

                <div className="longos">
                  <div className="flex justify-between w-100">
                    <div>
                      <p className="text-xl font-extrabold text-teal-600 dark:text-teal-300">
                        Longos Corporation (Retail)
                      </p>
                      <p className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                        DAIRY CLERK
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-mono font-extrabold text-black dark:text-zinc-400">
                        Jul 2016 - April 2021 (4yrs 8mos)
                      </p>
                    </div>
                   
                    
                  </div>
                
                  <p className="job-desc text-base dark:text-zinc-400 laptop:text-lg">
                    Daily tasks included: solo closing the department on closing
                    days, stocking inventory and assisting customers. A lot of
                    my interpersonal skills were developed here, such as{" "}
                    <span className="font-bold text-teal-800 dark:text-teal-500">teamwork</span>,{" "}
                    <span className="font-bold text-teal-800 dark:text-teal-500">
                      initiative
                    </span>
                    , and
                    <span className="font-bold text-teal-800 dark:text-teal-500">
                      {" "}
                      customer service
                    </span>
                    .
                  </p>
                </div>
                <br />
                <br />

                <div className="shoppers">
                  <div className="flex justify-between flex-full">
                    <div>
                      <p className="text-xl font-extrabold text-teal-600 dark:text-teal-300">
                        Shoppers Drug Mart (Retail)
                      </p>
                      <p className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                        ASSISTANT PHARMACIST/CASHIER
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-mono font-extrabold text-black dark:text-zinc-400">
                        Nov 2014 - Feb 2015 (4mos)
                      </p>
                    </div>
                  </div>
                  
                  <p className="dark:text-zinc-400 laptop:text-lg">
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
