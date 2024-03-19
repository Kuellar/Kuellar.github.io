import React from "react";
import yo from "../images/LandingPage/yo-old.JPG";
import yo2 from "../images/LandingPage/yo-nasa.JPG";
import Carousel from "react-material-ui-carousel";
import PhotoCarousel from "./PhotoCarousel";

const LandingCarousel = () => {
  return (
    <Carousel
      interval={10000}
      indicatorContainerProps={{
        style: {
          marginTop: -4,
        },
      }}
      navButtonsAlwaysVisible={true}
    >
      <PhotoCarousel photo={yo} alt="landing.foto-nasa" />
      <PhotoCarousel photo={yo2} alt="landing.foto-nasa" />
    </Carousel>
  );
};

export default LandingCarousel;
