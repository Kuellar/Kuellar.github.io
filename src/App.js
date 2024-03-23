import React, { Suspense, StrictMode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey, grey } from "@mui/material/colors";
// import Layout from "./components_old/Layout";
import LoadingPage from "./pages_old/LandingPage";
import LandingPage from "./LandingPage";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_es from "./translations/es/common.json";
import common_en from "./translations/en/common.json";
import "./styles.css";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    en: {
      common: common_en,
    },
    es: {
      common: common_es,
    },
  },
});

function App() {
  // Dummy Comments

  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: blueGrey,
          secondary: grey,
        },
      }),
    [mode]
  );

  return (
    <StrictMode>
      <I18nextProvider i18n={i18next}>
        <Suspense fallback={LoadingPage}>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              {/* <Layout /> */}
              <LandingPage />
            </ThemeProvider>
          </ColorModeContext.Provider>
        </Suspense>
      </I18nextProvider>
    </StrictMode>
  );
}

export default App;
