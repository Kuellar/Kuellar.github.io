import React from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";

const PhotoCarousel = ({ photo, alt }) => {
  const { t } = useTranslation("common");

  return (
    <Box
      sx={{
        // padding: { xs: "0", sm: "0 60px" },
        height: {
          xs: "400px !important",
          sm: "500px !important",
          md: "600px !important",
        },
      }}
    >
      <img
        className="landingPhoto"
        src={photo}
        alt={t(alt)}
        style={{
          height: "inherit",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
        }}
      />
    </Box>
  );
};

export default PhotoCarousel;
