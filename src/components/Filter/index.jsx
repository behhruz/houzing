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
import uzeReplace from "../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

export const Filter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();
  const CountryRef = useRef();
  const RegionRef = useRef();
  const CityRef = useRef();
  const ZipCodeRef = useRef();
  const RoomsRef = useRef();
  const SizeRef = useRef();
  const SortRef = useRef();
  const PriceRef = useRef();
  const MaxPriceRef = useRef();
  console.log(query.get("country"), "query");
  const onChange = ({ target: { name, value } }) => {
    console.log(name, value);
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
    console.log(location);
  };
  const menu = (
    <MenuWrapper>
      <Section>
        <TextBox>
          <h1 className="subTitle">Address</h1>
        </TextBox>
        <InputBox>
          <GenericInputs
            defaultValue={query.get("country")}
            onChange={onChange}
            ref={CountryRef}
            placeholder={"Country"}
            name="country"
          />
          <GenericInputs
            defaultValue={query.get("region")}
            onChange={onChange}
            ref={RegionRef}
            placeholder={"Region"}
            name="region"
          />
          <GenericInputs
            defaultValue={query.get("city")}
            onChange={onChange}
            ref={CityRef}
            placeholder={"City"}
            name="city"
          />
          <GenericInputs
            defaultValue={query.get("zipCode")}
            onChange={onChange}
            ref={ZipCodeRef}
            placeholder={"Zip Code"}
            name="zipCode"
          />
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

  // console.log(useReplace("address", "Tashkent"));
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
