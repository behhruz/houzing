import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavbarUttils from "../../utilities/navbar";
import Filter from "../Filter";
import { Button } from "../generic/button/index";
import { Container, Links, Logo, Main, Section, Wrapper } from "./style";
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
            {NavbarUttils.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Links
                    key={index}
                    to={path}
                    className={({ isActive }) => isActive && "active"}
                  >
                    {title}
                  </Links>
                )
              );
            })}
          </Section>
          <Section>
            <Button onClick={() => navigate("/signin")} type={"dark"}>
              Sign in
            </Button>
          </Section>
        </Wrapper>
      </Main>

      <Outlet />
      <Filter />
    </Container>
  );
};
