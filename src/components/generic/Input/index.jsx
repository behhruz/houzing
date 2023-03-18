import React from "react";
import { GenericInput, Buttonn } from "./style";
export const GenericInputs = ({
  type,
  onChange,
  placeholder,
  name,
  value,
  defaultValue,
  width,
  height,
  icon,
}) => {
  return (
    <>
      <GenericInput
        icon={icon}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        value={value}
        defaultValue={defaultValue}
        width={width}
        height={height}
      />
    </>
  );
};
export default GenericInputs;
