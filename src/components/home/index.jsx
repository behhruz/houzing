import React from "react";
import GenericCarousel from "../Carousel";
import { Container } from "./style";
import { HouseCard } from "../HouseCard";

export const Home = () => {
  return (
    <>
      <Container>
        <GenericCarousel />
        <HouseCard />
      </Container>
    </>
  );
};
