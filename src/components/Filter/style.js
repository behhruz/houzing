import styled from "styled-components";
// import { ReactComponent as advancedIcon } from "../../assets/icons/";
import { ReactComponent as HouseIcon } from "../../assets/icons/houses.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
`;
const IconHouse = styled(HouseIcon)``;

export { Container, IconHouse };
