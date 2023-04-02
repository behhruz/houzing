import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
const Container = styled.div`
  height: 62vh;
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
`;
const Img = styled.img`
  width: 100%;
`;
const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
`;
export { Container, ArrowIcon, Img, Blur };
