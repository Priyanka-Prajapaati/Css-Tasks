import React, { FC } from "react";
const borderColors = {
  border1: "border-blue-500",
  border2: " border-black-500",
  border3: " border-black",
  border4: " border-red-500",
};

const Input:FC<{
  type?: "border1" | "border2" | "border3" | "border4";
}> = ({ type="border1"}, props) => {
  const borderColor = borderColors[type];
  return (
    <div>
      <input
        className={`m-5 p-2  border-solid border-2 rounded ${borderColor}`}
        type="text"
        placeholder={props.text}
      >
      </input>
    </div>
  );
};

export default Input;
