import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavbarUttils from "../../utilities/navbar";
import {
  Button,
  Container,
  Links,
  Logo,
  Main,
  Section,
  Wrapper,
} from "./style";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section logo onClick={() => navigate("/home")}>
            <Logo /> <h3>Houzing </h3>
          </Section>
          <Section>
            {NavbarUttils.map(({ title, path }, index) => {
              return (
                <Links
                  key={index}
                  to={path}
                  className={({ isActive }) => isActive && "active"}
                >
                  {title}
                </Links>
              );
            })}
          </Section>
          <Section>
            <Button>Login</Button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};
