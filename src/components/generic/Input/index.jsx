import React, { forwardRef } from "react";
import { GenericInput, Wrapper, Icon } from "./style";
export const GenericInputs = forwardRef(
  (
    {
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
    },
    ref
  ) => {
    return (
      <>
        <Wrapper>
          {" "}
          <Icon>{icon}</Icon>
          <GenericInput
            ref={ref}
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
  }
);
export default GenericInputs;
