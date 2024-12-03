/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
      },
      colors: {
        yt: "rgb(170, 170, 170)",
        whiteTranparent: "rgba(255, 255, 255, 0.2)",
        borderColor: "rgba(255, 255, 255, 0.88)",
        timeLineBG: "rgba(0, 0, 0, 0.7)",
        extendGrayOpA: "rgba(145, 165, 167, 0.3)",
      },
      gridTemplateColumns: {
        "fr-grid": "repeat(3, 1fr)",
      },
    },
  },
  plugins: [],
};
