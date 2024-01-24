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
  const Red = {
    strokeDashoffset: "154",
    stroke: "#ff3051",
    position: "relative",
    fill: "none",
    strokeWidth: "10",
    strokeDasharray: "440",
    strokeLinecap: "round",
  };
  const Blue = {
    strokeDashoffset: "52.8",
    stroke: " #03a9f4",
    position: "relative",
    fill: "none",
    strokeWidth: "10",
    strokeDasharray: "440",
    strokeLinecap: "round",
  };
  const Green = {
    strokeDashoffset: "321.2",
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
                style={Red}
                className="line animate-circleAnim"
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
            <p className="pt-2.5 text-center font-bold text-sm">Graph 02</p>
          </div>
        </div>
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
                style={Green}
                className="line animate-circleAnim"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-5xl dark:text-gray-50 text-gray-900">
                27<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm">Graph 03</p>
          </div>
        </div>
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
                style={Blue}
                className="line animate-circleAnim"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-5xl dark:text-gray-50 text-gray-900">
                88<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm">Graph 01</p>
          </div>
        </div>
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
                style={Red}
                className="line animate-circleAnim"
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
            <p className="pt-2.5 text-center font-bold text-sm">Graph 02</p>
          </div>
        </div>
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
                style={Green}
                className="line animate-circleAnim"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-5xl dark:text-gray-50 text-gray-900">
                27<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm">Graph 03</p>
          </div>
        </div>
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
                style={Blue}
                className="line animate-circleAnim"
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
            <div style={Number}>
              <h3 className="text-5xl dark:text-gray-50 text-gray-900">
                88<span className="text-xl">%</span>
              </h3>
            </div>
            <p className="pt-2.5 text-center font-bold text-sm">Graph 01</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle;
