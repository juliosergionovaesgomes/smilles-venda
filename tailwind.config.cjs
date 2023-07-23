/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#bb892A",
      white: "#FFF",
      black: "#023"
    },
    linearGradientColors: theme => theme("colors"),
    radialGradientColors: theme => theme("colors"),
    conicGradientColors: theme => theme("colors"),
    animation: {
      bounce: "bounce infinite 3s",
      pulse: "pulse infinite 4s",
      ping: "ping infinite 2s"
    },
    backgroundImage: {
      person: "url('./assets/images/person.png')",
      paris: "url('./assets/images/paris.png')",
      background: "url('./assets/images/Home.png')"
    },
    extend: {
      screens: {}
    }
  },
  plugins: []
};
