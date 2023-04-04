import styled from "styled-components";

const Container = styled.div`
  background: #ffffff;
  border: 1px solid red;
  border-radius: 3px;
  width: 380px;
  height: 429px;
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
export { Container, Img, Content,Details };
