import React from "react";
import { GenericInputs } from "../generic/Input";
import { Button } from "../generic/button/index";
import { Container, Icons } from "./style";
import { Dropdown } from "antd";

export const Filter = () => {
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
          menu={
            { <div>
              <h1>test</h1>
            </div>}
           
          }
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
        >
          abvg
        </Dropdown>
      </Container>
    </>
  );
};

export default Filter;
