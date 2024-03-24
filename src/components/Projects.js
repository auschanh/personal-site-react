import React from "react";
import ProjectCard from "./ProjectCard";
import CarouselProject from "./CarouselProject";
import { Carousel, IconButton } from "@material-tailwind/react";

import {
  bookReviewAccReviews,
  bookReviewLogin,
  bookReviewReview,
  bookReviewSearch,
  bookReviewSort,
  blackJackGif,
  blackJackLogo,
  justOneLogo,
} from "./ProjectPhotos";

const bookReviewImages = [
  bookReviewAccReviews,
  bookReviewLogin,
  bookReviewReview,
  bookReviewSearch,
  bookReviewSort,
];
const blackJackImages = [blackJackGif, blackJackLogo];

const Projects = () => {
  return (
    <div>
      <div id="projects-jump"></div>
      {console.log(bookReviewImages)}
      {console.log(blackJackImages)}
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
            <div className="mt-20">
              <ProjectCard
                title={"Book Review Site"}
                desc={
                  <div class="dark:text-zinc-300 max-sm:text-xs">
                    <p>
                      A website with a small catalog of books to search from.
                      Users can share a written review and rating of books after
                      signing up.
                    </p>
                    <p>
                      Includes implementing, searching, registering, logging in
                      and out with a{" "}
                      <span class="font-bold text-teal-300">database</span> and
                      utilizing <span class="font-bold text-teal-300">API</span>{" "}
                      calls.
                    </p>
                  </div>
                }
                figure={
                  <Carousel
                    className="rounded-xl"
                    prevArrow={({ handlePrev }) => (
                      <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handlePrev}
                        className="!absolute left-4 top-2/4 -translate-y-2/4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                          />
                        </svg>
                      </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                      <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handleNext}
                        className="!absolute !right-4 top-2/4 -translate-y-2/4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </IconButton>
                    )}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                      alt="image 1"
                      className="h-full w-full object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                      alt="image 2"
                      className="h-full w-full object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                      alt="image 3"
                      className="h-full w-full object-cover"
                    />
                  </Carousel>
                }
              ></ProjectCard>
            </div>
            <div className="mt-20">
              <ProjectCard
                title={"BlackJack Terminal Game"}
                desc={
                  <div class="dark:text-zinc-300 max-sm:text-xs">
                    <p>
                      A small game of Blackjack, fully playable in the terminal.
                    </p>
                    <div class="more-desc">
                      Game consists of playing against the dealer, and keeps
                      track of wins, losses and ties against dealer. Dealer
                      class contains logic to hit or stand.
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
                }
                figure={<CarouselProject images={blackJackImages} />}
              ></ProjectCard>
            </div>
            <div className="mt-20">
              <ProjectCard
                title={"JustOne Online"}
                desc={
                  <div class="dark:text-zinc-300 max-sm:text-xs">
                    <p>
                      An online version of the board game Just One. Includes{" "}
                      <span class="font-bold text-teal-300">sockets</span> for
                      game sessions, and basic NLP for game logic.
                    </p>
                  </div>
                }
                figure={
                  <img
                    src={justOneLogo}
                    loading="lazy"
                    alt="just one digital game"
                    class="h-full w-full object-contain opacity-60 hover:opacity-100"
                  />
                }
              ></ProjectCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
