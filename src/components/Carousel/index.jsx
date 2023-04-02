import React, { useRef } from "react";
import { ArrowIcon, Blur, Container, Img } from "./style";
import { Carousel } from "antd";
import Img1 from "../../assets/img/house1.png";
import Img2 from "../../assets/img/house2.png";

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
      <Blur />
      <ArrowIcon onClick={onMove} data-name="right" name="right" />
    </Container>
  );
};

export default GenericCarousel;
