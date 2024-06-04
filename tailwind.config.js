import { Opacity } from "@mui/icons-material";

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
        bound1: "bound1 3s infinite",
        bound2: "bound2 3s infinite",
        bound3: "bound3 3s infinite",
        fadeInRight: "fadeInRight 1s backwards",
        fadeInLeft: "fadeInLeft 1s backwards",
        fadeInBottom: "fadeInBottom 1s backwards",
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
        bound1: {
          "0%": { transform: "translateY(0)" },
          "5%": { transform: "translateY(-10px)" },
          "10%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(0)" },
          "80%": { transform: "translateY(0)" },
          "86%": { transform: "translateY(0)" },
          "92%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        bound2: {
          "0%": { transform: "translateY(0)" },
          "5%": { transform: "translateY(0)" },
          "10%": { transform: "translateY(-10px)" },
          "20%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(0)" },
          "80%": { transform: "translateY(0)" },
          "86%": { transform: "translateY(-10px)" },
          "92%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(0)" },
        },
        bound3: {
          "0%": { transform: "translateY(0)" },
          "5%": { transform: "translateY(0)" },
          "10%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-10px)" },
          "25%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(0)" },
          "80%": { transform: "translateY(-10px)" },
          "86%": { transform: "translateY(0)" },
          "92%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeInRight: {
          "0%": {
            transform: "translateX(250px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: "1",
          },
        },
        fadeInLeft: {
          "0%": {
            transform: "translateX(-250px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: "1",
          },
        },
        fadeInBottom: {
          "0%": {
            transform: "translateY(-50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
        animateRocket2: {
          "0%": { transform: "scale(1) rotate(10deg)" },
          "5%": { transform: "scale(1.25) rotate(-15deg)" },
          "10%": { transform: "scale(1.5) rotate(5deg)" },
          "15%": { transform: "scale(1.75) rotate(-10deg)" },
          "20%": { transform: "transform: scale(2) rotate(0)" },
          "100%": {
            transform: "scale(20) translate3D(100vw, -100vh, 0) rotate(0)",
          },
        },
      },
      fontFamily: {
        font: ["Noto Sans JP", "Lora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
