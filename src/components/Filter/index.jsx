import React, { useRef } from "react";
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
  const CountryRef = useRef();
  const RegionRef = useRef();
  const CityRef = useRef();
  const ZipCodeRef = useRef();
  const RoomsRef = useRef();
  const SizeRef = useRef();
  const SortRef = useRef();
  const PriceRef = useRef();
  const MaxPriceRef = useRef();
  const menu = (
    <MenuWrapper>
      <Section>
        <TextBox>
          <h1 className="subTitle">Address</h1>
        </TextBox>
        <InputBox>
          <GenericInputs ref={CountryRef} placeholder={"Country"} />
          <GenericInputs ref={RegionRef} placeholder={"Region"} />
          <GenericInputs ref={CityRef} placeholder={"City"} />
          <GenericInputs ref={ZipCodeRef} placeholder={"Zip Code"} />
        </InputBox>
      </Section>
      <Section>
        <TextBox>
          <h2 className="subTitle">Apartment info</h2>
        </TextBox>
        <InputBox>
          <GenericInputs ref={RoomsRef} placeholder={"Rooms"} />
          <GenericInputs ref={SizeRef} placeholder={"Size"} />
          <GenericInputs ref={SortRef} placeholder={"Sort"} />
        </InputBox>
      </Section>
      <Section>
        <TextBox>
          <h2 className="subTitle">Price</h2>
        </TextBox>
        <InputBox>
          <GenericInputs ref={PriceRef} placeholder={"Price"} />
          <GenericInputs ref={MaxPriceRef} placeholder={"Max Price"} />
        </InputBox>
      </Section>
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
