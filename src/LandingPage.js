import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const LandingPage = () => {
  // const { t } = useTranslation("common");
  // const theme = useTheme();

  return (
    <Box sx={{ bgcolor: "#1d2834" }} color="#dde4e7">
      <CssBaseline />
      <Header />
      <Intro />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
};

export default LandingPage;
