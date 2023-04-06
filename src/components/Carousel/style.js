import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as Beds } from "../../assets/icons/bed.svg";
import { ReactComponent as Bath } from "../../assets/icons/bath.svg";
import { ReactComponent as Garage } from "../../assets/icons/car.svg";
import { ReactComponent as Metr } from "../../assets/icons/ruler.svg";

const Container = styled.div`
  position: relative;
`;
const ArrowIcon = styled(Arrow)`
  position: absolute;
  width: 50px;
  height: 50px;
  padding: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  z-index: 1;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  top: 50%;
  cursor: pointer;
  left: ${({ left }) => !left && "20px"};
  right: ${({ left }) => left && "20px"};
  transform: ${({ left }) => (!left ? "rotate(90deg)" : "rotate(-90deg)")};
  :hover {
    background: rgba(255, 255, 255, 0.4);
  }
  z-index: 6;
`;
const BedsIcon = styled(Beds)``;
const BathIcon = styled(Bath)``;
const GarageIcon = styled(Garage)``;
const TriangleIcon = styled(Metr)``;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Blur = styled.div`
  height: 100% -;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 5;
  width: 100%;
  height: 100%;
`;
const Text = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  color: white;
`;
const Text1 = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: white;
`;
const WrapperIcons = styled.div`
display: flex;
gap: 18px;
`;
const BoxIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export {
  Container,
  ArrowIcon,
  Img,
  Blur,
  Content,
  Text,
  Text1,
  BoxIcons,
  WrapperIcons,
  BedsIcon,
  BathIcon,
  GarageIcon,
  TriangleIcon,
};
