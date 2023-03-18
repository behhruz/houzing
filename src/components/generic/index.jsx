import React from "react";
import { GenericButton, Buttonn } from "../generic/button/style";

export const Button = ({ children, type, onClick }) => {
  return (
    <>
      <GenericButton onClick={onClick} type={type}>
        {children || 'Generic Button'}
      </GenericButton>
    </>
  );
};
export default Button;
