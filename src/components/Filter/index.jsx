import React from "react";
import { GenericInputs } from "../generic/Input";
import { Button } from "../generic/button/index";
import {
  Container,
  Icons,
  InputBox,
  MenuWrapper,
  Section,
  Section1,
  TextBox,
} from "./style";
import { Dropdown } from "antd";

export const Filter = () => {
  const menu = (
    <MenuWrapper>
      <Section>
        <TextBox>
          <h1 className="subTitle">Address</h1>
        </TextBox>
        <InputBox>
          <GenericInputs placeholder={"Country"} />
          <GenericInputs placeholder={"Region"} />
          <GenericInputs placeholder={"City"} />
          <GenericInputs placeholder={"Zip Code"} />
        </InputBox>
      </Section>
      <Section>
        <TextBox>
          <h2 className="subTitle">Apartment info</h2>
        </TextBox>
        <InputBox>
          <GenericInputs placeholder={"Rooms"} />
          <GenericInputs placeholder={"Size"} />
          <GenericInputs placeholder={"Sort"} />
        </InputBox>
      </Section>
      <Section>
        <TextBox>
          <h2 className="subTitle">Price</h2>
        </TextBox>
        <InputBox>
          <GenericInputs placeholder={"Price"} />
          <GenericInputs placeholder={"Max Price"} />
        </InputBox>
      </Section>
      <Section1 box>
        <TextBox>
          <Button type="light" />
          <Button />
        </TextBox>
      </Section1>
    </MenuWrapper>
  );
  return (
    <>
      <Container>
        <GenericInputs
          icon={<Icons.houseIcon />}
          placeholder="Enter an address, neighborhood, city, or ZIP code"
        />
        <Dropdown
          trigger={["click"]}
          overlay={menu}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
        >
          <Button type="light">
            <Icons.filterIcon /> Advanced
          </Button>
        </Dropdown>{" "}
        <Button>
          <Icons.searchIcon />
          Search
        </Button>
      </Container>
    </>
  );
};

export default Filter;
