import React from "react";
import {
  Container,
  Content,
  Details,
  Icons,
  Img,
} from "./style";
import NoImg from "../../assets/img/noimg.jpeg";
export const HouseCard = ({ url, title, info }) => {
  return (
    <Container>
      <Img src={url || NoImg} />
      <Content>
        {" "}
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div className="info">{info || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>
            <Icons.Beds />
          </Details.Item>
          <Details.Item>
            {" "}
            <Icons.Baths />
          </Details.Item>
          <Details.Item>
            {" "}
            <Icons.Garages />
          </Details.Item>
          <Details.Item>
            {" "}
            <Icons.Metrs />
          </Details.Item>
        </Details>
      </Content>
    </Container>
  );
};
