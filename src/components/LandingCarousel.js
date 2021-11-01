import React, { createRef, Fragment, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import yo from "../images/LandingPage/yo-old.JPG";
import yo2 from "../images/LandingPage/yo-nasa.JPG";
import Box from "@mui/material/Box";
import Carousel from "react-material-ui-carousel";

const LandingCarousel = () => {
  const { t } = useTranslation("common");
  const [heightFix, setHeightFix] = useState(0);
  const [heightFix2, setHeightFix2] = useState(0);
  const image = createRef();
  const image2 = createRef();

  useEffect(() => {
    setHeightFix((image.current ? image.current.height : 0) + 35);
    setHeightFix2((image2.current ? image2.current.height : 0) + 35);
  }, [image, image2]);

  return (
    <Fragment>
      <Box sx={{ display: { sm: "none" }, height: heightFix2 }}>
        <Carousel
          interval={10000}
          indicatorContainerProps={{
            style: {
              marginTop: -9,
            },
          }}
        >
          <Box>
            <img
              className="landingPhoto"
              src={yo}
              alt={t("landing.foto-antigua")}
              ref={image2}
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
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          height: heightFix,
        }}
      >
        <Carousel
          interval={10000}
          indicatorContainerProps={{
            style: {
              marginTop: -9,
            },
          }}
          navButtonsAlwaysVisible={true}
        >
          <Box sx={{ padding: "0 60px" }}>
            <img
              className="landingPhoto"
              src={yo}
              alt={t("landing.foto-antigua")}
              ref={image}
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
