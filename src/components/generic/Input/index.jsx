import React from "react";
import { GenericInput, Buttonn, Wrapper, Icon } from "./style";
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
  prefix,
}) => {
  return (
    <>
      <Wrapper>
        {" "}
        <Icon>{icon}</Icon>
        <GenericInput
          prefix={prefix}
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
      </Wrapper>
    </>
  );
};
export default GenericInputs;
