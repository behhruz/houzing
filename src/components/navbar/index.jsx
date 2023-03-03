import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavbarUttils from "../../utilities/navbar";
import { Container, Links, Logo, Section, Wrapper } from "./style";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Section logo onClick={() => navigate("/home")}>
          <Logo /> <h3>Houzing </h3>
        </Section>
        <Section>
          {NavbarUttils.map(({ title, path }) => {
            return <Links to={path}>{title}</Links>;
          })}
        </Section>
        <Section>1</Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};
