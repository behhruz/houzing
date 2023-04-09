import styled from "styled-components";
import { ReactComponent as Bed } from "../../assets/icons/bed.svg";
import { ReactComponent as Bath } from "../../assets/icons/bath.svg";
import { ReactComponent as Garage } from "../../assets/icons/car.svg";
import { ReactComponent as Metr } from "../../assets/icons/ruler.svg";
const Container = styled.div`
  background: #ffffff;
  border: 1px solid red;
  border-radius: 3px;
  width: 381px;
  height: 429px;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
  margin-bottom: 24px;
  border: 1px solid black;
`;
const Content = styled.div`
  padding: 0 20px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;
Details.Item = styled.div`
  display: flex;
  flex-direction: column;
`;
const Icons = styled.div``;

Icons.Beds = styled(Bed)``;
Icons.Baths = styled(Bath)``;
Icons.Garages = styled(Garage)``;
Icons.Metrs = styled(Metr)``;
export { Container, Img, Content, Details, Icons };
