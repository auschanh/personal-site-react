import React from 'react';
import { callSignsImages, bookReviewImages } from '../assets/projects';

const kw = (text) => (
  <span className="font-bold dark:text-teal-green text-teal-300">{text}</span>
);

export const projects = [
  {
    id: 'callsigns',
    title: '🔗 CallSigns Website',
    url: 'https://callsigns-oulv.vercel.app/',
    github: 'https://github.com/auschanh/callsigns',
    typeChip: { color: 'blue', value: 'Website' },
    techChips: [
      { color: 'amber', value: 'Socket.IO' },
      { color: 'teal', value: 'React' },
      { color: 'light-blue', value: 'Tailwind' },
      { color: 'pink', value: 'API' },
      { color: 'deep-orange', value: 'HTML' },
      { color: 'deep-orange', value: 'CSS' },
    ],
    description: (
      <div className="body-text text-sm space-y-2">
        <p>
          Based off the <strong><em>Just One</em></strong> board game. A player is selected to guess a word, other players give a one word hint.
          Similar hints are eliminated.
        </p>
        <p>
          Includes {kw('sockets')} for sessions, lobby settings, chat
          messaging, and verification for guesses.
        </p>
      </div>
    ),
    images: callSignsImages,
    carouselProps: { arrowColor: 'white', delay: 5000 },
  },
  {
    id: 'book-reviews',
    title: '🔗 Book Review Website',
    url: 'https://bookreviews-app.fly.dev/',
    github: 'https://github.com/auschanh/Book-Reviews',
    typeChip: { color: 'blue', value: 'Website' },
    techChips: [
      { color: 'light-blue', value: 'Python' },
      { color: 'light-blue', value: 'Flask' },
      { color: 'cyan', value: 'Postgres (SQL)' },
      { color: 'pink', value: 'API' },
      { color: 'deep-orange', value: 'HTML' },
      { color: 'deep-orange', value: 'CSS' },
    ],
    description: (
      <div className="body-text text-sm space-y-2">
        <p>
          A website with a small catalog of books to search from. Users can share a
          written review and rating of books after signing up.
        </p>
        <p>
          Includes searching, registering, logging in and out with a{' '}
          {kw('database')} and utilizing {kw('API')} calls.
        </p>
      </div>
    ),
    images: bookReviewImages,
    carouselProps: { arrowColor: 'black', delay: 8000 },
  },
];
