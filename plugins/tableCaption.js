const plugin = require("tailwindcss/plugin");

// addUtilities is a static class
const tableCaption = plugin(function ({ addUtilities }) {
  addUtilities({
    ".caption-bottom": {
      "caption-side": "bottom",
    },
    ".caption-top": {
      "caption-side": "top",
    },
  });
});

module.exports = tableCaption;
