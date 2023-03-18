import React from "react";
import { GenericButton, Buttonn } from "./style";
export const GenericInputs = ({
  type,
  onChange,
  placeholder,
  name,
  value,
  defaultValue,
  width,
  height,
}) => {
  return (
    <>
      <GenericButton
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
