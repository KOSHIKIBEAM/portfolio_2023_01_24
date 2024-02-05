/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      animation: {
        circleAnim1: "circleAnim 1s forwards 0s",
        circleAnim2: "circleAnim 1s forwards .05s",
        circleAnim3: "circleAnim 1s forwards .15s",
        circleAnim4: "circleAnim 1s forwards .35s",
        circleAnim5: "circleAnim 1s forwards .45s",
        circleAnim6: "circleAnim 1s forwards .55s",
        circleAnim7: "circleAnim 1s forwards .65s",
        circleAnim8: "circleAnim 1s forwards .75s",
        circleAnim9: "circleAnim 1s forwards .85s",
        circleAnim10: "circleAnim 1s forwards .95s",
        circleAnim11: "circleAnim 1s forwards 1.05s",
        circleAnim12: "circleAnim 1s forwards 1.15s",
        circleAnim13: "circleAnim 1s forwards 1.25s",
        circleAnim14: "circleAnim 1s forwards 1.35s",
        circleAnim15: "circleAnim 1s forwards 1.45s",
        circleAnimSm1: "circleAnimSm 1s forwards 0s",
        circleAnimSm2: "circleAnimSm 1s forwards .05s",
        circleAnimSm3: "circleAnimSm 1s forwards .15s",
        circleAnimSm4: "circleAnimSm 1s forwards .35s",
        circleAnimSm5: "circleAnimSm 1s forwards .45s",
        circleAnimSm6: "circleAnimSm 1s forwards .55s",
        circleAnimSm7: "circleAnimSm 1s forwards .65s",
        circleAnimSm8: "circleAnimSm 1s forwards .75s",
        circleAnimSm9: "circleAnimSm 1s forwards .85s",
        circleAnimSm10: "circleAnimSm 1s forwards .95s",
        circleAnimSm11: "circleAnimSm 1s forwards 1.05s",
        circleAnimSm12: "circleAnimSm 1s forwards 1.15s",
        circleAnimSm13: "circleAnimSm 1s forwards 1.25s",
        circleAnimSm14: "circleAnimSm 1s forwards 1.35s",
        circleAnimSm15: "circleAnimSm 1s forwards 1.45s",
        bound: "bound 3s infinite",
      },
      keyframes: {
        circleAnim: {
          "0%": {
            strokeDasharray: "0 440",
          },
          "100%": {
            strokeDasharray: "440 440",
          },
        },
        circleAnimSm: {
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
