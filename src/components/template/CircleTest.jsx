import React from "react";

const CircleTest = (props) => {
  return (
    <circle
      style={props.style}
      className="relative fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
      cx="45"
      cy="45"
      r="40"
    ></circle>
  );
};

export default CircleTest;
