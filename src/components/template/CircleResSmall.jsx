import React from "react";

const CircleResSmall = (props) => {
  return (
    <circle
      style={props.style}
      className="relative block sm:hidden fill-none [stroke-linecap:round] [stroke-width:6] [stroke-dasharray:252]"
      cx="45"
      cy="45"
      r="40"
    ></circle>
  );
};

export default CircleResSmall;
