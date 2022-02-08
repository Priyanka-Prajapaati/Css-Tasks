import React, { FC } from "react";
const bgColors = {
  primary: "bg-blue-500",
  success: " bg-green-500",
  warning: " bg-yellow-500",
  danger: " bg-red-500",
};

const Button: FC<{
  type?: "primary" | "success" | "warning" | "danger";
  size?: "lg"|"md" | "sm";
}> = ({ children, type="primary", size="sm" }) => {
  const bgColor = bgColors[type];
  return (
    <>
      <button
        className={`m-5 p-5 ${bgColor} ${size} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
      >
        {children}
      </button>
    </>
  );
};
export default Button
