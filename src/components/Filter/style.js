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

  path {
    color: red;
  }
  fill: red;
`;
Icons.filterIcon = styled(FilterIcon)`
  margin-right: 8px;
`;
const MenuWrapper = styled.div``;
const Section = styled.div``;
const TextBox = styled.div`
  display: flex;
  gap: 20px;
`;
const InputBox = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
  /* max-width: 183px; */
`;
const Section1 = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  
`;
export { Container, Icons, MenuWrapper, Section, Section1, TextBox, InputBox };
