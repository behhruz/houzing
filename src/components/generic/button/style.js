import styled from "styled-components";

const GetType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid white",
        color: "white",
      };
    case "light":
      return {
        background: "white",
        border: "1px solid #0D263B",
        color: "#0D263B",
      };
    case "primary":
      return {
        background: "#0061DF",
        border: "none",
        color: "white",
      };

    default:
      return {
        background: "#0061DF",
        border: "none",
        color: "white",
      };
  }
};

const GenericButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "120px")};
  border-radius: 2px;
  min-width: 121px;
  font-size: 14px;
  cursor: pointer;
  ${GetType}
  &:active {
    opacity: 0.7;
  }
`;

export { GenericButton };
