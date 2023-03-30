import React from "react";
import { GenericInputs } from "../generic/Input";
import { Button } from "../generic/button/index";
import { Container, Icons } from "./style";
import { Dropdown } from "antd";

export const Filter = () => {
  const items = [
    {
      key: "1",
      label: (
        <div style={{ display: "flex", gap: "21px" }}>
          <Button />
          <Button />
        </div>
      ),
    },
  ];
  return (
    <>
      <Container>
        <GenericInputs
          icon={<Icons.houseIcon />}
          placeholder="Enter an address, neighborhood, city, or ZIP code"
        />
        <Button type="light">
          <Icons.filterIcon /> Advanced
        </Button>
        <Dropdown
          trigger={["click"]}
          menu={{ items }}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
        >
          <Button />
        </Dropdown>
      </Container>
    </>
  );
};

export default Filter;
