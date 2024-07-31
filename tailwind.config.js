/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "*./src/{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./src/components/*{html,js}",
    "*./public/{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-navy": "#071121",
        navy: "#0B1C36",
        rose: {
          600: "rgb(225 29 72)",
        },
        neutral: {
          400: "rgb(163 163 163)",
        },
        zinc: {
          300: "rgb(212 212 216)",
        },
        slate: {
          100: "rgb(241 245 249)",
          200: "#e2e8f0"
        },
        gray: {
          700: "rgb(55 65 81)",
        },
        indigo: {
          400: "rgb(129 140 248)",
          600: "rgb(79 70 229)",
          800: "rgb(55 48 163)",
        },
      },
    },
    container: {
      center: true,
      // padding: "2rem",
    },
    screens: {
      "max-xs": { max: "320px" },
      "max-sm": { max: "640px" },
      "max-md": { max: "768px" },
      "max-lg": { max: "1024px" },
      "max-xl": { max: "1280px" },
      "max-2xl": { max: "1536px" },
      "max-[740px]": { max: "740px" },
    },
  },
  plugins: [
    require("daisyui"),
    require("tw-elements/dist/plugin.cjs"),
    require("tailwind-typewriter")({
      wordsets: {
        firstName: { words: ["I'm Austin"], writeSpeed: 0.1 }, // 1s to type
        lastName: {
          words: ["CHANHSAVANG"],
          writeSpeed: 0.03,
          delay: 2,
        }, // 1.1s
        description: {
          words: [
            "I'm a software developer based in Toronto, with a passion for web development.",
          ],
          writeSpeed: 0.04,
          repeat: 0,
          eraseSpeed: 0,
          delay: 3,
        },
      },
    }),
  ],
  darkMode: "class",
});
