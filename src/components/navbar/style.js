import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";
const Wrapper = styled.div`
  color: white;
  padding: var(--padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  height: 64px;
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;
const Section = styled.nav`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};

  .active {
    color: #b8ff06;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--colorPrimary);
`;
const Logo = styled(logoImg)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #ffff;
  }
`;
const Links = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: white;
`;

export { Container, Section, Wrapper, Logo, Links, Main };
