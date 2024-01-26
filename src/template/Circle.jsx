import React from "react";

const Circle = () => {
  const Box = {
    position: "relative",
    height: "250px",
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
    position: "relative",
    fill: "none",
    strokeWidth: "10",
    strokeDasharray: "440",
    strokeLinecap: "round",
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
        {/* HTML/CSS */}
        <div className="w-1/3" style={Box}>
          <div className="relative w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                style={Circle}
                className="base"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent100}
                className="line animate-circleAnim14"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-5xl dark:text-gray-50 text-gray-900">
                100<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm">HTML/CSS</p>
          </div>
        </div>
        {/* Sass */}
        <div className="w-1/3" style={Box}>
          <div className="relative w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                style={Circle}
                className="base"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent95}
                className="line animate-circleAnim15"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-5xl dark:text-gray-50 text-gray-900">
                95<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm">Sass</p>
          </div>
        </div>
        {/* JavaScript */}
        <div className="w-1/3" style={Box}>
          <div className="relative w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                style={Circle}
                className="base"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent95}
                className="line animate-circleAnim1"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-5xl dark:text-gray-50 text-gray-900">
                95<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm">JavaScript</p>
          </div>
        </div>
        {/* WordPress */}
        <div className="w-1/3" style={Box}>
          <div className="relative w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                style={Circle}
                className="base"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent95}
                className="line animate-circleAnim8"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-5xl dark:text-gray-50 text-gray-900">
                95<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm">WordPress</p>
          </div>
        </div>
        {/* jQuery */}
        <div className="w-1/3" style={Box}>
          <div className="relative w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                style={Circle}
                className="base"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent85}
                className="line animate-circleAnim5"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-5xl dark:text-gray-50 text-gray-900">
                85<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm">jQuery</p>
          </div>
        </div>
        {/* Figma */}
        <div className="w-1/3" style={Box}>
          <div className="relative w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                style={Circle}
                className="base"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent100}
                className="line animate-circleAnim3"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-5xl dark:text-gray-50 text-gray-900">
                100<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm">Figma</p>
          </div>
        </div>
        {/* Adobe XD */}
        <div className="w-1/3" style={Box}>
          <div className="relative w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                style={Circle}
                className="base"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent100}
                className="line animate-circleAnim13"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-5xl dark:text-gray-50 text-gray-900">
                100<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm">Adobe XD</p>
          </div>
        </div>
        {/* Adobe Photoshop */}
        <div className="w-1/3" style={Box}>
          <div className="relative w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                style={Circle}
                className="base"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent95}
                className="line animate-circleAnim7"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-5xl dark:text-gray-50 text-gray-900">
                95<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm">
              Adobe Photoshop
            </p>
          </div>
        </div>
        {/* Adobe Illustrator */}
        <div className="w-1/3" style={Box}>
          <div className="relative w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                style={Circle}
                className="base"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent95}
                className="line animate-circleAnim2"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-5xl dark:text-gray-50 text-gray-900">
                95<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm">
              Adobe Illustrator
            </p>
          </div>
        </div>
        {/* Bootstrap */}
        <div className="w-1/3" style={Box}>
          <div className="relative w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                style={Circle}
                className="base"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent95}
                className="line animate-circleAnim11"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-5xl dark:text-gray-50 text-gray-900">
                95<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm">Bootstrap</p>
          </div>
        </div>
        {/* gulp */}
        <div className="w-1/3" style={Box}>
          <div className="relative w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                style={Circle}
                className="base"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent65}
                className="line animate-circleAnim9"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-5xl dark:text-gray-50 text-gray-900">
                65<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm">gulp</p>
          </div>
        </div>
        {/* react */}
        <div className="w-1/3" style={Box}>
          <div className="relative w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                style={Circle}
                className="base"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent50}
                className="line animate-circleAnim10"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-5xl dark:text-gray-50 text-gray-900">
                50<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm">React</p>
          </div>
        </div>
        {/* tailwind css */}
        <div className="w-1/3" style={Box}>
          <div className="relative w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                style={Circle}
                className="base"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent75}
                className="line animate-circleAnim4"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-5xl dark:text-gray-50 text-gray-900">
                75<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm">Tailwind css</p>
          </div>
        </div>
        {/* Motivation*/}
        <div className="w-1/3" style={Box}>
          <div className="relative w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                style={Circle}
                className="base"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent100}
                className="line animate-circleAnim12"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-5xl dark:text-gray-50 text-gray-900">
                100<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm">Motivation</p>
          </div>
        </div>
        {/* DeadLine */}
        <div className="w-1/3" style={Box}>
          <div className="relative w-[150px] h-[150px]">
            <svg className="-rotate-90 relative w-[150px] h-[150px]">
              <circle
                style={Circle}
                className="base"
                cx="75"
                cy="75"
                r="70"
              ></circle>
              <circle
                style={Percent100}
                className="line animate-circleAnim6"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-5xl dark:text-gray-50 text-gray-900">
                100<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm">DeadLines</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle;
