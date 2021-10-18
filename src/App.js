import React, { Suspense } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, orange } from "@mui/material/colors";
import Layout from "./components/Layout";
import LoadingPage from "./pages/LandingPage";

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: orange,
  },
});

function App() {
  return (
    <Suspense fallback={LoadingPage}>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
