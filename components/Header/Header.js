import React from "react";
import Menu from "../Menu/Menu";
import StyledHeader from "./styles";

function Header(props) {
  return (
    <StyledHeader>
      <Menu />
      <br />
      Banner <br />
      User <br />
    </StyledHeader>
  );
}

export default Header;
