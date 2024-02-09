/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      keyframes: {
        buttonClicked: {
          "0%, 100%": {
            backgroundColor: "black",
            transform: "scale(1)",
          },
          "20%": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            transform: "scale(0.97)",
          },
          "45%": {
            transform: "scale(1.02)",
          },
        },
        buttonClickedDot: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "20%": {
            transform: "scale(1.2)",
          },
          "45%": {
            transform: "scale(0.9)",
          },
        },
      },
      animation: {
        buttonClicked: "buttonClicked 0.7s",
        buttonClickedDot: "buttonClickedDot 0.7s",
      },
    },
  },
  plugins: [],
};
