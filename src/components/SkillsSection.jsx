import React from "react";

const SkillsSection = () => {
  const Box = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const Percent100 = {
    strokeDashoffset: "calc(440 - (440 * 100) / 100)",
    stroke: "#fc4103",
    position: "relative",
    fill: "none",
    strokeWidth: "10",
    strokeDasharray: "440",
    strokeLinecap: "round",
  };
  const Percent95 = {
    strokeDashoffset: "calc(440 - (440 * 95) / 100)",
    stroke: "#fc7f03",
  };
  const Percent85 = {
    strokeDashoffset: "calc(440 - (440 * 85) / 100)",
    stroke: "#fcc203",
  };
  const Percent75 = {
    strokeDashoffset: "calc(440 - (440 * 75) / 100)",
    stroke: " #03a9f4",
  };
  const Percent65 = {
    strokeDashoffset: "calc(440 - (440 * 65) / 100)",
    stroke: " #03a9f4",
  };
  const Percent50 = {
    strokeDashoffset: "calc(440 - (440 * 50) / 100)",
    stroke: " #03a9f4",
  };
  const Number = {
    position: "absolute",
    top: " 0",
    left: " 0",
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
        <div className="w-full sm:w-1/3 h-[250px]" style={Box}>
          <div className="w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                className="relative stroke-slate-200 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440]"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent100}
                className="animate-circleAnim14"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-4xl dark:text-gray-50 text-gray-900">
                100<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-lg">HTML/CSS</p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-[250px]" style={Box}>
          <div className="w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                className="relative stroke-slate-200 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440]"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent95}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] animate-circleAnim15"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-4xl dark:text-gray-50 text-gray-900">
                95<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-lg">Sass</p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-[250px]" style={Box}>
          <div className="w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                className="relative stroke-slate-200 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440]"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent95}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] animate-circleAnim1"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-4xl dark:text-gray-50 text-gray-900">
                95<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-lg">JavaScript</p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-[250px]" style={Box}>
          <div className="w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                className="relative stroke-slate-200 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440]"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent95}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] animate-circleAnim8"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-4xl dark:text-gray-50 text-gray-900">
                95<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-lg">WordPress</p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-[250px]" style={Box}>
          <div className="w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                className="relative stroke-slate-200 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440]"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent85}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] animate-circleAnim5"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-4xl dark:text-gray-50 text-gray-900">
                85<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-lg">jQuery</p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-[250px]" style={Box}>
          <div className="w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                className="relative stroke-slate-200 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440]"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent100}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] animate-circleAnim3"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-4xl dark:text-gray-50 text-gray-900">
                100<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-lg">Figma</p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-[250px]" style={Box}>
          <div className="w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                className="relative stroke-slate-200 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440]"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent100}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] animate-circleAnim13"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-4xl dark:text-gray-50 text-gray-900">
                100<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-lg">Adobe XD</p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-[250px]" style={Box}>
          <div className="w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                className="relative stroke-slate-200 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440]"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent95}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] animate-circleAnim7"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-4xl dark:text-gray-50 text-gray-900">
                95<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-lg">
              Adobe Photoshop
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-[250px]" style={Box}>
          <div className="w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                className="relative stroke-slate-200 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440]"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent95}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] animate-circleAnim2"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-4xl dark:text-gray-50 text-gray-900">
                95<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-lg">
              Adobe Illustrator
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-[250px]" style={Box}>
          <div className="w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                className="relative stroke-slate-200 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440]"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent95}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] animate-circleAnim11"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-4xl dark:text-gray-50 text-gray-900">
                95<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-lg">Bootstrap</p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-[250px]" style={Box}>
          <div className="w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                className="relative stroke-slate-200 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440]"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent65}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] animate-circleAnim9"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-4xl dark:text-gray-50 text-gray-900">
                65<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-lg">gulp</p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-[250px]" style={Box}>
          <div className="w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                className="relative stroke-slate-200 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440]"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent50}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] animate-circleAnim10"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-4xl dark:text-gray-50 text-gray-900">
                50<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-lg">React</p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-[250px]" style={Box}>
          <div className="w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                className="relative stroke-slate-200 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440]"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent75}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] animate-circleAnim4"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-4xl dark:text-gray-50 text-gray-900">
                75<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-lg">Tailwind css</p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-[250px]" style={Box}>
          <div className="w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                className="relative stroke-slate-200 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440]"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent100}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] animate-circleAnim12"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-4xl dark:text-gray-50 text-gray-900">
                100<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-lg">Motivation</p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 h-[250px]" style={Box}>
          <div className="w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                className="relative stroke-slate-200 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440]"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent100}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] animate-circleAnim6"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-4xl dark:text-gray-50 text-gray-900">
                100<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-lg">DeadLines</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
