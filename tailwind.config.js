/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}",
            "./node_modules/tw-elements/dist/js/**/*.js",
          ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("tw-elements/dist/plugin.cjs")],
})
