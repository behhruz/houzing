import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";
const Wrapper = styled.div`
  background-color: var(--colorPrimary);
  color: white;
  padding: var(--padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  height: 64px;
`;
const Section = styled.nav`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};
`;

const Container = styled.div``;
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

export { Container, Section, Wrapper, Logo, Links };
