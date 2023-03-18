import React from "react";
import { GenericInputs } from "../generic/Input";
import { Button } from "../generic/button/index";
import { Container, Icons } from "./style";

export const Filter = () => {
  return (
    <>
      <Container>
        <GenericInputs
          placeholder={`Enter an address, neighborhood, city, or ZIP code`}
        />
        <Button type={"light"}>
          {" "}
          <Icons.filterIcon /> Advanced
        </Button>
        <Button type={"primary"}>
          <Icons.searchIcon /> Search
        </Button>
      </Container>
    </>
  );
};
export default Filter;
