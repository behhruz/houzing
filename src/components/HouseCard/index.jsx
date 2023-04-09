import React from "react";
import {
  Container,
  Content,
  Details,
  Footer,
  Icons,
  Img,
  Info,
  Line,
  Liner,
} from "./style";
import NoImg from "../../assets/img/noimg.jpeg";
export const HouseCard = ({ url, title, info,bed,bath,garage,ruller }) => {
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
            <Info>Bed {bed || 0} </Info>
          </Details.Item>
          <Details.Item>
            {" "}
            <Icons.Baths />
            <Info>Bath {bath || 0}</Info>
          </Details.Item>
          <Details.Item>
            {" "}
            <Icons.Garages />
            <Info>Garage {garage || 0}</Info>
          </Details.Item>
          <Details.Item>
            {" "}
            <Icons.Metrs />
            <Info>{ruller || '45.2 kv'}</Info>
          </Details.Item>
        </Details>
      </Content>
      <Liner />
      <Content footer>
        <Details.Item footer>
          <div className="info"> $7,500/mo</div>
          <div className="subTitle">$2,800/mo</div>
        </Details.Item>
        <Details.Item flex>
          <Icons.Resizes />
          <Icons.Loves />
        </Details.Item>
      </Content>
    </Container>
  );
};
