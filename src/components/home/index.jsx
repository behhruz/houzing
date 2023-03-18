import React from "react";
import { GenericInputs } from "../generic/Input";
import { Container } from "./style";

export const Home = () => {
  return (
    <>
      <Container>
        <h1>home</h1>
        <GenericInputs width={400} placeholder={'test'}/>
      </Container>
    </>
  );
};
