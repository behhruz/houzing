import React, { useEffect, useState } from "react";
import { Container } from "./style";

import HouseCard from "../HouseCard";
const { REACT_APP_BASE_URL: url } = process.env;
export const Preporties = () => {
  // console.log(url);
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
        {data.map((value) => {
          return <HouseCard data={value} />;
        })}
      </Container>
    </>
  );
};
export default Preporties;
