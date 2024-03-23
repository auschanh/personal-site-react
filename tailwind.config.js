/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
    },
    container: {
      center: true,
      // padding: "2rem"
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
};
