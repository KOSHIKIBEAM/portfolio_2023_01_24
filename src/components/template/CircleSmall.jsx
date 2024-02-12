import React from "react";

const CircleSmall = (props) => {
  return (
    <circle
      style={props.style}
      className="relative hidden sm:block fill-none [stroke-linecap:round] [stroke-width:10] [stroke-dasharray:440] animate-circleAnim8"
      cx="75"
      cy="75"
      r="70"
    ></circle>
  );
};

export default CircleSmall;
