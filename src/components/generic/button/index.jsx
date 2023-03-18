import React from "react";
import { GenericButton, Buttonn } from "./style";

export const Button = ({ children, type, onClick, width, height }) => {
  return (
    <>
      <GenericButton
        width={width}
        height={height}
        onClick={onClick}
        type={type}
      >
        {children || "Generic Button"}
      </GenericButton>
    </>
  );
};
export default Button;
