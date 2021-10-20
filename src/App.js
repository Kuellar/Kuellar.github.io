import React, { Suspense, StrictMode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, orange } from "@mui/material/colors";
import Layout from "./components/Layout";
import LoadingPage from "./pages/LandingPage";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_es from "./translations/es/common.json";
import common_en from "./translations/en/common.json";
import "./styles.css";

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: orange,
  },
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
  return (
    <StrictMode>
      <I18nextProvider i18n={i18next}>
        <Suspense fallback={LoadingPage}>
          <ThemeProvider theme={theme}>
            <Layout />
          </ThemeProvider>
        </Suspense>
      </I18nextProvider>
    </StrictMode>
  );
}

export default App;
