import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import yo from "../images/LandingPage/yo-old.JPG";
import yo2 from "../images/LandingPage/yo-nasa.JPG";
import Box from "@mui/material/Box";
import Carousel from "react-material-ui-carousel";

const LandingCarousel = () => {
  const { t } = useTranslation("common");

  return (
    <Fragment>
      <Box sx={{ display: { sm: "none" } }}>
        <Carousel
          interval={10000}
          indicatorContainerProps={{
            style: {
              marginTop: -9,
            },
          }}
          navButtonsWrapperProps={{
            // Move the buttons to the bottom. Unsetting top here to override default style.
            style: {
              bottom: "0",
              top: "unset",
            },
          }}
        >
          <Box>
            <img
              className="landingPhoto"
              src={yo}
              alt={t("landing.foto-antigua")}
            />
          </Box>
          <Box>
            <img
              className="landingPhoto"
              src={yo2}
              alt={t("landing.foto-nasa")}
            />
          </Box>
        </Carousel>
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Carousel
          interval={10000}
          indicatorContainerProps={{
            style: {
              marginTop: -9,
            },
          }}
          navButtonsWrapperProps={{
            // Move the buttons to the bottom. Unsetting top here to override default style.
            style: {
              bottom: "0",
              top: "unset",
            },
          }}
          navButtonsAlwaysVisible={true}
        >
          <Box sx={{ padding: "0 60px" }}>
            <img
              className="landingPhoto"
              src={yo}
              alt={t("landing.foto-antigua")}
            />
          </Box>
          <Box sx={{ padding: "0 60px" }}>
            <img
              className="landingPhoto"
              src={yo2}
              alt={t("landing.foto-nasa")}
            />
          </Box>
        </Carousel>
      </Box>
    </Fragment>
  );
};

export default LandingCarousel;
