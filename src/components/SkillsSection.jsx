import React from "react";

const SkillsSection = () => {
  const Base = {
    strokeDashoffset: "calc(252 - (252 * 100) / 100)",
    stroke: "#e2e8f0",
    position: "relative",
    fill: "none",
    strokeWidth: "6",
    strokeDasharray: "252",
    strokeLinecap: "round",
  };

  const Percent100 = {
    strokeDashoffset: "calc(252 - (252 * 100) / 100)",
    stroke: "#fc4103",
  };
  const Percent95 = {
    strokeDashoffset: "calc(252 - (252 * 95) / 100)",
    stroke: "#fc7f03",
  };
  const Percent85 = {
    strokeDashoffset: "calc(252 - (252 * 85) / 100)",
    stroke: "#fcc203",
  };
  const Percent75 = {
    strokeDashoffset: "calc(252 - (252 * 75) / 100)",
    stroke: " #03a9f4",
  };
  const Percent65 = {
    strokeDashoffset: "calc(252 - (252 * 65) / 100)",
    stroke: " #03a9f4",
  };
  const Percent50 = {
    strokeDashoffset: "calc(252 - (252 * 50) / 100)",
    stroke: " #03a9f4",
  };
  return (
    <section
      id="skill"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <h2 className="text-3xl font-bold pb-10 tracking-tight sm:text-4xl">
        Skill
      </h2>
      <div className="flex justify-center items-center flex-wrap">
        <div className="w-1/3 sm:w-1/5 relative flex justify-center items-center flex-col">
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="relative fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent100}
                className="relative animate-circleAnimSm14 fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
            </svg>
            <p className="text-center font-bold mt-1">HTML/CSS</p>
          </div>
          <div className="top-[25%] absolute dark:text-gray-50 text-gray-900">
            <h3 className="md:text-2xl text-xl dark:text-gray-50 text-gray-900">
              100<span className="text-xs sm:text-sm">%</span>
            </h3>
          </div>
        </div>
        <div className="w-1/3 sm:w-1/5 relative flex justify-center items-center flex-col">
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="relative fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent95}
                className="relative animate-circleAnimSm2 fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
            </svg>
            <p className="text-center font-bold mt-1">Sass</p>
          </div>
          <div className="top-[25%] absolute dark:text-gray-50 text-gray-900">
            <h3 className="md:text-2xl text-xl dark:text-gray-50 text-gray-900">
              95<span className="text-xs sm:text-sm">%</span>
            </h3>
          </div>
        </div>
        <div className="w-1/3 sm:w-1/5 relative flex justify-center items-center flex-col">
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="relative fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent95}
                className="relative animate-circleAnimSm13 fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
            </svg>
            <p className="text-center font-bold mt-1">JavaScript</p>
          </div>
          <div className="top-[25%] absolute dark:text-gray-50 text-gray-900">
            <h3 className="md:text-2xl text-xl dark:text-gray-50 text-gray-900">
              95<span className="text-xs sm:text-sm">%</span>
            </h3>
          </div>
        </div>
        <div className="w-1/3 sm:w-1/5 relative flex justify-center items-center flex-col mt-[3rem] sm:mt-[0px]">
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="relative fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent95}
                className="relative animate-circleAnimSm4 fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
            </svg>
            <p className="text-center font-bold mt-1">WordPress</p>
          </div>
          <div className="top-[25%] absolute dark:text-gray-50 text-gray-900">
            <h3 className="md:text-2xl text-xl dark:text-gray-50 text-gray-900">
              95<span className="text-xs sm:text-sm">%</span>
            </h3>
          </div>
        </div>
        <div className="w-1/3 sm:w-1/5 relative flex justify-center items-center flex-col mt-[3rem] sm:mt-[0px]">
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="relative fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent85}
                className="relative animate-circleAnimSm3 fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
            </svg>
            <p className="text-center font-bold mt-1">jQuery</p>
          </div>
          <div className="top-[25%] absolute dark:text-gray-50 text-gray-900">
            <h3 className="md:text-2xl text-xl dark:text-gray-50 text-gray-900">
              85<span className="text-xs sm:text-sm">%</span>
            </h3>
          </div>
        </div>
        <div className="w-1/3 sm:w-1/5 relative flex justify-center items-center flex-col mt-[3rem]">
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="relative fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent100}
                className="relative animate-circleAnimSm10 fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
            </svg>
            <p className="text-center font-bold mt-1">Figma</p>
          </div>
          <div className="top-[25%] absolute dark:text-gray-50 text-gray-900">
            <h3 className="md:text-2xl text-xl dark:text-gray-50 text-gray-900">
              100<span className="text-xs sm:text-sm">%</span>
            </h3>
          </div>
        </div>
        <div className="w-1/3 sm:w-1/5 relative flex justify-center items-center flex-col mt-[3rem]">
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="relative fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent100}
                className="relative animate-circleAnimSm5 fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
            </svg>
            <p className="text-center font-bold mt-1">Adobe XD</p>
          </div>
          <div className="top-[25%] absolute dark:text-gray-50 text-gray-900">
            <h3 className="md:text-2xl text-xl dark:text-gray-50 text-gray-900">
              95<span className="text-xs sm:text-sm">%</span>
            </h3>
          </div>
        </div>
        <div className="w-1/3 sm:w-1/5 relative flex justify-center items-center flex-col mt-[3rem]">
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="relative fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent95}
                className="relative animate-circleAnimSm12 fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
            </svg>
            <p className="text-center font-bold mt-1">Photoshop</p>
          </div>
          <div className="top-[25%] absolute dark:text-gray-50 text-gray-900">
            <h3 className="md:text-2xl text-xl dark:text-gray-50 text-gray-900">
              95<span className="text-xs sm:text-sm">%</span>
            </h3>
          </div>
        </div>
        <div className="w-1/3 sm:w-1/5 relative flex justify-center items-center flex-col mt-[3rem]">
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="relative fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent95}
                className="relative animate-circleAnimSm6 fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
            </svg>
            <p className="text-center font-bold mt-1">Illustrator</p>
          </div>
          <div className="top-[25%] absolute dark:text-gray-50 text-gray-900">
            <h3 className="md:text-2xl text-xl dark:text-gray-50 text-gray-900">
              95<span className="text-xs sm:text-sm">%</span>
            </h3>
          </div>
        </div>
        <div className="w-1/3 sm:w-1/5 relative flex justify-center items-center flex-col mt-[3rem]">
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="relative fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent95}
                className="relative animate-circleAnimSm7 fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
            </svg>
            <p className="text-center font-bold mt-1">Bootstrap</p>
          </div>
          <div className="top-[25%] absolute dark:text-gray-50 text-gray-900">
            <h3 className="md:text-2xl text-xl dark:text-gray-50 text-gray-900">
              95<span className="text-xs sm:text-sm">%</span>
            </h3>
          </div>
        </div>
        <div className="w-1/3 sm:w-1/5 relative flex justify-center items-center flex-col mt-[3rem]">
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="relative fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent65}
                className="relative animate-circleAnimSm9 fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
            </svg>
            <p className="text-center font-bold mt-1">gulp</p>
          </div>
          <div className="top-[25%] absolute dark:text-gray-50 text-gray-900">
            <h3 className="md:text-2xl text-xl dark:text-gray-50 text-gray-900">
              95<span className="text-xs sm:text-sm">%</span>
            </h3>
          </div>
        </div>
        <div className="w-1/3 sm:w-1/5 relative flex justify-center items-center flex-col mt-[3rem]">
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="relative fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent50}
                className="relative animate-circleAnimSm1 fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
            </svg>
            <p className="text-center font-bold mt-1">React</p>
          </div>
          <div className="top-[25%] absolute dark:text-gray-50 text-gray-900">
            <h3 className="md:text-2xl text-xl dark:text-gray-50 text-gray-900">
              50<span className="text-xs sm:text-sm">%</span>
            </h3>
          </div>
        </div>
        <div className="w-1/3 sm:w-1/5 relative flex justify-center items-center flex-col mt-[3rem]">
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="relative fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent75}
                className="relative animate-circleAnimSm15 fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
            </svg>
            <p className="text-center font-bold mt-1">Tailwind css</p>
          </div>
          <div className="top-[25%] absolute dark:text-gray-50 text-gray-900">
            <h3 className="md:text-2xl text-xl dark:text-gray-50 text-gray-900">
              75<span className="text-xs sm:text-sm">%</span>
            </h3>
          </div>
        </div>
        <div className="w-1/3 sm:w-1/5 relative flex justify-center items-center flex-col mt-[3rem]">
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="relative fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent100}
                className="relative animate-circleAnimSm11 fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
            </svg>
            <p className="text-center font-bold mt-1 dark:text-rose-400 text-rose-500">
              Motivation
            </p>
          </div>
          <div className="top-[25%] absolute dark:text-gray-50 text-gray-900">
            <h3 className="md:text-2xl text-xl dark:text-gray-50 text-gray-900">
              100<span className="text-xs sm:text-sm">%</span>
            </h3>
          </div>
        </div>
        <div className="w-1/3 sm:w-1/5 relative flex justify-center items-center flex-col mt-[3rem]">
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="relative fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent100}
                className="relative animate-circleAnimSm8 fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
                cx="45"
                cy="45"
                r="40"
              ></circle>
            </svg>
            <p className="text-center font-bold mt-1 dark:text-rose-400 text-rose-500">
              DeadLine
            </p>
          </div>
          <div className="top-[25%] absolute dark:text-gray-50 text-gray-900">
            <h3 className="md:text-2xl text-xl dark:text-gray-50 text-gray-900">
              100<span className="text-xs sm:text-sm">%</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
