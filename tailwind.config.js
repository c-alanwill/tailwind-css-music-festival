/** @type {import('tailwindcss').Config} */
module.exports = {
  // This darkMode: "class", means that our dark mode class when we toggle it will override the dark / light mode settings in the users machine that are in their MacOS settings under "General".
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)",
          },
          "50%": {
            transform: "scaleY(1.5)",
          },
        },
      },
      // extends class name to animate-wavey
      animation: {
        wavey: "wavey 1000ms linear infinite",
      },
      animationDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
      },
    },
  },
  plugins: [
    require("./plugins/openVariant"),
    require("./plugins/animationDelay"),
    require("./plugins/tableCaption"),
    require("./plugins/buttonPlugin"),
  ],
};
