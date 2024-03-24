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
                  <CarouselProject
                    images={bookReviewImages}
                    arrowColor={"black"}
                  />
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
                figure={
                  <CarouselProject
                    images={blackJackImages}
                    arrowColor={"rgb(13 148 136)"}
                  />
                }
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
