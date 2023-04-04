import React from "react";
import { Container, Content, Details, Img } from "./style";
import NoImg from "../../assets/img/noimg.jpeg";
import { WrapperIcons } from "../Carousel/style";
export const HouseCard = ({ url, title, info }) => {
  return (
    <Container>
      <Img src={url || NoImg} />
      <Content>
        {" "}
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div className="info">{info || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>1</Details.Item>
          <Details.Item>1</Details.Item>
          <Details.Item>1</Details.Item>
          <Details.Item>1</Details.Item>
        </Details>
      </Content>
    </Container>
  );
};
