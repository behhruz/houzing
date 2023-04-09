import styled from "styled-components";
import { ReactComponent as Bed } from "../../assets/icons/bed.svg";
import { ReactComponent as Bath } from "../../assets/icons/bath.svg";
import { ReactComponent as Garage } from "../../assets/icons/car.svg";
import { ReactComponent as Metr } from "../../assets/icons/ruler.svg";
import { ReactComponent as Love } from "../../assets/icons/love.svg";
import { ReactComponent as Resize } from "../../assets/icons/resize.svg";

const Container = styled.div`
  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  width: 381px;
  height: 429px;
  margin: 0 auto;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
  margin-bottom: 24px;
`;
const Content = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: ${({ footer }) => footer && "center"};
  margin: ${({ footer }) => footer && "8px 0"};
  justify-content: ${({ footer }) => footer && "space-between"};
  flex-direction: ${({ footer }) => (footer ? "row" : "column")};
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;
Details.Item = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (flex ? "row" : "column")};
  align-items: ${({ footer }) => !footer && "center"};
`;
const Icons = styled.div``;

Icons.Beds = styled(Bed)``;
Icons.Baths = styled(Bath)``;
Icons.Garages = styled(Garage)``;
Icons.Metrs = styled(Metr)``;
Icons.Resizes = styled(Resize)`
  margin: 0 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  :active {
    transform: scale(0.8);
  }
`;
Icons.Loves = styled(Love)`
  width: 35px;
  height: 35px;
  padding: 5px;
  border-radius: 50%;
  background-color: #f6f8f9;
  cursor: pointer;
  :active {
    transform: scale(0.8);
  }
`;
const Info = styled.div`
  margin: 10px 0 16px 0;
`;
const Liner = styled.div`
  background-color: #e6e9ec;
  height: 1px;
  width: 100%;
`;

export { Container, Img, Content, Details, Icons, Info, Liner };
