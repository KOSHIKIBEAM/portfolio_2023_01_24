import React from "react";

const Circle = () => {
  const Box = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const Box_sp = {
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
  const Percent95_sp = {
    strokeDashoffset: "calc(346 - (346 * 95) / 100)",
    stroke: "#fc7f03",
  };
  const Percent85 = {
    strokeDashoffset: "calc(440 - (440 * 85) / 100)",
    stroke: "#fcc203",
    position: "relative",
    fill: "none",
    strokeWidth: "10",
    strokeDasharray: "440",
    strokeLinecap: "round",
  };
  const Percent75 = {
    strokeDashoffset: "calc(440 - (440 * 75) / 100)",
    stroke: " #03a9f4",
    position: "relative",
    fill: "none",
    strokeWidth: "10",
    strokeDasharray: "440",
    strokeLinecap: "round",
  };
  const Percent65 = {
    strokeDashoffset: "calc(440 - (440 * 65) / 100)",
    stroke: " #03a9f4",
    position: "relative",
    fill: "none",
    strokeWidth: "10",
    strokeDasharray: "440",
    strokeLinecap: "round",
  };
  const Percent50 = {
    strokeDashoffset: "calc(440 - (440 * 50) / 100)",
    stroke: " #03a9f4",
    position: "relative",
    fill: "none",
    strokeWidth: "10",
    strokeDasharray: "440",
    strokeLinecap: "round",
  };
  const Percent25Green = {
    strokeDashoffset: "calc(440 - (440 * 25) / 100)",
    stroke: "#1fd26c",
    position: "relative",
    fill: "none",
    strokeWidth: "10",
    strokeDasharray: "440",
    strokeLinecap: "round",
  };
  const Circle = {
    position: "relative",
    fill: "none",
    strokeWidth: "10",
    stroke: "#f3f3f3",
    strokeDasharray: "440",
    strokeDashoffset: "0",
    strokeLinecap: "round",
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
    <div id="pie-chart" className="content">
      <div className="md:flex md:justify-center md:items-center md:flex-wrap">
        <div className="w-1/3 md:h-[250px] h-[200px]" style={Box_sp}>
          <div className="w-[120px] h-[120px]">
            <svg className="-rotate-90 relative w-[120px] h-[120px]">
              <circle
                style={Circle}
                className="base"
                cx="60"
                cy="60"
                r="55"
              ></circle>
              <circle
                style={Percent100}
                className="line animate-circleAnim14"
                cx="60"
                cy="60"
                r="55"
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
        <div className="w-1/3 md:h-[250px] h-[200px]" style={Box_sp}>
          <div className="w-[120px] h-[120px]">
            <svg className="-rotate-90 relative w-[120px] h-[120px]">
              <circle
                style={Circle}
                className="base"
                cx="60"
                cy="60"
                r="55"
              ></circle>
              <circle
                style={Percent100}
                className="line animate-circleAnim14"
                cx="60"
                cy="60"
                r="55"
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
        <div className="w-1/3 md:h-[250px] h-[200px]" style={Box_sp}>
          <div className="w-[120px] h-[120px]">
            <svg className="-rotate-90 relative w-[120px] h-[120px]">
              <circle
                style={Circle}
                className="base"
                cx="60"
                cy="60"
                r="55"
              ></circle>
              <circle
                style={Percent100}
                className="line animate-circleAnim14"
                cx="60"
                cy="60"
                r="55"
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
        <div className="w-1/3 md:h-[250px] h-[200px]" style={Box_sp}>
          <div className="w-[120px] h-[120px]">
            <svg className="-rotate-90 relative w-[120px] h-[120px]">
              <circle
                style={Circle}
                className="base"
                cx="60"
                cy="60"
                r="55"
              ></circle>
              <circle
                style={Percent100}
                className="line animate-circleAnim14"
                cx="60"
                cy="60"
                r="55"
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
      </div>

      <div className="md:flex md:justify-center md:items-center md:flex-wrap">
        <div className="w-1/3 md:h-[250px] h-[200px]" style={Box}>
          <div className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
            <svg className="-rotate-90 relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block"
                cx="60"
                cy="60"
                r="55"
              ></circle>
              <circle
                style={Percent100}
                className="hidden md:block animate-circleAnim14"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent100}
                className="md:hidden block animate-circleAnim_sp14"
                cx="60"
                cy="60"
                r="55"
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
        <div className="w-1/3 md:h-[250px] h-[200px]" style={Box}>
          <div className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
            <svg className="-rotate-90 relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block"
                cx="60"
                cy="60"
                r="55"
              ></circle>
              <circle
                style={Percent95}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block animate-circleAnim15"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent95_sp}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block animate-circleAnim_sp15"
                cx="60"
                cy="60"
                r="55"
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
        <div className="w-1/3 md:h-[250px] h-[200px]" style={Box}>
          <div className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
            <svg className="-rotate-90 relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block"
                cx="60"
                cy="60"
                r="55"
              ></circle>
              <circle
                style={Percent95}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block animate-circleAnim1"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent95_sp}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block animate-circleAnim_sp1"
                cx="60"
                cy="60"
                r="55"
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
        <div className="w-1/3 md:h-[250px] h-[200px]" style={Box}>
          <div className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
            <svg className="-rotate-90 relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block"
                cx="60"
                cy="60"
                r="55"
              ></circle>
              <circle
                style={Percent95}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block animate-circleAnim8"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent95_sp}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block animate-circleAnim8"
                cx="60"
                cy="60"
                r="55"
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
        <div className="w-1/3 md:h-[250px] h-[200px]" style={Box}>
          <div className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
            <svg className="-rotate-90 relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block"
                cx="60"
                cy="60"
                r="55"
              ></circle>
              <circle
                style={Percent85}
                className="hidden md:block animate-circleAnim5"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent85}
                className="md:hidden block animate-circleAnim5"
                cx="60"
                cy="60"
                r="55"
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
        <div className="w-1/3 md:h-[250px] h-[200px]" style={Box}>
          <div className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
            <svg className="-rotate-90 relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block"
                cx="60"
                cy="60"
                r="55"
              ></circle>
              <circle
                style={Percent100}
                className="hidden md:block animate-circleAnim3"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent100}
                className="md:hidden block animate-circleAnim3"
                cx="60"
                cy="60"
                r="55"
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
        <div className="w-1/3 md:h-[250px] h-[200px]" style={Box}>
          <div className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
            <svg className="-rotate-90 relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block"
                cx="60"
                cy="60"
                r="55"
              ></circle>
              <circle
                style={Percent100}
                className="hidden md:block animate-circleAnim13"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent100}
                className="md:hidden block animate-circleAnim13"
                cx="60"
                cy="60"
                r="55"
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
        <div className="w-1/3 md:h-[250px] h-[200px]" style={Box}>
          <div className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
            <svg className="-rotate-90 relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block"
                cx="60"
                cy="60"
                r="55"
              ></circle>
              <circle
                style={Percent95}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block animate-circleAnim7"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent95_sp}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block animate-circleAnim7"
                cx="60"
                cy="60"
                r="55"
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
        <div className="w-1/3 md:h-[250px] h-[200px]" style={Box}>
          <div className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
            <svg className="-rotate-90 relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block"
                cx="60"
                cy="60"
                r="55"
              ></circle>
              <circle
                style={Percent95}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block animate-circleAnim2"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent95_sp}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block animate-circleAnim2"
                cx="60"
                cy="60"
                r="55"
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
        <div className="w-1/3 md:h-[250px] h-[200px]" style={Box}>
          <div className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
            <svg className="-rotate-90 relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block"
                cx="60"
                cy="60"
                r="55"
              ></circle>
              <circle
                style={Percent95}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block animate-circleAnim11"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent95_sp}
                className="relative fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block animate-circleAnim11"
                cx="60"
                cy="60"
                r="55"
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
        <div className="w-1/3 md:h-[250px] h-[200px]" style={Box}>
          <div className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
            <svg className="-rotate-90 relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block"
                cx="60"
                cy="60"
                r="55"
              ></circle>
              <circle
                style={Percent65}
                className="hidden md:block animate-circleAnim9"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent65}
                className="md:hidden block animate-circleAnim9"
                cx="60"
                cy="60"
                r="55"
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
        <div className="w-1/3 md:h-[250px] h-[200px]" style={Box}>
          <div className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
            <svg className="-rotate-90 relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block"
                cx="60"
                cy="60"
                r="55"
              ></circle>
              <circle
                style={Percent50}
                className="hidden md:block animate-circleAnim10"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent50}
                className="md:hidden block animate-circleAnim10"
                cx="60"
                cy="60"
                r="55"
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
        <div className="w-1/3 md:h-[250px] h-[200px]" style={Box}>
          <div className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
            <svg className="-rotate-90 relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block"
                cx="60"
                cy="60"
                r="55"
              ></circle>
              <circle
                style={Percent75}
                className="hidden md:block animate-circleAnim4"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent75}
                className="md:hidden block animate-circleAnim4"
                cx="60"
                cy="60"
                r="55"
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
        <div className="w-1/3 md:h-[250px] h-[200px]" style={Box}>
          <div className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
            <svg className="-rotate-90 relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block"
                cx="60"
                cy="60"
                r="55"
              ></circle>
              <circle
                style={Percent100}
                className="hidden md:block animate-circleAnim12"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent100}
                className="md:hidden block animate-circleAnim12"
                cx="60"
                cy="60"
                r="55"
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
        <div className="w-1/3 md:h-[250px] h-[200px]" style={Box}>
          <div className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
            <svg className="-rotate-90 relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]">
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] hidden md:block"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                className="relative stroke-slate-50 fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:346] md:hidden block"
                cx="60"
                cy="60"
                r="55"
              ></circle>
              <circle
                style={Percent100}
                className="hidden md:block animate-circleAnim6"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent100}
                className="md:hidden block animate-circleAnim6"
                cx="60"
                cy="60"
                r="55"
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
    </div>
  );
};

export default Circle;
