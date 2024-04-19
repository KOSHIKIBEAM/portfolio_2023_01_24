import React from "react";
import { useInView } from "react-intersection-observer";

const SkillsSection = () => {
  const Base = {
    strokeDashoffset: "calc(252 - (252 * 100) / 100)",
    stroke: "#e2e8f0",
  };

  const Percent100 = {
    stroke: "#fc4103",
  };

  const Percent95 = {
    stroke: "#fc7f03",
    strokeDashoffset: "calc(252 - (252 * 95) / 100)",
  };
  const Percent85 = {
    stroke: "#fcc203",
    strokeDashoffset: "calc(252 - (252 * 85) / 100)",
  };
  const Percent75 = {
    stroke: "#03a9f4",
    strokeDashoffset: "calc(252 - (252 * 75) / 100)",
  };
  const Percent65 = {
    strokeDashoffset: "calc(252 - (252 * 65) / 100)",
    stroke: "#03a9f4",
  };
  const Percent50 = {
    strokeDashoffset: "calc(252 - (252 * 50) / 100)",
    stroke: "#03a9f4",
  };
  const { ref: skillSectionRef, inView: skillSectionIsVisible } = useInView();
  const { ref: sectionTitleRef, inView: sectionTitleIsVisible } = useInView();
  return (
    <section
      id="skill"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      ref={sectionTitleRef}
    >
      <h2
        className={`text-3xl font-bold pb-10 tracking-tight sm:text-4xl ${
          sectionTitleIsVisible ? "animate-fadeInRight" : ""
        }`}
      >
        Skill
      </h2>
      <div
        className="flex justify-center items-center flex-wrap"
        ref={skillSectionRef}
      >
        <div
          className={`w-1/3 sm:w-1/5 delay500 relative flex justify-center items-center flex-col ${
            skillSectionIsVisible ? "animate-fadeInRight" : ""
          }`}
        >
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="circle_base"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent100}
                className="animate-circleAnim14 circle_base"
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
        <div
          className={`w-1/3 sm:w-1/5 delay500 relative flex justify-center items-center flex-col ${
            skillSectionIsVisible ? "animate-fadeInRight" : ""
          }`}
        >
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="circle_base"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent95}
                className="animate-circleAnim2 circle_base"
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
        <div
          className={`w-1/3 sm:w-1/5 delay500 relative flex justify-center items-center flex-col ${
            skillSectionIsVisible ? "animate-fadeInRight" : ""
          }`}
        >
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="circle_base"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent95}
                className="animate-circleAnim13 circle_base"
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
        <div
          className={`w-1/3 sm:w-1/5 delay500_1000 relative flex justify-center items-center flex-col mt-[3rem] sm:mt-[0px] ${
            skillSectionIsVisible ? "animate-fadeInRight" : ""
          }`}
        >
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="circle_base"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent95}
                className="animate-circleAnim4 circle_base"
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
        <div
          className={`w-1/3 sm:w-1/5 delay500_1000 relative flex justify-center items-center flex-col mt-[3rem] sm:mt-[0px] ${
            skillSectionIsVisible ? "animate-fadeInRight" : ""
          }`}
        >
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="circle_base"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent85}
                className="animate-circleAnim3 circle_base"
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
        <div
          className={`w-1/3 sm:w-1/5 delay1000 relative flex justify-center items-center flex-col mt-[3rem] ${
            skillSectionIsVisible ? "animate-fadeInRight" : ""
          }`}
        >
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="circle_base"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent100}
                className="animate-circleAnim10 circle_base"
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
        <div
          className={`w-1/3 sm:w-1/5 delay1000_1500 relative flex justify-center items-center flex-col mt-[3rem] ${
            skillSectionIsVisible ? "animate-fadeInRight" : ""
          }`}
        >
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="circle_base"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent95}
                className="animate-circleAnim5 circle_base"
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
        <div
          className={`w-1/3 sm:w-1/5 delay1000_1500 relative flex justify-center items-center flex-col mt-[3rem] ${
            skillSectionIsVisible ? "animate-fadeInRight" : ""
          }`}
        >
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="circle_base"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent95}
                className="animate-circleAnim12 circle_base"
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
        <div
          className={`w-1/3 sm:w-1/5 delay1000_1500 relative flex justify-center items-center flex-col mt-[3rem] ${
            skillSectionIsVisible ? "animate-fadeInRight" : ""
          }`}
        >
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="circle_base"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent95}
                className="animate-circleAnim6 circle_base"
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
        <div
          className={`w-1/3 sm:w-1/5 delay1000_2000 relative flex justify-center items-center flex-col mt-[3rem] ${
            skillSectionIsVisible ? "animate-fadeInRight" : ""
          }`}
        >
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="circle_base"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent95}
                className="animate-circleAnim7 circle_base"
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
        <div
          className={`w-1/3 sm:w-1/5 delay1500_2000 relative flex justify-center items-center flex-col mt-[3rem] ${
            skillSectionIsVisible ? "animate-fadeInRight" : ""
          }`}
        >
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="circle_base"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent65}
                className="animate-circleAnim9 circle_base"
                cx="45"
                cy="45"
                r="40"
              ></circle>
            </svg>
            <p className="text-center font-bold mt-1">gulp</p>
          </div>
          <div className="top-[25%] absolute dark:text-gray-50 text-gray-900">
            <h3 className="md:text-2xl text-xl dark:text-gray-50 text-gray-900">
              65<span className="text-xs sm:text-sm">%</span>
            </h3>
          </div>
        </div>
        <div
          className={`w-1/3 sm:w-1/5 delay1500_2000 relative flex justify-center items-center flex-col mt-[3rem] ${
            skillSectionIsVisible ? "animate-fadeInRight" : ""
          }`}
        >
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="circle_base"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent50}
                className="animate-circleAnim1 circle_base"
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
        <div
          className={`w-1/3 sm:w-1/5 delay1500_2500 relative flex justify-center items-center flex-col mt-[3rem] ${
            skillSectionIsVisible ? "animate-fadeInRight" : ""
          }`}
        >
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="circle_base"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent75}
                className="animate-circleAnim15 circle_base"
                cx="45"
                cy="45"
                r="40"
              ></circle>
            </svg>
            <p className="text-center font-bold mt-1">TailwindCss</p>
          </div>
          <div className="top-[25%] absolute dark:text-gray-50 text-gray-900">
            <h3 className="md:text-2xl text-xl dark:text-gray-50 text-gray-900">
              75<span className="text-xs sm:text-sm">%</span>
            </h3>
          </div>
        </div>
        <div
          className={`w-1/3 sm:w-1/5 delay1500_2500 relative flex justify-center items-center flex-col mt-[3rem] ${
            skillSectionIsVisible ? "animate-fadeInRight" : ""
          }`}
        >
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="circle_base"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent100}
                className="animate-circleAnim11 circle_base"
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
        <div
          className={`w-1/3 sm:w-1/5 delay1500_2500 relative flex justify-center items-center flex-col mt-[3rem] ${
            skillSectionIsVisible ? "animate-fadeInRight" : ""
          }`}
        >
          <div className="flex justify-center items-center flex-col">
            <svg className="-rotate-90 w-[90px] h-[90px]">
              <circle
                style={Base}
                className="circle_base"
                cx="45"
                cy="45"
                r="40"
              ></circle>
              <circle
                style={Percent100}
                className="animate-circleAnim8 circle_base"
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
