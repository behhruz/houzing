import React, { useState, useEffect } from "react";
import GenericCarousel from "../Carousel";
import { Container } from "./style";
import HouseCard from "../HouseCard";
const { REACT_APP_BASE_URL: url } = process.env;
export const Home = () => {
  const [data, SetData] = useState([]);
  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        SetData(res?.data);
      });
  }, []);
  return (
    <>
      <Container>
        <GenericCarousel />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
          {data.map((value) => {
            return <HouseCard data={value} />;
          })}
        </div>
      </Container>
    </>
  );
};
