import React from "react";

const Projects = () => {
  return (
    <div>
      <div id="projects-jump"></div>

      <div className="projects w-screen bg-slate-100 pb-40 pt-32 dark:bg-dark-navy">
        <div
          id="projects"
          className="section row-span-1 mt-10 sm:container max-sm:px-10"
        >
          <h1 className="text-3xl font-bold underline decoration-rose-600 decoration-4 underline-offset-8 dark:text-white">
            Projects
          </h1>
          <br />
          <br />
          <div className="section-desc">
            <div className="card transform bg-base-100 shadow-xl transition-all hover:scale-105">
              <figure>
                <div
                  id="carouselExampleIndicators"
                  className="data-te-interval=3000 pause=hover relative"
                  data-te-carousel-init
                  data-te-ride="carousel"
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                    data-te-carousel-indicators
                  >
                    <button
                      type="button"
                      data-te-target="#carouselExampleIndicators"
                      data-te-slide-to="0"
                      data-te-carousel-active
                      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-indigo-600 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-te-target="#carouselExampleIndicators"
                      data-te-slide-to="1"
                      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-indigo-600 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-te-target="#carouselExampleIndicators"
                      data-te-slide-to="2"
                      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-indigo-600 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      type="button"
                      data-te-target="#carouselExampleIndicators"
                      data-te-slide-to="3"
                      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-indigo-600 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                      aria-label="Slide 4"
                    ></button>
                    <button
                      type="button"
                      data-te-target="#carouselExampleIndicators"
                      data-te-slide-to="4"
                      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-indigo-600 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                      aria-label="Slide 5"
                    ></button>
                  </div>

                  {/* <!--Carousel items--> */}
                  <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    {/* <!--First item--> */}
                    <div
                      className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                      data-te-carousel-item
                      data-te-carousel-active
                    >
                      <img
                        src="assets/bookreviews-imgs/account-page2.gif"
                        loading="lazy"
                        className="block w-full"
                        alt="Login Page"
                        data-dialog-target="project1item1"
                      />
                    </div>
                    {/* <!--Second item--> */}
                    <div
                      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                      data-te-carousel-item
                    >
                      <img
                        src="assets/bookreviews-imgs/account-reviews.gif"
                        loading="lazy"
                        className="block w-full"
                        alt="Account Page"
                        data-dialog-target="project1item2"
                      />
                    </div>
                    {/* <!--Third item--> */}
                    <div
                      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                      data-te-carousel-item
                    >
                      <img
                        src="assets/bookreviews-imgs/search-caption.gif"
                        loading="lazy"
                        className="block w-full"
                        alt="Search page"
                        data-dialog-target="project1item3"
                      />
                    </div>
                    {/* <!--Fourth item--> */}
                    <div
                      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                      data-te-carousel-item
                    >
                      <img
                        src="assets/bookreviews-imgs/sorting-caption.gif"
                        loading="lazy"
                        className="block w-full"
                        alt="Sort Table Page"
                        data-dialog-target="project1item4"
                      />
                    </div>
                    {/* <!--Fifth item--> */}
                    <div
                      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                      data-te-carousel-item
                    >
                      <img
                        src="assets/bookreviews-imgs/review-caption.gif"
                        loading="lazy"
                        className="block w-full"
                        alt="Review Page"
                        data-dialog-target="project1item5"
                      />
                    </div>
                  </div>

                  {/* <!--Carousel controls - prev item--> */}
                  <button
                    className="hover:gray-600 absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center font-extrabold text-indigo-600 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:no-underline hover:opacity-90 hover:outline-none focus:text-indigo-300 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselExampleIndicators"
                    data-te-slide="prev"
                  >
                    <span className="inline-block h-8 w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="4"
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
                  {/* <!--Carousel controls - next item--> */}
                  <button
                    className="hover:gray-600 absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center font-extrabold text-indigo-600 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:no-underline hover:opacity-90 hover:outline-none focus:text-indigo-300 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselExampleIndicators"
                    data-te-slide="next"
                  >
                    <span className="inline-block h-8 w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="4"
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
              </figure>
              <div className="card-body rounded-b-2xl dark:bg-[#143260]">
                <h2 className="card-title items-baseline max-sm:flex-col">
                  <a
                    className="text-2xl hover:text-gray-400 hover:underline hover:decoration-2 hover:underline-offset-2 dark:text-white dark:hover:text-gray-600 dark:hover:decoration-rose-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://bookreviews-app.fly.dev/"
                  >
                    Book Review Website
                  </a>
                  <div className="flex max-sm:mr-auto max-sm:flex-row">
                    <div className="badge badge-primary text-black dark:text-white">
                      Website
                    </div>
                  </div>
                </h2>
                <div
                  data-aos="fade-zoom-in"
                  data-ease="ease-in-back"
                  data-aos-duration="1000"
                  data-offset="350"
                >
                  <div className="dark:text-zinc-300 max-sm:text-xs">
                    <p>
                      A website with a small catalog of books to search from.
                      Users can share a written review and rating of books after
                      signing up.
                    </p>
                    <p>
                      Includes implementing, searching, registering, logging in
                      and out with a{" "}
                      <span className="font-bold text-teal-300">database</span>{" "}
                      and utilizing{" "}
                      <span className="font-bold text-teal-300">API</span>{" "}
                      calls.
                    </p>
                  </div>
                  <div className="max-sm:grid-col-2 card-actions mt-3 justify-end max-sm:grid max-sm:grid-flow-col sm:mt-10">
                    <div>
                      <div className="max-sm:col-span-1">
                        <a
                          href="https://github.com/auschanh/Book-Reviews"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-lg fa-github dark:text-white dark:hover:text-gray-600"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ml-auto justify-end max-sm:col-span-1">
                      <div className="badge badge-primary badge-outline dark:border-opacity-100 dark:bg-current">
                        <span className="dark:text-white">Python</span>
                      </div>
                      <div className="badge badge-primary badge-outline dark:border-opacity-100 dark:bg-current">
                        <span className="dark:text-white">Flask</span>
                      </div>
                      <div className="badge badge-info badge-outline">
                        Postgres (SQL)
                      </div>
                      <div className="badge badge-secondary badge-outline">
                        API
                      </div>
                      <div className="badge badge-error badge-outline">
                        HTML
                      </div>
                      <div className="badge badge-error badge-outline">CSS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-20 transform bg-base-100 shadow-xl transition-all hover:scale-105">
              <figure>
                <div
                  id="carouselBlackJack"
                  className="data-te-interval=8000 pause=hover relative"
                  data-te-carousel-init
                  data-te-ride="carousel"
                >
                  {/* <!--Carousel indicators--> */}
                  <div
                    className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                    data-te-carousel-indicators
                  >
                    <button
                      type="button"
                      data-te-target="#carouselBlackJack"
                      data-te-slide-to="0"
                      data-te-carousel-active
                      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-indigo-600 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-te-target="#carouselBlackJack"
                      data-te-slide-to="1"
                      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-indigo-600 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                      aria-label="Slide 2"
                    ></button>
                  </div>

                  {/* <!--Carousel items--> */}
                  <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    {/* <!--First item--> */}
                    <div
                      className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                      data-te-carousel-item
                      data-te-carousel-active
                    >
                      <img
                        src="assets/projects/blackjack-cropped.png"
                        loading="lazy"
                        className="block w-full brightness-75 hover:brightness-100 focus:brightness-100"
                        alt="Black Jack Logo"
                      />
                    </div>
                    {/* <!--Second item--> */}
                    <div
                      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                      data-te-carousel-item
                    >
                      <img
                        src="assets/projects/blackjack.gif"
                        loading="lazy"
                        className="block w-full"
                        alt="Terminal Game of Black Jack"
                        data-dialog-target="project2item2"
                      />
                    </div>
                  </div>

                  {/* <!--Carousel controls - prev item--> */}
                  <button
                    className="hover:gray-600 !absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-indigo-600 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:no-underline hover:opacity-90 hover:outline-none focus:text-indigo-300 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselBlackJack"
                    data-te-slide="prev"
                  >
                    <span className="inline-block h-8 w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="4"
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
                  {/* <!--Carousel controls - next item--> */}
                  <button
                    className="hover:gray-600 !absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center font-bold text-indigo-600 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:no-underline hover:opacity-90 hover:outline-none focus:text-indigo-300 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselBlackJack"
                    data-te-slide="next"
                  >
                    <span className="inline-block h-8 w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="4"
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
              </figure>
              <div className="card-body rounded-b-2xl dark:bg-[#143260]">
                <h2 className="card-title text-2xl dark:text-white">
                  BlackJack Terminal Game
                </h2>
                <div
                  data-aos="fade-zoom-in"
                  data-ease="ease-in-back"
                  data-aos-duration="1000"
                  data-offset="350"
                >
                  <div className="dark:text-zinc-300 max-sm:text-xs">
                    <p>
                      A small game of Blackjack, fully playable in the terminal.
                    </p>
                    <div className="more-desc">
                      Game consists of playing against the dealer, and keeps
                      track of wins, losses and ties against dealer. Dealer
                      className contains logic to hit or stand.
                      <p>
                        Challenges included counting for player busts, switching{" "}
                        <strong>ace</strong> card values between 1 and 11.
                      </p>
                    </div>
                    <p>
                      Purpose of project: better understand Java, classes,
                      enums, OOP concepts.
                    </p>
                  </div>

                  <div className="card-actions mt-3 justify-end sm:mt-10">
                    <div>
                      <a
                        href="https://github.com/auschanh/blackjack"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-lg fa-github dark:text-white dark:hover:text-gray-600"></i>
                      </a>
                    </div>
                    <div className="ml-auto justify-end">
                      <div className="badge badge-info badge-outline">Java</div>
                      {/* <!-- <div className="badge badge-ghost badge-outline">Terminal Game</div> --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card my-20 transform bg-base-100 shadow-xl transition-all hover:scale-105">
              <figure>
                <img
                  src="assets/projects/just-one.jpg"
                  loading="lazy"
                  alt="just one digital game"
                  className="opacity-60 hover:opacity-100"
                />
              </figure>
              <div className="card-body rounded-b-2xl dark:bg-[#143260]">
                <h2 className="card-title items-baseline text-2xl dark:text-white max-sm:flex-col">
                  Just One Online
                  <div className="flex max-sm:mr-auto max-sm:flex-row">
                    <div className="normal-view badge badge-secondary mr-1 line-clamp-1 text-white">
                      Work In Progress
                    </div>
                    <div className="mobile-view badge badge-secondary mr-1">
                      WIP
                    </div>
                    <div className="badge badge-primary mr-1 text-white">
                      Website
                    </div>
                  </div>
                </h2>
                <div
                  data-aos="fade-zoom-in"
                  data-ease="ease-in-back"
                  data-aos-duration="1000"
                  data-offset="350"
                >
                  <div className="dark:text-zinc-300 max-sm:text-xs">
                    <p>
                      An online version of the board game Just One. Includes{" "}
                      <span className="font-bold text-teal-300">sockets</span>{" "}
                      for game sessions, and basic NLP for game logic.
                    </p>
                  </div>

                  <div className="max-sm:grid-col-2 card-actions mt-3 justify-end max-sm:grid max-sm:grid-flow-col sm:mt-10">
                    <div className="max-sm:col-span-1">
                      <a
                        href="https://github.com/auschanh/just_one"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-lg fa-github dark:text-white dark:hover:text-gray-600"></i>
                      </a>
                    </div>
                    <div className="ml-auto justify-end max-sm:col-span-1">
                      <div className="badge badge-accent badge-outline">
                        React
                      </div>
                      <div className="badge badge-primary badge-outline dark:border-opacity-100 dark:bg-current">
                        <span className="dark:text-white">Tailwind</span>
                      </div>
                      <div className="badge badge-secondary badge-outline">
                        API
                      </div>
                      <div className="badge badge-error badge-outline">
                        HTML
                      </div>
                      <div className="badge badge-error badge-outline">CSS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
