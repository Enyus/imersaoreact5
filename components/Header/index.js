import Image from "next/image";
import React from "react";
import Menu from "../Menu";
import User from "../User";
import StyledHeader from "./styles";
import config from "../../config.json";

function Header({ valorDoFiltro, setValorDoFiltro }) {
  return (
    <StyledHeader>
      <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />

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
