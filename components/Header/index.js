import Image from "next/image";
import React, { useContext } from "react";
import User from "./components/User";
import StyledHeader from "./styles";
import { UserContext } from '../../pages/_app';

function Header() {
  const {user} = useContext(UserContext);
  
  return (
    <StyledHeader>
      <Image
        src={user.bg}
        height={230}
        width={1512}
        alt="Banner"
        className="banner"
      />

      <User usuario={user} />
    </StyledHeader>
  );
}

export default Header;
