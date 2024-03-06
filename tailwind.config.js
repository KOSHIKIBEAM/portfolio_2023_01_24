/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      animation: {
        circleAnim1: "circleAnim 1s forwards 1.85s",
        circleAnim2: "circleAnim 1s forwards 1.95s",
        circleAnim3: "circleAnim 1s forwards 2.05s",
        circleAnim4: "circleAnim 1s forwards 2.15s",
        circleAnim5: "circleAnim 1s forwards 2.25s",
        circleAnim6: "circleAnim 1s forwards 2.35s",
        circleAnim7: "circleAnim 1s forwards 2.45s",
        circleAnim8: "circleAnim 1s forwards 2.55s",
        circleAnim9: "circleAnim 1s forwards 2.65s",
        circleAnim10: "circleAnim 1s forwards 2.75s",
        circleAnim11: "circleAnim 1s forwards 2.85s",
        circleAnim12: "circleAnim 1s forwards 2.95s",
        circleAnim13: "circleAnim 1s forwards 3.05s",
        circleAnim14: "circleAnim 1s forwards 3.15s",
        circleAnim15: "circleAnim 1s forwards 3.25s",
        bound: "bound 3s infinite",
      },
      keyframes: {
        circleAnim: {
          "0%": {
            strokeDasharray: "0 252",
          },
          "100%": {
            strokeDasharray: "252 252",
          },
        },
        bound: {
          "0%": { transform: "translateY(0)" },
          "5%": { transform: "translateY(0)" },
          "10%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-10px)" },
          "25%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(0)" },
          "80%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      fontFamily: {
        font: ["Noto Sans JP", "Lora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
