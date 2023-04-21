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
export const HouseCard = ({ data }) => {
  const {
    address,
    city,
    country,
    houseDetails,
    price,
    salePrice,
    attachments,
    description,
  } = data;
  console.log(data);
  return (
    <Container>
      <Img src={attachments[0]?.imgPath || NoImg} />
      <Content>
        {" "}
        <div className="subTitle inline">
          {`${city},${country},${description}` || "New Apartment Nice Wiew"}
        </div>
        <div className="info">{address || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>
            <Icons.Beds />
            <Info>Bed {houseDetails?.beds || 0} </Info>
          </Details.Item>
          <Details.Item>
            {" "}
            <Icons.Baths />
            <Info>Bath {houseDetails?.bath || 0}</Info>
          </Details.Item>
          <Details.Item>
            {" "}
            <Icons.Garages />
            <Info>Garage {houseDetails?.garage || 0}</Info>
          </Details.Item>
          <Details.Item>
            {" "}
            <Icons.Metrs />
            <Info>
              {`${houseDetails?.area} m` || "45.2 kv"}
              <sup>2</sup>
            </Info>
          </Details.Item>
        </Details>
      </Content>
      <Liner />
      <Content footer>
        <Details.Item footer>
          <div className="info">
            <del>{price || 0}$/mo</del>{" "}
          </div>
          <div className="subTitle">{salePrice}$/mo</div>
        </Details.Item>
        <Details.Item flex>
          <Icons.Resizes />
          <Icons.Loves />
        </Details.Item>
      </Content>
    </Container>
  );
};
export default HouseCard;
