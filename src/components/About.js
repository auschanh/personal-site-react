import React from "react";
import me from "../assets/DSC00108 CROP.png";

const About = () => {
  return (
    <div className="grid grid-flow-row justify-center dark:bg-navy max-md:max-w-full">
      <div className="w-screen bg-slate-100 py-10 pt-32 dark:bg-dark-navy sm:pt-64">
        <div className="hero mb-12 flex flex-row place-items-center justify-center font-mono sm:container">
          <div className="hero-left picture items-center justify-center max-md:basis-full lg:basis-1/3">
            <img src={me} alt="'me" />
          </div>
          <div className="hero-right desc mt-5 flex basis-2/3 items-center justify-center text-center max-md:basis-full sm:ml-5">
            <div className="">
              <p className="text-4xl font-bold text-black dark:text-white md:text-5xl lg:text-7xl">
                Hi,
                <span className="text-teal-700 type-firstName dark:text-teal-300"></span>
              </p>
              <p className="text-lg font-bold dark:text-white sm:text-2xl">
                <span className="text-rose-600 type-lastName"></span>
              </p>
              <br />
              <p
                className="text-xl text-black dark:text-neutral-400 sm:text-3xl"
                data-aos="fade-zoom-in"
                data-aos-duration="2000"
                data-aos-easing="ease-out-cubic"
                data-aos-once="true"
              >
                I'm a software developer based in Toronto, with a passion for
                web development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="about-jump"></div>
      <br />
      <br />
      <br />

      <div
        id="about"
        className="section about row-span-1 mb-20 mt-10 pb-16 sm:container max-sm:px-10"
      >
        <h1 className="dark:text-white">About</h1>
        <br />
        <div
          className="section-desc"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
        >
          <div className="text-xl dark:text-zinc-300 max-sm:text-sm">
            <p>
              Initially into a health related career path, I've always had an
              interest in programming and building things in high school.
              Throughout my early university years, the problem solving and
              creativity of
              <strong className="dark:text-teal-500">
                {" "}
                Computer Science
              </strong>{" "}
              reignited a passion within me, making the career switch an easy
              choice.
            </p>
            <br />
            <button
              className="focus:shadow-outline rounded bg-teal-600 px-3 py-2 font-bold text-white shadow hover:bg-teal-400 focus:outline-none"
              type="button"
              id="btn-more"
            >
              University Journey
            </button>
            <p id="about-more" className="mt-2">
              During my tenure at
              <strong className="dark:text-teal-500">
                {" "}
                Toronto Metropolitan University
              </strong>
              , I was able to co-op for
              <strong className="dark:text-teal-500">
                {" "}
                Ontario Public Service
              </strong>
              , where I showed my passion for developing creative solutions. I
              was given opportunities for ownership over projects, such as
              working with a
              <strong className="dark:text-teal-500">
                {" "}
                client to automate her business workflow
              </strong>{" "}
              and was selected to share this experience in a company-wide
              learning and engagement conference.
            </p>
            <br />
            <p>
              Currently, I'm always keeping up with what's trendy in tech. I
              love to continuously learn and grow my skill set as a developer
              and a person. Below are some things outside of tech that I'm
              interested in.
            </p>
          </div>

          <br />

          <div
            data-aos="fade-zoom-out"
            data-aos-duration="1250"
            data-aos-offset="375"
          >
            <div
              id="carouselExampleCaptions"
              className="relative mb-12 mt-6 transform transition-all hover:scale-110"
              data-te-carousel-init
              data-te-ride="carousel"
            >
              <div
                className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                data-te-carousel-indicators
              >
                <button
                  type="button"
                  data-te-target="#carouselExampleCaptions"
                  data-te-slide-to="0"
                  data-te-carousel-active
                  className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-te-target="#carouselExampleCaptions"
                  data-te-slide-to="1"
                  className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-te-target="#carouselExampleCaptions"
                  data-te-slide-to="2"
                  className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-label="Slide 3"
                ></button>
              </div>

              <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                <div
                  className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-active
                  data-te-carousel-item
                >
                  <img
                    src="assets/hobbies/MixTapeCover.jpg"
                    className="block w-full"
                    alt="..."
                  />
                  <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
                    <h5 className="text-xl">
                      <span className="bg-black px-3 max-md:bg-opacity-80">
                        Photography
                      </span>
                    </h5>
                    <p className="hidden px-16 text-base md:block">
                      <span className="bg-black bg-opacity-80 px-3">
                        I'm still learning a lot about the photography world,
                        but I hope to pick up a new camera soon.
                      </span>
                    </p>
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                  style={{ "backface-visibility": "hidden" }}
                >
                  <img
                    src="assets/hobbies/eldenring1.jpeg"
                    className="block w-full"
                    alt="..."
                  />
                  <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
                    <h5 className="text-xl">
                      <span className="bg-black px-5 opacity-80">Gaming</span>
                    </h5>
                    <p className="hidden text-base md:block">
                      I've been gaming since I could walk - my favourite genres
                      include JRPGs and Souls-like games.
                    </p>
                    <p className="hidden text-base md:block">
                      Recent Favourites: Elden Ring, Dark Souls 3, Persona 5
                      Royal
                    </p>
                  </div>
                </div>
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                  style={{ "backface-visibility": "hidden" }}
                >
                  <img
                    src="assets/hobbies/leafs.jpg"
                    className="block w-full"
                    alt="..."
                  />
                  <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
                    <h5 className="text-xl">
                      <span className="bg-black px-3 opacity-80">Hockey</span>
                    </h5>
                    <p className="hidden text-base md:block">
                      <span className="bg-black px-4 py-1 opacity-80">
                        I don't play anymore but follow very closely with the
                        NHL.
                      </span>
                    </p>
                    <p className="hidden text-base md:block">
                      <span className="bg-black px-4 py-1 opacity-80">
                        I am a big Toronto Maple Leafs fan! I know I know.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <button
                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide="prev"
              >
                <span className="inline-block h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Previous
                </span>
              </button>
              <button
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide="next"
              >
                <span className="inline-block h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Next
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            id="openPhotographyModal"
            className="focus:shadow-outline rounded bg-teal-600 px-6 py-2 font-bold text-white shadow hover:scale-110 hover:bg-teal-400 focus:outline-none"
            data-dialog-target="photography"
          >
            📸 My Photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
