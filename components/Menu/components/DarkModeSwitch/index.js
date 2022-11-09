import React, { useContext } from "react";
import { ColorModeContext } from "../../../../pages/_app";
import StyledSwitch from "./styles";

function DarkModeSwitch() {
  const contexto = useContext(ColorModeContext);
  return (
    <StyledSwitch>
      <input
        id="darkmode"
        type="checkbox"
        onChange={() => {
          contexto.toggleMode();
        }}
      />
      <label htmlFor="darkmode" className="darkmode-switch">
        <span>🌙</span>
        <span>☀️</span>
      </label>
    </StyledSwitch>
  );
}

export default DarkModeSwitch;
