import Image from "next/image";
import React from "react";
import User from "./components/User";
import StyledHeader from "./styles";
import config from "../../config.json";

function Header() {
  return (
    <StyledHeader>
      <Image
        src={config.bg}
        height={230}
        width={1512}
        alt="Banner"
        className="banner"
      />

      <User />
    </StyledHeader>
  );
}

export default Header;
