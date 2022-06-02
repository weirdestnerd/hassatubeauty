module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line global-require,import/no-extraneous-dependencies
    require("@tailwindcss/forms"),
    // eslint-disable-next-line global-require,import/no-extraneous-dependencies
    require("@tailwindcss/aspect-ratio"),
    // eslint-disable-next-line global-require,import/no-extraneous-dependencies
    require("@tailwindcss/typography"),
  ],
};
