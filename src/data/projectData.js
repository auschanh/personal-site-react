import React from 'react';
import { callSignsImages, bookReviewImages, pokemonImages } from '../assets/projects';

const kw = (text) => (
  <span className="font-bold dark:text-teal-green text-teal-300">{text}</span>
);

export const projects = [
  {
    id: 'callsigns',
    title: 'CallSigns Website',
    url: 'https://callsigns-oulv.vercel.app/',
    github: 'https://github.com/auschanh/callsigns',
    // typeChip: { color: 'blue', value: 'Website' },
    techChips: [
      { color: 'amber', value: 'Socket.IO' },
      { color: 'teal', value: 'React' },
      { color: 'light-blue', value: 'Tailwind' },
      { color: 'pink', value: 'API' },
      // { color: 'deep-orange', value: 'HTML' },
      // { color: 'deep-orange', value: 'CSS' },
    ],
    description: (
      <div className="body-text text-base">
        <p>
          Based off the <strong><em>Just One</em></strong> board game — players guess a word from one-word
          hints, with {kw('sockets')} powering live sessions, lobbies, and chat.
        </p>
      </div>
    ),
    images: callSignsImages,
    carouselProps: { arrowColor: 'white', delay: 5000 },
  },
  {
    id: 'pokemon-team-builder',
    title: 'Pokemon Team Builder',
    url: 'https://pokemon-team-builder-wheat.vercel.app/',
    github: 'https://github.com/auschanh/pokemon-team-builder',
    // typeChip: { color: 'blue', value: 'Website' },
    techChips: [
      { color: 'teal', value: 'React' },
      { color: 'light-blue', value: 'Tailwind' },
      { color: 'pink', value: 'API' },
      // { color: 'deep-orange', value: 'HTML' },
      // { color: 'deep-orange', value: 'CSS' },
    ],
    description: (
      <div className="body-text text-base">
        <p>
          A team builder for Pokémon games, with {kw('API')}-driven analysis of team strengths
          and weaknesses.
        </p>
      </div>
    ),
    images: pokemonImages,
    carouselProps: { arrowColor: 'white', delay: 5000 },
  },
  {
    id: 'book-reviews',
    title: 'Book Review Website',
    url: 'https://bookreviews-app.fly.dev/',
    github: 'https://github.com/auschanh/Book-Reviews',
    // typeChip: { color: 'blue', value: 'Website' },
    techChips: [
      { color: 'light-blue', value: 'Python' },
      { color: 'light-blue', value: 'Flask' },
      { color: 'cyan', value: 'Postgres (SQL)' },
      { color: 'pink', value: 'API' },
      { color: 'deep-orange', value: 'HTML' },
      { color: 'deep-orange', value: 'CSS' },
    ],
    description: (
      <div className="body-text text-base">
        <p>
          A small book catalog where users can register, log in, and share written reviews and
          ratings, backed by a {kw('database')} and {kw('API')} calls.
        </p>
      </div>
    ),
    images: bookReviewImages,
    carouselProps: { arrowColor: 'black', delay: 8000 },
  },
];
