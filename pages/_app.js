import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import RegisterVideo from "../components/RegisterVideo";

const theme = {
  light: {
    backgroundBase: "#f9f9f9",
    backgroundLevel1: "#ffffff",
    backgroundLevel2: "#f0f0f0",
    borderBase: "#e5e5e5",
    textColorBase: "#222222",
  },
  dark: {
    backgroundBase: "#181818",
    backgroundLevel1: "#202020",
    backgroundLevel2: "#313131",
    borderBase: "#383838",
    textColorBase: "#FFFFFF",
  },
};

export const ColorModeContext = createContext({
  mode: "",
  setMode: () => {
    console.log("Falta a configuração de setMode");
  },
  toggleMode: () => {
    console.log("Falta a configuração de toggleMode");
  },
});

export const UserContext = createContext(null)

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState("light");
  const [user, setUser] = useState({
    name: "Cássio Sandrigo Santini (Enyus)",
    job: "Web Developer",
    github: "enyus",
    bg: "/banner.jpg",
    id: 1
  });

  function toggleMode() {
    if (mode === "dark") {
      setMode("light");
    }
    if (mode === "light") {
      setMode("dark");
    }
  }

  return (
    <UserContext.Provider value={{user, setUser}}>
      <ColorModeContext.Provider
        value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}
      >
        <ThemeProvider theme={theme[mode]}>
          <Component {...pageProps} />
          <RegisterVideo />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </UserContext.Provider>
  );
}

export default MyApp;
