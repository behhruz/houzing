import React from "react";
import { GenericInputs } from "../generic/Input";
import { Button } from "../generic/button/index";
import { Container } from "./style";

export const Filter = () => {
  return (
    <>
      <Container>
        <GenericInputs
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        />
        <Button type={"light"}>Advanced</Button>
        <Button type={"primary"}>Search</Button>
      </Container>
    </>
  );
};
export default Filter;
