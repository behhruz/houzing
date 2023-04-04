import React, { useRef } from "react";
import {
  ArrowIcon,
  BathIcon,
  BedsIcon,
  Blur,
  BoxIcons,
  Container,
  Content,
  GarageIcon,
  Img,
  Text,
  Text1,
  TriangleIcon,
  WrapperIcons,
} from "./style";

import { Carousel } from "antd";
import Img1 from "../../assets/img/house1.png";
import Img2 from "../../assets/img/house2.png";
import { GenericButton } from "../generic/button/style";
import Button from "../generic/button";

export const GenericCarousel = () => {
  const slider = useRef();

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.prev();
    if (name === "left") slider.current.next();
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Container>
      <ArrowIcon data-name="left" onClick={onMove} name="left" left />{" "}
      <Carousel afterChange={onChange} autoplay ref={slider}>
        <Img src={Img1} />
        <Img src={Img2} />
        <Img src={Img1} />
        <Img src={Img2} />
      </Carousel>
      <Content>
        <Text>Skyper Pool Partment</Text>
        <Text1>112 Glenwood Ave Hyde Park, Boston, MA</Text1>
        <WrapperIcons>
          <BoxIcons>
            <BedsIcon />
            <Text1>4 beds</Text1>
          </BoxIcons>
          <BoxIcons>
            <BathIcon />
            <Text1>5 Baths</Text1>
          </BoxIcons>
          <BoxIcons>
            <GarageIcon />
            <Text1> 1 Garage</Text1>
          </BoxIcons>
          <BoxIcons>
            <TriangleIcon />
            <Text1>1200 Sq Ft</Text1>
          </BoxIcons>
        </WrapperIcons>
        <Button type="dark" width={150}>Read more</Button>
      </Content>
      <Blur />
      <ArrowIcon onClick={onMove} data-name="right" name="right" />
    </Container>
  );
};

export default GenericCarousel;
