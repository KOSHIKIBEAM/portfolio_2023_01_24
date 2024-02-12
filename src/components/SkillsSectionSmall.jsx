import React from "react";
import CircleResSmall from "./template/CircleResSmall";
import CircleSmall from "./template/CircleSmall";

const SkillsSectionSmall = () => {
  const Base = {
    strokeDashoffset: "calc(440 - (440 * 100) / 100)",
    stroke: "#e2e8f0",
    position: "relative",
    fill: "none",
    strokeWidth: "10",
    strokeDasharray: "252",
    strokeLinecap: "round",
  };
  const Base_Sm = {
    strokeDashoffset: "calc(252 - (252 * 100) / 100)",
    stroke: "#e2e8f0",
    position: "relative",
    fill: "none",
    strokeWidth: "6",
    strokeDasharray: "252",
    strokeLinecap: "round",
  };
  const Box = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const Percent100_1 = {
    strokeDashoffset: "calc(440 - (440 * 100) / 100)",
    stroke: "#fc4103",
    animation: "circleAnim 1s forwards 1.35s",
  };
  const Percent100_Sm_1 = {
    strokeDashoffset: "calc(252 - (252 * 100) / 100)",
    stroke: "#fc4103",
    animation: "circleAnimSm 1s forwards 1.35s",
  };
  const Percent100_6 = {
    strokeDashoffset: "calc(440 - (440 * 100) / 100)",
    stroke: "#fc4103",
    animation: "circleAnim 1s forwards .15s",
  };
  const Percent100_Sm_6 = {
    strokeDashoffset: "calc(252 - (252 * 100) / 100)",
    stroke: "#fc4103",
    animation: "circleAnimSm 1s forwards .15s",
  };
  const Percent100_7 = {
    strokeDashoffset: "calc(440 - (440 * 100) / 100)",
    stroke: "#fc4103",
    animation: "circleAnim 1s forwards 1.25s",
  };
  const Percent100_Sm_7 = {
    strokeDashoffset: "calc(252 - (252 * 100) / 100)",
    stroke: "#fc4103",
    animation: "circleAnimSm 1s forwards 1.25s",
  };
  const Percent100_14 = {
    strokeDashoffset: "calc(440 - (440 * 100) / 100)",
    stroke: "#fc4103",
    animation: "circleAnim 1s forwards 1.15s",
  };
  const Percent100_Sm_14 = {
    strokeDashoffset: "calc(252 - (252 * 100) / 100)",
    stroke: "#fc4103",
    animation: "circleAnimSm 1s forwards 1.15s",
  };
  const Percent100_15 = {
    strokeDashoffset: "calc(440 - (440 * 100) / 100)",
    stroke: "#fc4103",
    animation: "circleAnim 1s forwards .55s",
  };
  const Percent100_Sm_15 = {
    strokeDashoffset: "calc(252 - (252 * 100) / 100)",
    stroke: "#fc4103",
    animation: "circleAnimSm 1s forwards .55s",
  };
  const Percent95_2 = {
    strokeDashoffset: "calc(440 - (440 * 95) / 100)",
    stroke: "#fc7f03",
    animation: "circleAnim 1s forwards 1.45s",
  };
  const Percent95_Sm_2 = {
    strokeDashoffset: "calc(252 - (252 * 95) / 100)",
    stroke: "#fc7f03",
    animation: "circleAnimSm 1s forwards 1.45s",
  };
  const Percent95_3 = {
    strokeDashoffset: "calc(440 - (440 * 95) / 100)",
    stroke: "#fc7f03",
    animation: "circleAnim 1s forwards 0s",
  };
  const Percent95_Sm_3 = {
    strokeDashoffset: "calc(252 - (252 * 95) / 100)",
    stroke: "#fc7f03",
    animation: "circleAnimSm 1s forwards 0s",
  };
  const Percent95_4 = {
    strokeDashoffset: "calc(440 - (440 * 95) / 100)",
    stroke: "#fc7f03",
    animation: "circleAnim 1s forwards .75s",
  };
  const Percent95_Sm_4 = {
    strokeDashoffset: "calc(252 - (252 * 95) / 100)",
    stroke: "#fc7f03",
    animation: "circleAnimSm 1s forwards .75s",
  };
  const Percent95_8 = {
    strokeDashoffset: "calc(440 - (440 * 95) / 100)",
    stroke: "#fc7f03",
    animation: "circleAnim 1s forwards .65s",
  };
  const Percent95_Sm_8 = {
    strokeDashoffset: "calc(252 - (252 * 95) / 100)",
    stroke: "#fc7f03",
    animation: "circleAnimSm 1s forwards .65s",
  };
  const Percent95_9 = {
    strokeDashoffset: "calc(440 - (440 * 95) / 100)",
    stroke: "#fc7f03",
    animation: "circleAnim 1s forwards .05s",
  };
  const Percent95_Sm_9 = {
    strokeDashoffset: "calc(252 - (252 * 95) / 100)",
    stroke: "#fc7f03",
    animation: "circleAnimSm 1s forwards .05s",
  };
  const Percent95_10 = {
    strokeDashoffset: "calc(440 - (440 * 95) / 100)",
    stroke: "#fc7f03",
    animation: "circleAnim 1s forwards .95s",
  };
  const Percent95_Sm_10 = {
    strokeDashoffset: "calc(252 - (252 * 95) / 100)",
    stroke: "#fc7f03",
    animation: "circleAnimSm 1s forwards .95s",
  };
  const Percent85_5 = {
    strokeDashoffset: "calc(440 - (440 * 85) / 100)",
    stroke: "#fcc203",
    animation: "circleAnimSm 1s forwards .45s",
  };
  const Percent85_Sm_5 = {
    strokeDashoffset: "calc(252 - (252 * 85) / 100)",
    stroke: "#fcc203",
    animation: "circleAnimSm 1s forwards .45s",
  };
  const Percent75_13 = {
    strokeDashoffset: "calc(440 - (440 * 75) / 100)",
    stroke: " #03a9f4",
    animation: "circleAnim 1s forwards .35s",
  };
  const Percent75_Sm_13 = {
    strokeDashoffset: "calc(252 - (252 * 75) / 100)",
    stroke: " #03a9f4",
    animation: "circleAnimSm 1s forwards .35s",
  };
  const Percent65_11 = {
    strokeDashoffset: "calc(440 - (440 * 65) / 100)",
    stroke: " #03a9f4",
    animation: "circleAnim 1s forwards .85s",
  };
  const Percent65_Sm_11 = {
    strokeDashoffset: "calc(252 - (252 * 65) / 100)",
    stroke: " #03a9f4",
    animation: "circleAnimSm 1s forwards .85s",
  };
  const Percent50_12 = {
    strokeDashoffset: "calc(440 - (440 * 50) / 100)",
    stroke: " #03a9f4",
    animation: "circleAnim 1s forwards .95s",
  };
  const Percent50_Sm_12 = {
    strokeDashoffset: "calc(252 - (252 * 50) / 100)",
    stroke: " #03a9f4",
    animation: "circleAnimSm 1s forwards .95s",
  };
  const Number = {
    position: "absolute",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
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
        <div className="w-1/3 h-[185px] sm:h-[250px]" style={Box}>
          <div className="sm:w-[150px] sm:h-[150px] w-[95px] h-[205px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <CircleResSmall style={Base_Sm} />
              <CircleSmall style={Base} />
              <CircleResSmall style={Percent100_Sm_1} />
              <CircleSmall style={Percent100_1} />
            </svg>
            <div style={Number} className="sm:top-0 top-[6%]">
              <h3 className="sm:text-4xl text-xl dark:text-gray-50 text-gray-900">
                100<span className="text-sm sm:text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm sm:text-lg">
              HTML/CSS
            </p>
          </div>
        </div>

        <div className="w-1/3 h-[185px] sm:h-[250px]" style={Box}>
          <div className="sm:w-[150px] sm:h-[150px] w-[95px] h-[205px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <CircleResSmall style={Base_Sm} />
              <CircleSmall style={Base} />
              <CircleResSmall style={Percent95_Sm_2} />
              <CircleSmall style={Percent95_2} />
            </svg>
            <div style={Number} className="sm:top-0 top-[6%]">
              <h3 className="sm:text-4xl text-xl dark:text-gray-50 text-gray-900">
                95<span className="text-sm sm:text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm sm:text-lg">
              Sass
            </p>
          </div>
        </div>

        <div className="w-1/3 h-[185px] sm:h-[250px]" style={Box}>
          <div className="sm:w-[150px] sm:h-[150px] w-[95px] h-[205px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <CircleResSmall style={Base_Sm} />
              <CircleSmall style={Base} />
              <CircleResSmall style={Percent95_Sm_3} />
              <CircleSmall style={Percent95_3} />
            </svg>
            <div style={Number} className="sm:top-0 top-[6%]">
              <h3 className="sm:text-4xl text-xl dark:text-gray-50 text-gray-900">
                95<span className="text-sm sm:text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm sm:text-lg">
              JavaScript
            </p>
          </div>
        </div>

        <div className="w-1/3 h-[185px] sm:h-[250px]" style={Box}>
          <div className="sm:w-[150px] sm:h-[150px] w-[95px] h-[205px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <CircleResSmall style={Base_Sm} />
              <CircleSmall style={Base} />
              <CircleResSmall style={Percent95_Sm_4} />
              <CircleSmall style={Percent95_4} />
            </svg>
            <div style={Number} className="sm:top-0 top-[6%]">
              <h3 className="sm:text-4xl text-xl dark:text-gray-50 text-gray-900">
                95<span className="text-sm sm:text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm sm:text-lg">
              WordPress
            </p>
          </div>
        </div>

        <div className="w-1/3 h-[185px] sm:h-[250px]" style={Box}>
          <div className="sm:w-[150px] sm:h-[150px] w-[95px] h-[205px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <CircleResSmall style={Base_Sm} />
              <CircleSmall style={Base} />
              <CircleResSmall style={Percent85_Sm_5} />
              <CircleSmall style={Percent85_5} />
            </svg>
            <div style={Number} className="sm:top-0 top-[6%]">
              <h3 className="sm:text-4xl text-xl dark:text-gray-50 text-gray-900">
                85<span className="text-sm sm:text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm sm:text-lg">
              jQuery
            </p>
          </div>
        </div>

        <div className="w-1/3 h-[185px] sm:h-[250px]" style={Box}>
          <div className="sm:w-[150px] sm:h-[150px] w-[95px] h-[205px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <CircleResSmall style={Base_Sm} />
              <CircleSmall style={Base} />
              <CircleResSmall style={Percent100_Sm_6} />
              <CircleSmall style={Percent100_6} />
            </svg>
            <div style={Number} className="sm:top-0 top-[6%]">
              <h3 className="sm:text-4xl text-xl dark:text-gray-50 text-gray-900">
                100<span className="text-sm sm:text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm sm:text-lg">
              Figma
            </p>
          </div>
        </div>

        <div className="w-1/3 h-[185px] sm:h-[250px]" style={Box}>
          <div className="sm:w-[150px] sm:h-[150px] w-[95px] h-[205px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <CircleResSmall style={Base_Sm} />
              <CircleSmall style={Base} />
              <CircleResSmall style={Percent100_Sm_7} />
              <CircleSmall style={Percent100_7} />
            </svg>
            <div style={Number} className="sm:top-0 top-[6%]">
              <h3 className="sm:text-4xl text-xl dark:text-gray-50 text-gray-900">
                100<span className="text-sm sm:text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm sm:text-lg">
              Adobe XD
            </p>
          </div>
        </div>

        <div className="w-1/3 h-[185px] sm:h-[250px]" style={Box}>
          <div className="sm:w-[150px] sm:h-[150px] w-[95px] h-[205px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <CircleResSmall style={Base_Sm} />
              <CircleSmall style={Base} />
              <CircleResSmall style={Percent95_Sm_8} />
              <CircleSmall style={Percent95_8} />
            </svg>
            <div style={Number} className="sm:top-0 top-[3%]">
              <h3 className="sm:text-4xl text-xl dark:text-gray-50 text-gray-900">
                95<span className="text-sm sm:text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm sm:text-lg">
              Adobe Photoshop
            </p>
          </div>
        </div>

        <div className="w-1/3 h-[185px] sm:h-[250px]" style={Box}>
          <div className="sm:w-[150px] sm:h-[150px] w-[95px] h-[205px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <CircleResSmall style={Base_Sm} />
              <CircleSmall style={Base} />
              <CircleResSmall style={Percent95_Sm_9} />
              <CircleSmall style={Percent95_9} />
            </svg>
            <div style={Number} className="sm:top-0 top-[3%]">
              <h3 className="sm:text-4xl text-xl dark:text-gray-50 text-gray-900">
                95<span className="text-sm sm:text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm sm:text-lg">
              Adobe Illustrator
            </p>
          </div>
        </div>

        <div className="w-1/3 h-[185px] sm:h-[250px]" style={Box}>
          <div className="sm:w-[150px] sm:h-[150px] w-[95px] h-[205px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <CircleResSmall style={Base_Sm} />
              <CircleSmall style={Base} />
              <CircleResSmall style={Percent95_Sm_10} />
              <CircleSmall style={Percent95_10} />
            </svg>
            <div style={Number} className="sm:top-0 top-[6%]">
              <h3 className="sm:text-4xl text-xl dark:text-gray-50 text-gray-900">
                95<span className="text-sm sm:text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm sm:text-lg">
              Bootstrap
            </p>
          </div>
        </div>

        <div className="w-1/3 h-[185px] sm:h-[250px]" style={Box}>
          <div className="sm:w-[150px] sm:h-[150px] w-[95px] h-[205px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <CircleResSmall style={Base_Sm} />
              <CircleSmall style={Base} />
              <CircleResSmall style={Percent65_Sm_11} />
              <CircleSmall style={Percent65_11} />
            </svg>
            <div style={Number} className="sm:top-0 top-[6%]">
              <h3 className="sm:text-4xl text-xl dark:text-gray-50 text-gray-900">
                65<span className="text-sm sm:text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm sm:text-lg">
              gulp
            </p>
          </div>
        </div>

        <div className="w-1/3 h-[185px] sm:h-[250px]" style={Box}>
          <div className="sm:w-[150px] sm:h-[150px] w-[95px] h-[205px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <CircleResSmall style={Base_Sm} />
              <CircleSmall style={Base} />
              <CircleResSmall style={Percent50_Sm_12} />
              <CircleSmall style={Percent50_12} />
            </svg>
            <div style={Number} className="sm:top-0 top-[6%]">
              <h3 className="sm:text-4xl text-xl dark:text-gray-50 text-gray-900">
                50<span className="text-sm sm:text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm sm:text-lg">
              React
            </p>
          </div>
        </div>

        <div className="w-1/3 h-[185px] sm:h-[250px]" style={Box}>
          <div className="sm:w-[150px] sm:h-[150px] w-[95px] h-[205px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <CircleResSmall style={Base_Sm} />
              <CircleSmall style={Base} />
              <CircleResSmall style={Percent75_Sm_13} />
              <CircleSmall style={Percent75_13} />
            </svg>
            <div style={Number} className="sm:top-0 top-[6%]">
              <h3 className="sm:text-4xl text-xl dark:text-gray-50 text-gray-900">
                75<span className="text-sm sm:text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm sm:text-lg">
              Tailwind css
            </p>
          </div>
        </div>

        <div className="w-1/3 h-[185px] sm:h-[250px]" style={Box}>
          <div className="sm:w-[150px] sm:h-[150px] w-[95px] h-[205px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <CircleResSmall style={Base_Sm} />
              <CircleSmall style={Base} />
              <CircleResSmall style={Percent100_Sm_14} />
              <CircleSmall style={Percent100_14} />
            </svg>
            <div style={Number} className="sm:top-0 top-[6%]">
              <h3 className="sm:text-4xl text-xl dark:text-gray-50 text-gray-900">
                100<span className="text-sm sm:text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm sm:text-lg">
              Motivation
            </p>
          </div>
        </div>

        <div className="w-1/3 h-[185px] sm:h-[250px]" style={Box}>
          <div className="sm:w-[150px] sm:h-[150px] w-[95px] h-[205px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <CircleResSmall style={Base_Sm} />
              <CircleSmall style={Base} />
              <CircleResSmall style={Percent100_Sm_15} />
              <CircleSmall style={Percent100_15} />
            </svg>
            <div style={Number} className="sm:top-0 top-[6%]">
              <h3 className="sm:text-4xl text-xl dark:text-gray-50 text-gray-900">
                100<span className="text-sm sm:text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm sm:text-lg">
              DeadLine
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSectionSmall;
