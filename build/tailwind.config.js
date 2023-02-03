module.exports = {
  content: [
    "src/**/*{.html, .js, .njk,  .md}",
    "public/**/*{.html, .js, .njk,  .md}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '340px', 'max': '767px'},

      'xl': {'min': '768px', 'max': '1536px'}
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
