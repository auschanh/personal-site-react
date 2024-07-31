import React from "react";
import ProjectCard from "./ProjectCard";
import CarouselProject from "./CarouselProject";
import { Carousel, IconButton, Chip, Button } from "@material-tailwind/react";

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

      <div className="projects w-screen bg-slate-200 pb-40 pt-32 text-black dark:bg-dark-navy">
        <div
          id="projects"
          className="section sm:px-auto row-span-1 mt-10 px-10 sm:container"
        >
          <h1 className="text-3xl font-bold font-mono underline decoration-rose-600 decoration-4 underline-offset-8 dark:text-white">
            / Projects
          </h1>

          <br />
          <br />

          <div className="section-desc">

            <div className="mt-20">
              <ProjectCard
                title={
                  <a
                    class="text-2xl hover:text-gray-400 hover:underline hover:decoration-2 hover:underline-offset-2 dark:text-white dark:hover:text-gray-600 dark:hover:decoration-rose-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://bookreviews-app.fly.dev/"
                  >
                    Book Review Website
                  </a>
                }
                chips={
                  <Chip
                    color="blue"
                    value="Website"
                    size="sm"
                    className="rounded-full"
                  />
                }
                chipsFooter={[
                  <Chip
                    className="rounded-full"
                    color="light-blue"
                    value="Python"
                    size="sm"
                    variant="outlined"
                  />,
                  <Chip
                    className="rounded-full"
                    color="light-blue"
                    value="Flask"
                    size="sm"
                    variant="outlined"
                  />,
                  <Chip
                    className="rounded-full"
                    color="cyan"
                    value="Postgres (SQL)"
                    size="sm"
                    variant="outlined"
                  />,
                  <Chip
                    className="rounded-full"
                    color="pink"
                    value="API"
                    size="sm"
                    variant="outlined"
                  />,
                  <Chip
                    className="rounded-full"
                    color="deep-orange"
                    value="HTML"
                    size="sm"
                    variant="outlined"
                  />,
                  <Chip
                    className="rounded-full"
                    color="deep-orange"
                    value="CSS"
                    size="sm"
                    variant="outlined"
                  />,
                ]}
                github="https://github.com/auschanh/Book-Reviews"
                desc={
                  <div class="text-xs dark:text-zinc-300 sm:text-xl">
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
                title={"CallSigns Game"}
                github="https://github.com/auschanh/just_one"
                chips={[
                  <Chip
                    className="rounded-full"
                    key="1"
                    color="pink"
                    value="Work in Progress"
                    size="sm"
                  />,
                  <Chip
                    key="2"
                    color="blue"
                    value="Website"
                    size="sm"
                    className="rounded-full"
                  />,
                ]}
                chipsFooter={[
                  <Chip
                    className="rounded-full"
                    color="amber"
                    value="Socket.IO"
                    size="sm"
                    variant="outlined"
                  />,
                  <Chip
                    className="rounded-full"
                    color="teal"
                    value="React"
                    size="sm"
                    variant="outlined"
                  />,
                  <Chip
                    className="rounded-full"
                    color="light-blue"
                    value="Tailwind"
                    size="sm"
                    variant="outlined"
                  />,
                  <Chip
                    className="rounded-full"
                    color="pink"
                    value="API"
                    size="sm"
                    variant="outlined"
                  />,
                  <Chip
                    className="rounded-full"
                    color="deep-orange"
                    value="HTML"
                    size="sm"
                    variant="outlined"
                  />,
                  <Chip
                    className="rounded-full"
                    color="deep-orange"
                    value="CSS"
                    size="sm"
                    variant="outlined"
                  />
                ]}
                desc={
                  <div class="text-xs dark:text-zinc-300 font-medium sm:text-xl">
                    <p>
                      Based off of the Just One board game. 
                      <p>
                        An online game where a designated player is selected to guess a word, and the other players give a one word hint. Similar hints are eliminated.
                      
                      </p>
                      Includes{" "}
                      <span class="font-bold text-teal-300">sockets</span> for
                      game sessions, game lobby settings, chat messaging, and basic NLP comparing word hints, verifying the guesser's guess.
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

            <div className="mt-20">
              <ProjectCard
                title={"BlackJack Terminal Game"}
                chipsFooter={
                  <Chip
                    className="rounded-full"
                    color="light-blue"
                    value="Java"
                    size="sm"
                    variant="outlined"
                  />
                }
                github="https://github.com/auschanh/blackjack"
                desc={
                  <div class="text-xs dark:text-zinc-300 sm:text-xl">
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

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
