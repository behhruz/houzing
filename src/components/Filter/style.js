import styled from "styled-components";
// import { ReactComponent as advancedIcon } from "../../assets/icons/";
import { ReactComponent as HouseIcon } from "../../assets/icons/houses.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/setting.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
`;
const Icons = styled.div``;
Icons.houseIcon = styled(HouseIcon)`
  margin-right: 8px;
`;
Icons.searchIcon = styled(SearchIcon)`
  margin-right: 8px;

path{
  color: red;
}
fill: red;
`;
Icons.filterIcon = styled(FilterIcon)`
  margin-right: 8px;

`;

export { Container, Icons };
