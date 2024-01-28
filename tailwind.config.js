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
        circleAnim_sp1: "circleAnim-sp 1s forwards 0s",
        circleAnim_sp2: "circleAnim-sp 1s forwards .05s",
        circleAnim_sp3: "circleAnim-sp 1s forwards .15s",
        circleAnim_sp4: "circleAnim-sp 1s forwards .35s",
        circleAnim_sp5: "circleAnim-sp 1s forwards .45s",
        circleAnim_sp6: "circleAnim-sp 1s forwards .55s",
        circleAnim_sp7: "circleAnim-sp 1s forwards .65s",
        circleAnim_sp8: "circleAnim-sp 1s forwards .75s",
        circleAnim_sp9: "circleAnim-sp 1s forwards .85s",
        circleAnim_sp10: "circleAnim-sp 1s forwards .95s",
        circleAnim_sp11: "circleAnim-sp 1s forwards 1.05s",
        circleAnim_sp12: "circleAnim-sp 1s forwards 1.15s",
        circleAnim_sp13: "circleAnim-sp 1s forwards 1.25s",
        circleAnim_sp14: "circleAnim-sp 1s forwards 1.35s",
        circleAnim_sp15: "circleAnim-sp 1s forwards 1.45s",
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
        circleAnim_sp: {
          "0%": {
            strokeDasharray: "0 346",
          },
          "100%": {
            strokeDasharray: "346 346",
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
    },
  },
  plugins: [],
};
