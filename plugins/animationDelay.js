const plugin = require("tailwindcss/plugin");

// matchUtilities is a dynamic class
const animationDelay = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      delay: (value) => ({
        animationDelay: value,
      }),
    },
    {
      values: theme("animationDelay"),
    }
  );
});

module.exports = animationDelay;
