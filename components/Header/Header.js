import Image from "next/image";
import React from "react";
import Menu from "../Menu/Menu";
import User from "../User/User";
import StyledHeader from "./styles";

function Header(props) {
  return (
    <StyledHeader>
      <Menu />

      <Image src='/banner.jpg' height={230} width={1512} alt="Banner" className="banner"/>
      
      <User />
    </StyledHeader>
  );
}

export default Header;
